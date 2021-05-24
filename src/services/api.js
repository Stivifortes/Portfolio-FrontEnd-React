import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080",
});

instance.interceptors.request.use((request) => {
  console.log(request);
  const token = localStorage.getItem("token");
  if (token) {
    request.headers["Authorization"] = `Bearer ${token}`;
  }
  return request;
}, null);

export default instance;
