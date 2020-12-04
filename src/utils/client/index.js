import axios from "axios";
import config from "./config";
import { Toast } from "vant";

const instance = axios.create({
  baseURL: `${config.baseUrl}/api`,
  timeout: 2000,
  headers: config.headers
});

// http request 拦截器
instance.interceptors.request.use(
  config => {
    console.log(config);
    // if set header
    // config.headers["Content-Type"] = "multipart/form-data";
    return config;
  },
  error => {
    // TODO 此处需要对错误返回统一处理
    return Promise.reject(error);
  }
);

// http response 拦截器
instance.interceptors.response.use(
  res => {
    // 状态码验证
    // eslint-disable-next-line no-prototype-builtins
    // if (res.data && res.data.hasOwnProperty('code')) {
    //   if (res.data.code === '401') {
    //     // 登录异常状态处理
    //     // Toast.fail('登录状态失效，请重新登录！')
    //     const cacheURI = Cookies.get(CURRENT_URI)
    //     const url = cacheURI || '/'
    //     isLogin(url)
    //     return false
    //   } else {
    //     Toast.fail(res.data.message)
    //     return Promise.reject(res)
    //   }
    // }

    // 更新TOKEN
    // if (res.headers && res.headers[SXH_TOKEN_NAME]) {
    //   Cookies.set(SXH_TOKEN, res.headers[SXH_TOKEN_NAME])
    // }
    // console.log(res)
    // const { statusCode } = res
    // if (statusCode === 200) {
    //   return Promise.resolve(res)
    // }
    // 返回数据
    return Promise.resolve(res);
  },
  error => {
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          // error.message = '请求错误'
          error.message = error.response.data.message || "请求错误";
          break;
        case 401:
          error.message = "未授权，请登录";
          // Toast.fail(error.message);
          // return isLogin(url, true);
          break;
        case 403:
          error.message = "拒绝访问";
          break;
        case 404:
          error.message = `请求地址出错: ${error.response.config.url}`;
          // location.href = '/#/404'
          break;
        case 405:
          error.message = "请求方法不被允许";
          break;
        case 408:
          error.message = "请求超时";
          break;
        case 409:
          error.message = error.response.data.message;
          break;
        case 500:
          error.message = "服务器内部错误";
          // location.href = '/#/500'
          break;
        case 501:
          error.message = "服务未实现";
          break;
        case 502:
          error.message = "网关错误";
          break;
        case 503:
          error.message = "服务不可用";
          break;
        case 504:
          error.message = "网关超时";
          break;
        case 505:
          error.message = "HTTP版本不受支持";
          break;
        default:
      }
    } else {
      error.message =
        error.message === "Network Error" ? "网络错误" : error.message;
    }
    // TODO 统一处理其他错误
    Toast.fail(error.message);
    return Promise.reject(error);
  }
);

/**
 * @description 网络请求
 */
export function request(params = {}, options = {}) {
  options = Object.assign({}, params, options);
  return new Promise((resolve, reject) => {
    instance(options)
      .then(res => {
        resolve(res.data);
      })
      .catch(error => {
        reject(error);
      });
  });
}

/**
 * 上传文件
 * @param params 参考ajax方法入参
 * @param options
 * @returns {Promise<any>}
 */
export function upload(params = {}, options = {}) {
  options = Object.assign({}, params, options);
  options.headers["Content-Type"] = "multipart/form-data";
  return new Promise((resolve, reject) => {
    instance(options)
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        console.warn(error);
        reject(error);
      });
  });
}
