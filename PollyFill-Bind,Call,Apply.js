const name = {
    firstName: "ahmed",
    lastName: "mahmoud"
  }
  
  const printInfo = function (homeTown, country) {
    console.log(`${this.firstName} ${this.lastName} from ${homeTown},${country}` )
  }
  
  Function.prototype.mybind = function (scope, ...args) {
    scope.BindFunction = this
    return function (...args2) {
      return scope.BindFunction(...args, ...args2)
    }
  }
  
  let printInfo2 = printInfo.mybind(name, "cairo")
  printInfo2("egypt")
  
  
  // call method 
  
  Function.prototype.myCall = function (scope, ...args) {
    scope.CallFunction = this
    return scope.CallFunction(...args)
  }
  
  let printInfo3 = printInfo.myCall(name, "cairo","egypt")
  
  
  // apply method
  
  Function.prototype.myApply = function (scope, args) {
    scope.ApplyFunction = this
    return scope.ApplyFunction(...args)
  }
  
  let printInfo4 = printInfo.myApply(name, ["cairo","egypt"])
  