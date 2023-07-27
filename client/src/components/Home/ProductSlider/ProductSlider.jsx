import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./ProductSlider.scss";
import { Box, Button } from "@chakra-ui/react";
const ProductSlider = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    Largedesktop: {
      breakpoint: { max: 3000, min: 1220 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1220, min: 920 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 920, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const CustomDot = ({ onMove, index, onClick, active }) => {
    // onMove means if dragging or swiping in progress.
    // active is provided by this lib for checking if the item is active or not.
    return (
      <li className={active ? "active" : "inactive"} onClick={() => onClick()}>
        <button className="custom-dots-cls"></button>
      </li>
    );
  };
  return (
    <Box className="product-slider-wrap">
      <h3 className="product-slider-header">Best Sellers in Clothing</h3>
      <Carousel
        responsive={responsive}
        className="product-slider mb-2"
        showDots={true}
        // renderDotsOutside={true}
        swipeable={true}
        keyBoardControl={true}
        customDot={<CustomDot />}
      >
        <img
          className="multi-carousel-img"
          src="https://img.freepik.com/free-photo/trendy-top-design-mockup-presented-wooden-hanger_460848-14028.jpg?w=740&t=st=1686334483~exp=1686335083~hmac=fb776ac9e96c124db09bbf682f4ed7e67a551d89b3c7e730e471f2aac6629d74"
          alt="Product"
        />
        <img
          src="https://img.freepik.com/free-photo/young-woman-beautiful-red-dress_1303-17500.jpg?w=740&t=st=1686338068~exp=1686338668~hmac=e8f37cb729ba79d1c7ab8988211a6b4ea3bc7b07bafa743b18daf4cde0aca7fe"
          className="multi-carousel-img"
        />
        <img
          className="multi-carousel-img"
          src="https://img.freepik.com/free-photo/trendy-top-design-mockup-presented-wooden-hanger_460848-14028.jpg?w=740&t=st=1686334483~exp=1686335083~hmac=fb776ac9e96c124db09bbf682f4ed7e67a551d89b3c7e730e471f2aac6629d74"
          alt="Product"
        />
        <img
          className="multi-carousel-img"
          src="https://img.freepik.com/free-photo/trendy-top-design-mockup-presented-wooden-hanger_460848-14028.jpg?w=740&t=st=1686334483~exp=1686335083~hmac=fb776ac9e96c124db09bbf682f4ed7e67a551d89b3c7e730e471f2aac6629d74"
          alt="Product"
        />
        <img
          src="https://img.freepik.com/free-photo/young-woman-beautiful-red-dress_1303-17500.jpg?w=740&t=st=1686338068~exp=1686338668~hmac=e8f37cb729ba79d1c7ab8988211a6b4ea3bc7b07bafa743b18daf4cde0aca7fe"
          className="multi-carousel-img"
        />
      </Carousel>
    </Box>
  );
};

export default ProductSlider;
