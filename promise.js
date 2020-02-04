const Promise = require("./1.promise");

const promise = new Promise((resolve, reject) => {
  console.log("执行了")
  //reject("失败啦")
  setTimeout(() => {
    resolve("成功结果")
  }, 1000)
})

promise.then((data) => {
  console.log("成功", data)
}, (error) => {
  console.log("失败", error)
})