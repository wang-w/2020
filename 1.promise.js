const PENDING = "PENDING"
const RESLOVE = "RESLOVE"
const REJECT  = "REJECT"

class Promise {
  constructor(execute) {
    this.state = PENDING;
    this.succeed = undefined;
    this.failed = undefined;
    this.onFulfilledCallbaks = [];
    this.onRejectedCallbaks = [];
    this.resolve = data => {
      console.log("resolve")
      if (this.state === PENDING) {
        this.state = RESLOVE
        this.succeed = data
        this.onFulfilledCallbaks.forEach((callback) => {
          callback(this.succeed)
        })
      }
    }

    this.reject = reason => {
      console.log("reject")
      if (this.state === PENDING) {
        this.state = REJECT
        this.failed = reason
        this.onRejectedCallbaks.forEach((callback) => {
          callback(this.failed)
        })
      }
    }
    
    try {
      execute(this.resolve, this.reject)
    } catch (error) {
      
    }
  }

  then(fulfilled, rejected) {
    if (this.state === RESLOVE) {
      fulfilled(this.succeed)
    }

    if (this.state === REJECT) {
      rejected(this.failed)
    }

    if (this.state === PENDING) {
      this.onFulfilledCallbaks.push(fulfilled)
      this.onRejectedCallbaks.push(rejected)
    }
  }
}

module.exports = Promise;