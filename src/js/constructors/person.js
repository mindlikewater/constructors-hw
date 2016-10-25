function Person (options) {
  let opts = options || {};

  if (opts.cool === undefined) {
    this.cool = false;
  }
  else {
    this.cool = opts.cool;
  }
};

Person.prototype.pet = function (dog) {
  return dog.status = "happy";
};

Person.prototype.feed = function (dog) {
  return dog.hungry = false;
};

export { Person };
