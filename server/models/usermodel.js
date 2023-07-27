const mongoose = require("mongoose");
const crypto = require("crypto");

const userSchema = new mongoose.Schema(
  {
    uuid: { type: String, required: false },
    name: { type: String, required: true },
    email: { type: String, required: false, trim: true },
    mobilenumber: { type: String, required: false, trim: true },
    password: { type: String, required: true, trim: true },
    role: {
      type: String,
      enum: ["Admin", "user"],
      required: false,
      default: "user",
    },
    verifieduser: { type: Boolean, required: false, default: false },
    loginstatus: { type: Boolean, required: false, default: false },
    logintype: {
      type: String,
      enum: ["google", "facebook", "normal"],
      required: false,
      default: "normal",
    },
    profilepic: {
      type: String,
      default: "",
    },
    firstloginstatus: { type: Boolean, required: false, default: true },
    otp: { type: Number, required: false },
  },
  {
    timestamps: true,
  }
);
userSchema.pre("save", function (next) {
  this.uuid =
    "USER-" + crypto.pseudoRandomBytes(6).toString("hex").toUpperCase();
  console.log(this.uuid);
  next();
});

module.exports = mongoose.model("user", userSchema);
