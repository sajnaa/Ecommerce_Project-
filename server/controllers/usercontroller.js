// "use strict";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const twillo = require("twilio")(
  "ACbc2e05acfab21e5823802a77fbd2568b",
  "36ef697dac8ded88557c81028892fa0a"
);
const userSchema = require("../models/usermodel");
const { mail_to_customer, sendEmail } = require("../middleware/email");
const { Admin, authverify } = require("../middleware/auth");

async function register(req, res) {
  try {
    console.log(req.body)
    const mobile = req.body.mobilenumber;
    if (mobile) {
      const find = await userSchema.findOne({ mobilenumber: mobile });
      if (find) {
        res
          .status(400)
          .json({ message: "user with this mobile number already exist" });
      }
    } else {
      res.status(400).json({ message: "mobile number required" });
    }
    if (req.body.email) {
      findemail = await userSchema.findOne({ email: req.body.email });
      if (findemail) {
        res.status(400).json({ message: "user with this email already exist" });
      }
    }
    let user = await userSchema(req.body);
    const password = req.body.password;
    if (password) {
      let salt = await bcrypt.genSalt(10);
      user.password = bcrypt.hashSync(password, salt);
    }
    const saveuser = await userSchema(req.body).save();
    let payload = {
      uuid: saveuser.uuid,
      role: saveuser.role,
      _id: saveuser._id,
      name: saveuser.name,
      profile: saveuser.profilepic,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "8h",
    });
    return res.status(200).json({
      message: "registration completed",
      status: "success",
      user: saveuser,
      token: token,
    });
  } catch (error) {
    console.log(error.message);
  }
}

// login
async function login(req, res) {
  try {
    let data = req.body.userdata;
    const user = await userSchema.findOne({
      $or: [{ email: data }, { phone: data }],
    });
    if (!user) {
      return res.status(400).send("The user not found");
    }
    if (user) {
      console.log(user);
      let isMatch = await bcrypt.compare(req.body.password, user.password);
      if (isMatch) {
        console.log("uuid is", user.uuid);
        let payload = {
          uuid: user.uuid,
          role: user.role,
          _id: user._id,
          name: user.name,
          profile: user.profilepic,
        };
        const jwttoken = jwt.sign(payload, process.env.JWT_SECRET);
        return res.status(200).json({
          status: "success",
          message: "Logged in successfully",
          data: user,
          token: jwttoken,
        });
      } else {
        return res
          .status(400)
          .json({ status: "failure", message: "Incorrect password" });
      }
    } else {
      res.status(400).send("password is wrong!");
    }
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ status: "failure", message: error.message });
  }
}
// email- verification
//router.get("/email-verification/:Email", async (req, res) => {
//     try {
//       const detail = await userSchema.findOne({ Email: req.params.Email }).exec();
//       if (detail) {
//         userSchema
//           .updateOne(
//             { Email: req.params.Email },
//             { VerifiedUser: true },
//             { new: true }
//           )
//           .exec();

//         return res.status(200).json("account verified successfully");
//       } else {
//         return res.status(200).json("account verification failed");
//       }
//     } catch (error) {
//       console.log(error.message);
//       return res.status(500).json({ status: "failure", message: error.message });
//     }
//   });

// router.post("/forget-password", async (req, res) => {
//   try {
//     if (req.body.Email) {
//       const user = await userSchema.findOne({ Email: req.body.Email });
//       if (!user) {
//         return res
//           .status(409)
//           .send({ message: "user with given email doesn't exist" });
//       } else {
//         return res
//           .status(200)
//           .send({ message: "we have sent a otp to your registered email" });
//       }
//     } else if (req.body.Mobilenumber) {
//       const mobile = await userSchema.findOne({
//         Mobilenumber: req.body.Mobilenumber,
//       });
//       if (!mobile) {
//         return res
//           .status(409)
//           .send({ message: "user with given mobile number doesn't exist" });
//       } else {
//         return res.status(200).send({
//           message: "we have sent a otp to your registered mobile number",
//         });
//       }
//     }
//   } catch (error) {
//     console.log(error.message);
//     res
//       .status(500)
//       .send({ message: "Internal server Error", error: error.message });
//   }
// });

// reset-password
// router.post("/password-reset/user", async (req, res) => {
//   try {
//     const user = await userSchema.findOne({ Email: req.params.user });
//     // user.password = req.body.password;
//     if (!user.VerifiedUser === true) {
//       user.VerifiedUser = true;
//     }
//     let Salt = await bcrypt.genSalt(10);
//     const newpassword = bcrypt.hashSync(req.body.password, Salt);
//     user.password = newpassword;
//     const result = await userSchema
//       .findOneAndUpdate(
//         { Email: req.query.user },
//         { password: newpassword },
//         { new: true }
//       )
//       .exec();
//     return res
//       .status(200)
//       .send({ message: "password changed sucessfully." }, { data: result });
//   } catch (error) {
//     res.send("An error occured");
//     console.log(error);
//   }
// });

