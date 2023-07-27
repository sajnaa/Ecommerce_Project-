import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Categories from "./pages/Categories";
import HomePage from "./pages/HomePage";
import AuthenticationPage from "./pages/AuthenticationPage";
import Footer from "./components/Home/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { ProtectRoute } from "./protectedRoute/ProtectedRoute";
import Cart from "./components/Cart/Cart";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          {/* exact path="/about" component={Aboutpage } */}
          <Route path="/all-categories" element={<Categories />} />
          <Route path="/authentication" element={<AuthenticationPage />} />
          <Route
            path="/cart"
            element={
              <ProtectRoute>
                <Cart />
              </ProtectRoute>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
