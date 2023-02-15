// import { Axios } from "axios";

import axios, { AxiosRequestConfig } from "axios";

export default class Axios {
  private instance;

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);
    this.interceptors();
  }

  public async request<T, D = ResponseResult<T>>(config: AxiosRequestConfig) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.instance.request<D>(config);
        resolve(response.data);
      } catch (error) {
        reject(error);
      }
    }) as Promise<D>;
  }

  private interceptors() {
    this.interceptorsRequest();
    this.interceptorsResponse();
    // throw new Error("Method not implemented.");
  }

  private interceptorsRequest() {
    // 添加请求拦截器
    this.instance.interceptors.request.use(
      function (config) {
        // 在发送请求之前做些什么
        return config;
      },
      function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
      }
    );
  }

  private interceptorsResponse() {
    // 添加响应拦截器
    this.instance.interceptors.response.use(
      function (response) {
        // 2xx 范围内的状态码都会触发该函数。
        // 对响应数据做点什么
        return response;
      },
      function (error) {
        // 超出 2xx 范围的状态码都会触发该函数。
        // 对响应错误做点什么
        return Promise.reject(error);
      }
    );
  }
  //
}
