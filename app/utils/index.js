export const timestampToTime = (timestamp) => {
  console.log(timestamp)
  const dayDiff = Math.floor(timestamp / (24 * 3600 * 1000));//计算出相差天数
  const leave1 = timestamp % (24 * 3600 * 1000)    //计算天数后剩余的毫秒数
  const hours = Math.floor(leave1 / (3600 * 1000))//计算出小时数
  //计算相差分钟数
  const leave2 = leave1 % (3600 * 1000)    //计算小时数后剩余的毫秒数
  const minutes = Math.floor(leave2 / (60 * 1000))//计算相差分钟数
  //计算相差秒数
  const leave3 = leave2 % (60 * 1000)      //计算分钟数后剩余的毫秒数
  const seconds = Math.round(leave3 / 1000)
  return `${dayDiff}天${hours}时${minutes}分${seconds}秒`;
}

const change = (t) => {
  if (t < 10) {
    return "0" + t;
  } else {
    return t;
  }
}
