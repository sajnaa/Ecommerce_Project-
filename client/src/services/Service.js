// Service Url

import { BASE_URL } from "./baseUrl";
import TokenService from "./TokenService/TokenService";
import axios from "axios";

// const REFRESH_TOKEN_URL = 'http://localhost:5000/api/v1/auth/refreshToken'

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    // 'Content-Type': 'multipart/form-data'
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = TokenService.getLocalAccessToken();
    // if (token) {
    //   config.headers["Authorization"] = "Bearer " + token;
    //   // config.headers["x-access-token"] = token;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// axiosInstance.interceptors.response.use(
//   (res) => {
//     return res;
//   },
//   async (err) => {
//     const originalConfig = err.config;

//     if (originalConfig.url !== "/auth/signin" && err.response) {
//       // Access Token was expired
//       if (err.response.status === 401 && !originalConfig._retry) {
//         originalConfig._retry = true;

//         try {
//           const rs = await axiosInstance.post("/auth/refreshtoken", {
//             refreshToken: TokenService.getLocalRefreshToken(),
//           });

//           const { accessToken } = rs.data;

//           dispatch(refreshToken(accessToken));
//           TokenService.updateLocalAccessToken(accessToken);

//           return axiosInstance(originalConfig);
//         } catch (_error) {
//           return Promise.reject(_error);
//         }
//       }
//     }

//   return Promise.reject(err);
// }
// );
