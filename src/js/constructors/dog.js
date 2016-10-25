function Dog (options) {
  let opts = options || {};

  this.name = opts.name;
  this.status = opts.status || "normal";
  this.color = opts.color;

  if (opts.hungry !== undefined) {
    this.hungry = opts.hungry;
  }
  else {
    this.hungry = true;
  }

  if (opts.owner === "mason") {
    this.name = "sadie";
  }

};

export { Dog };
