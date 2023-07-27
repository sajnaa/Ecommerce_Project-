import { store, persistor } from "../../store";

// Wait for the Redux Persist rehydration process to complete

class TokenService {
  // getLocalRefreshToken() {
  //   const state = token();
  //   console.log(state);
  //   // return user?.refreshToken;
  // }

  getLocalAccessToken() {
    persistor.persist().then(() => {
      // The persisted state is now available

      return console.log(store.getState());
      // Now you can access the state properties as needed, e.g., state.someProperty
    });
  }

  updateLocalAccessToken(token) {
    let user = JSON.parse(localStorage.getItem("user"));
    user.accessToken = token;
    localStorage.setItem("user", JSON.stringify(user));
  }

  getUser() {
    return JSON.parse(localStorage.getItem("user"));
  }

  setUser(user) {
    console.log(JSON.stringify(user));
    localStorage.setItem("user", JSON.stringify(user));
  }

  removeUser() {
    localStorage.removeItem("user");
  }
}

export default new TokenService();
