/**
 * 表单验证类
 */
/* eslint-disable no-unused-vars */
const isEmpty = str => {
  if (!str) {
    return false;
  }
  return true;
};

const isPhone = num => {
  if (!/1\d{10}/.test(num)) {
    return false;
  }
  return true;
};

/**
 *
 * @param {*} str
 * @description 过滤特殊字符串
 */
const filterSpec = str => {
  // eslint-disable-next-line no-invalid-regexp
  const reg = new RegExp(
    "[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥&*（）&；-|{}【】;？，]"
  );
  let ret = "";
  for (let i = 0; i < str.length; i++) {
    ret = ret + str.substr(i, 1).replace(reg, "");
  }
  return ret;
};

export { filterSpec };
