const name = {
    firstName: "ahmed",
    lastName: "mahmoud"
  }
  
  const printInfo = function (homeTown, country) {
    console.log(this.firstName + " " + this.lastName + " from " + homeTown + "," + country)
  }
  
  Function.prototype.mybind = function (...args) {
    let obj = this;
    params = args.slice(1)
    return function (...args2) {
      obj.call(args[0], ...params, ...args2)
    }
  }
  
  let printInfo2 = printInfo.mybind(name, "cairo")
  printInfo2("egypt");