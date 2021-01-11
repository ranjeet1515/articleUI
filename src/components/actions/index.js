import axios from "axios";

const ROOT_URL = "http://localhost:3000";

// Add a response interceptor
axios.interceptors.response.use(
  // Pass along responses
  function (response) {
    return response;
  },
  // Catch UNAUTH_USER errors, redirect to /signed-out
  function (error) {
    if (error?.response?.data === "UNAUTH_USER") {
      window.location = "/signed-out";
    }
    return Promise.reject(error);
  }
);

export function getArticleList() {
  const request = axios.get(
    `${ROOT_URL}/article/list?user_login_id=${1}&page_size=${10}&page_number=${1}`
  );
  request.catch((error) => {
    return error;
  });
  return {
    type: "GET_ARTICLE_LIST",
    payload: request,
  };
}

export function postLogin(payload) {
  const request = axios.post(`${ROOT_URL}/user/login/`, payload);
  request.catch((error) => {
    return error.response;
  });
  return {
    type: "POST_LOGIN",
    payload: request,
  };
}

export function postRegister(payload) {
  const request = axios.post(`${ROOT_URL}/user/register/`, payload);
  request.catch((error) => {
    return error.response;
  });
  return {
    type: "POST_REGISTER",
    payload: request,
  };
}

export function postArticleCreate(payload) {
  const request = axios.post(`${ROOT_URL}/article/set`, payload);
  request.catch((error) => {
    return error.response;
  });
  return {
    type: "POST_ARTICLE_CREATE",
    payload: request,
  };
}

// to store local states
export function setArticleList(data) {
  return {
    type: "SET_ARTICLE_LIST",
    payload: data,
  };
}

export function setArticleCreate(data) {
  return {
    type: "SET_ARTICLE_CREATE",
    payload: data,
  };
}

export function setArticleShow(data) {
  return {
    type: "SET_ARTICLE_SHOW",
    payload: data,
  };
}

export function setArticleEdit(data) {
  return {
    type: "SET_ARTICLE_EDIT",
    payload: data,
  };
}

export function setArticleSearch(data) {
  return {
    type: "SET_ARTICLE_SEARCH",
    payload: data,
  };
}