// logout
// router.post("/user-logout", async (req, res) => {
//   try {
//     const result = await userSchema
//       .findOneAndUpdate(
//         { uuid: req.query.uuid },
//         { loginStatus: false },
//         { new: true }
//       )
//       .exec();
//     return res.status(200).json({
//       status: "success",
//       message: "Logout successfully",
//       result: result,
//     });
//   } catch (error) {
//     console.log(error.message);
//     return res.status(500).json({ status: "failure", message: error.message });
//   }
// });

// update user
// router.put("/update/:_id", async (req, res) => {
//   console.log(req.params._id);
//   console.log(req.body);
//   if (req.body._id === req.params._id) {
//     try {
//       if (req.body.UserName) {
//         const find = await userSchema.findOne({ UserName: req.body.UserName });
//         if (!find) {
//           const update = await userSchema.findOneAndUpdate(
//             { _id: req.params._id },
//             {
//               $set: req.body,
//             },
//             { new: true }
//           );
//           res.status(200).json({
//             status: "success",
//             message: "user updated successfully",
//             result: update,
//           });
//         } else {
//           res.status(400).json({
//             status: "failure",
//             message: "UserName already exist",
//           });
//         }
//       } else {
//         const user = await userSchema.findOneAndUpdate(
//           { _id: req.params._id },
//           {
//             $set: req.body,
//           },
//           { new: true }
//         );
//         res.status(200).json({
//           status: "success",
//           message: "user updated successfully",
//           result: user,
//         });
//       }
//     } catch (error) {
//       res.status(500).json(err);
//     }
//   } else {
//     res.status(401).json("you can only update your account");
//   }
// });
// $2b$10$bnZFHXDtB1017raZ3c4AXezkgPydW/FFRP.7ImCfEY9M8VJZd4zxa

//delete user
// router.delete("/delete-account/:uuid", async (req, res) => {
//   try {
//     const user = await userSchema.findOne({ uuid: req.params.uuid });
//     try {
//       await PostSchema.deleteMany({ UserName: user.UserName });
//       await userSchema.findOneAndDelete({ uuid: req.params.uuid });
//       res.status(200).json({
//         status: "success",
//         message: "your account has been deleted",
//       });
//     } catch (error) {
//       res.status(500).json(err);
//     }
//   } catch (error) {
//     res.status(500).json("User not found");
//   }
// });

// get user
// router.get("/getuser/:uuid", async (req, res) => {
//   try {
//     const user = await userSchema.findOne({ uuid: req.params.uuid });
//     const { password, ...others } = user._doc;
//     return res
//       .status(200)
//       .json({ status: "success", message: "fetched user", result: others });
//   } catch (error) {
//     res.status(500).json(error.message);
//   }
// });

// social signin
// router.post("/social-signup", async (req, res) => {
//   try {
//     let userdetail = new userSchema(req.body);
//     let password = req.body.password;
//     console.log("before hashing:" + password);
//     let salt = await bcrypt.genSalt(10);
//     userdetail.password = bcrypt.hashSync(password, salt);
//     let result = await userdetail.save();
//     console.log("after hashing:" + userdetail.password);
//     return res.status(200).json({
//       status: "success",
//       message: "user details are added successfully",
//       result: result,
//     });
//   } catch (error) {
//     console.log(error.message);
//     return res.status(500).json({ message: "failure", error: error.message });
//   }
// });

//get all user
// router.get("/all-user", async (req, res) => {
//   try {
//     const users = await userSchema.find();
//     return res
//       .status(200)
//       .json({ status: "success", message: "user fetched", result: users });
//   } catch (error) {
//     return res.status(500).json(error.message);
//   }
// });

// router.post("/sms/:", async (req, res) => {
//   try {
//     twillo.messages
//       .create({
//         from: "+16012025001",
//         to: "+917339080287",
//         body: "your reset password otp :",
//       })
//       .then((mms) => {
//         console.log("sms sended");
//       })
//       .catch((err) => {
//         console.log("err", err.message);
//       });
//   } catch (err) {
//     console.log(err.message);
//   }
// });

// contact us
// router.post("/contact", async (req, res) => {
//   try {
//     console.log(req.body);
//     const subject = "User query";
//     let email = await sendEmail(req.body.to, subject, req.body.text);
//     return res.send({
//       status: "success",
//       message: "query sent to admin",
//       // data: email,
//     });
//   } catch (error) {
//     console.log(error.message);
//     return res.send(error.message);
//   }
// });

module.exports = { register, login };
