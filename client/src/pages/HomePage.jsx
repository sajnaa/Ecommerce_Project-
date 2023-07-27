import Carousel from "../components/Home/HomeCarousel/Carousel";
import ProductSlider from "../components/Home/ProductSlider/ProductSlider";
import CategoryCards from "../components/Home/CategorySection/CategoryCards";
import { Box } from "@chakra-ui/react";
const HomePage = () => {
  return (
    <div className="container-fluid p-0">
      <Box className="carousel-box-bg">
        <Carousel />
      </Box>
      <Box className="mx-3 mb-5 mt-5">
        <ProductSlider />
      </Box>
      <Box className="mx-3 mt-5">
        <h2 className="category-heading">Shop By Category</h2>
        <CategoryCards />
      </Box>
    </div>
  );
};

export default HomePage;
