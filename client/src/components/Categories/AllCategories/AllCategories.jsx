import React from "react";
import "./AllCategories.scss";
import { Box } from "@chakra-ui/react";
import { BsCart4 } from "react-icons/bs";
const image = [
  {
    img: "https://img.freepik.com/free-photo/portrait-cute-little-boy-girl-stylish-jeans-clothes-looking-camera-studio_155003-21555.jpg?w=360&t=st=1686547219~exp=1686547819~hmac=dca718829d237dbc61dae8b0748bdf1fce9f72fb3078483c15749d8aed1cddc9",
    title: "Kid's Fashion",
    desc: "Latest Trendy and Exclusive Collections",
  },
  {
    img: "https://img.freepik.com/free-photo/man-posing-wearing-urban-fashion_329181-3674.jpg?w=360&t=st=1686556491~exp=1686557091~hmac=22c044cbb5510cd230c16dc5734f581819e0ab38fe3ec781c9c006bb899b101c",
    title: "Men's Fashion",
    desc: "Latest Trendy and Exclusive Collections",
  },
  {
    img: "https://img.freepik.com/free-photo/outdoor-hight-fashion-portrait-stylish-casual-woman-black-hat-pink-suit-white-blouse-posing-old-street_273443-1186.jpg?w=740&t=st=1686563621~exp=1686564221~hmac=950716400ad465ec7a702b49c67b5dea308ad841f05d13f402218237eab89388",
    title: "Women's Fashion",
    desc: "Latest Trendy and Exclusive Collections",
  },
  {
    img: "https://img.freepik.com/free-photo/portrait-cute-little-boy-girl-stylish-jeans-clothes-looking-camera-studio_155003-21555.jpg?w=360&t=st=1686547219~exp=1686547819~hmac=dca718829d237dbc61dae8b0748bdf1fce9f72fb3078483c15749d8aed1cddc9",
    title: "Kid's Fashion",
    desc: "Latest Trendy and Exclusive Collections",
  },
  {
    img: "https://img.freepik.com/free-photo/portrait-cute-little-boy-girl-stylish-jeans-clothes-looking-camera-studio_155003-21555.jpg?w=360&t=st=1686547219~exp=1686547819~hmac=dca718829d237dbc61dae8b0748bdf1fce9f72fb3078483c15749d8aed1cddc9",
    title: "Kid's Fashion",
    desc: "Latest Trendy and Exclusive Collections",
  },
  {
    img: "https://img.freepik.com/free-photo/portrait-cute-little-boy-girl-stylish-jeans-clothes-looking-camera-studio_155003-21555.jpg?w=360&t=st=1686547219~exp=1686547819~hmac=dca718829d237dbc61dae8b0748bdf1fce9f72fb3078483c15749d8aed1cddc9",
    title: "Kid's Fashion",
    desc: "Latest Trendy and Exclusive Collections",
  },
];
const AllCategories = () => {
  return (
    <Box>
      <p className="text-center category-page-heading">Shop By Category</p>
      <Box className="row category-product-box flex-wrap mx-auto justify-content-center ">
        {image.map((data, i) => (
          <Box className="category-product-card col-sm-6 col-xs-12 col-md-3 col-lg-2">
            <img src={data.img} className="category-product-img" />
            <Box className="category-product-caption text-center">
              <div class="icon">
                <span>
                  <BsCart4 className="product-card-icon" />
                </span>
              </div>
              <h2>{data.title}</h2>
              <div class="caption">
                <p>View collections</p>
              </div>
              <a href="#"></a>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default AllCategories;
