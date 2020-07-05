import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
  login(person_name, password) {
    return axios
      .post(API_URL + "signin", {
        person_name,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(person_name, email, password) {
    return axios.post(API_URL + "signup", {
      person_name,
      email,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();
