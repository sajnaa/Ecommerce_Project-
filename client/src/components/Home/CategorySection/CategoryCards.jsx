import { Box } from "@chakra-ui/react";
import React from "react";
import "./CategoryCards.scss";
const CategoryCards = () => {
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
  ];
  return (
    <Box className="container-fluid">
      <Box className="row justify-content-center mx-auto">
        {image.map((n, i) => (
          <>
            <Box className="col-lg-3 col-md-3 col-sm-6 col-xs-12" key={i}>
              <Box className="category-card mb-5 justify-content-center">
                <div className="text-center">
                  <img className="category-card-img mx-auto" src={n.img} />
                </div>

                <div className="card-info">
                  <h3 className="card-info-heading">{n.title}</h3>
                  <p className="card-info-desp">{n.desc}</p>
                  <div className="d-flex">
                    <button className="see-more-btn">See More...</button>
                  </div>
                </div>
              </Box>
            </Box>
          </>
        ))}
      </Box>
    </Box>
  );
};

export default CategoryCards;
