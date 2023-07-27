// import { axiosInstance } from "../Service";
import { BASE_URL } from "../baseUrl";
import axios from "axios";
class UserService {
  // User Register Api
  UserRegister = (name, mobilenumber, email, password) => {
    return axios.post(`${BASE_URL}/v1/user/`, {
      name,
      mobilenumber,
      email,
      password,
    });
  };

  // User Login Api
  UserLogin = (data) => {
    return axios.post(`${BASE_URL}/v1/user/login`, { data });
  };
}

export default new UserService();
