function Dog (options) {
  let opts = options || {};

  this.status = opts.status || "normal";
  this.color = opts.color;

//shorter way to write the if-else statement
  this.hungry = data.hungry !== undefined ? data.hungry : true;

/*
  if (opts.hungry !== undefined) {
    this.hungry = opts.hungry;
  }
  else {
    this.hungry = true;
  }
*/

};

export { Dog };
