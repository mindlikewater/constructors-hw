function Dog (options) {
  let opts = options || {};

  this.status = "normal";
  this.color = opts.color;
}

export { Dog };
