// 请求之前的预处理
const preRequest = request => {
  if (window.localStorage.token) {
    request.headers.common.Authorization = `Bearer ${window.localStorage.token}`;
  }
  return request;
};

// 请求时出错的处理
const requestError = error => Promise.reject(error);

// 请求返回之后的预处理
const postResponse = response => response;

// 请求返回时出错的处理
const responseError = error => {
  if (error.response) {
    if (error.response.status === 401) window.localStorage.token = '';
  } else {
    console.log(`Error Message: ${error.message}`);
  }
  return Promise.reject(error);
};

export { preRequest, requestError, postResponse, responseError };
