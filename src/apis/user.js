/**
 * 用户登录相关
 */
import { request } from "@/utils/client";

export const login = data => {
  return request({
    data,
    method: "POST",
    url: "/v1/pub/login"
  });
};
