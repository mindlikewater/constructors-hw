function Dog (options) {
  let opts = options || {};

  this.status = "normal";
  this.color = opts.color;
  this.hungry = opts.hungry;

  if (this.hungry !== false) {
    this.hungry = true;
  }


}

export { Dog };
