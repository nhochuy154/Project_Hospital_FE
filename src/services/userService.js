import axios from "../axios";

const handleLoginApi = (userEmail, userPassword) => {
  return axios.post("/api/login", { email: userEmail, password: userPassword });
};

const getAllUsers = (inputId) => {
  return axios.get(`/api/get-all-users?id=${inputId}`);
};

const crateNewUserService = (data) => {
  console.log("check data from service: ", data);
  return axios.post("/api/create-new-user", data);
};

const deleteUserService = (userId) => {
  // return axios.delete("/api/delete-user", { id: userId });
  return axios.delete("/api/delete-user", {
    data: {
      id: userId,
    },
  });
};

const editUserService = (inputData) => {
  return axios.put("/api/edit-user", inputData);
};

const getAllCodeService = (inputTpye) => {
  return axios.get(`/api/allcode?type=${inputTpye}`);
};

const getTopDoctorHomeService = (limit) => {
  return axios.get(`/api/top-doctor-home?limit=${limit}`);
};

export {
  handleLoginApi,
  getAllUsers,
  crateNewUserService,
  deleteUserService,
  editUserService,
  getAllCodeService,
  getTopDoctorHomeService,
};
