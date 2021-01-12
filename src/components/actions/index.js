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

export function getArticleList(login_id, page_size, page_number) {
  const request = axios.get(
    `${ROOT_URL}/article/list?user_login_id=${login_id}&page_size=${page_size}&page_number=${page_number}`
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

export function putArticleEdit(id, payload) {
  const request = axios.put(`${ROOT_URL}/article/set/${id}`, payload);
  request.catch((error) => {
    return error.response;
  });
  return {
    type: "PUT_ARTICLE_EDIT",
    payload: request,
  };
}

export function getArticleDetails(id) {
  const request = axios.get(`${ROOT_URL}/article/get?article_id=${id}`);
  request.catch((error) => {
    return error.response;
  });
  return {
    type: "GET_ARTICLE_DETAILS",
    payload: request,
  };
}

export function getArticleSearchList(userLoginId, searchWord) {
  const request = axios.get(
    `${ROOT_URL}/article/search/?user_login_id=${userLoginId}&search_word=${searchWord}`
  );
  request.catch((error) => {
    return error;
  });
  return {
    type: "GET_ARTICLE_SEARCH_LIST",
    payload: request,
  };
}

export function putArticleDelete(artricleId) {
  const request = axios.put(`${ROOT_URL}/article/delete/${artricleId}`);
  request.catch((error) => {
    return error;
  });
  return {
    type: "PUT_ARTICLE_DELETE",
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

export function setArticleEditId(data) {
  return {
    type: "SET_ARTICLE_EDIT_ID",
    payload: data,
  };
}

export function setArticleSearch(data) {
  return {
    type: "SET_ARTICLE_SEARCH",
    payload: data,
  };
}
export function setArticleDelete(data) {
  return {
    type: "PUT_ARTICLE_DELETE",
    payload: data,
  };
}
