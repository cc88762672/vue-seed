import axios from 'axios';

// 统一成功处理函数
const successHandle = response => {
  if (response.data.success) {
    return response.data;
  }
  // 返回状态码为200，但实际返回数据异常时，将异常处理统一到错误处理
  const error = { response };
  return Promise.reject(error);
};

// 统一错误处理函数
const errorHandle = error => {
  console.error(error);
  return Promise.reject(error);
};

const get = async url => {
  const result = await axios
    .get(url)
    .then(successHandle)
    .catch(errorHandle);
  return result;
};

const post = async(url, params) => {
  const result = await axios
    .post(url, params)
    .then(successHandle)
    .catch(errorHandle);
  return result;
};

export { get, post };
