function Person (options) {
  let opts = options || {};

  this.cool = opts.cool !== undefined ? opts.cool : false;
/*
  if (opts.cool === undefined) {
    this.cool = false;
  }
  else {
    this.cool = opts.cool;
  }*/

};

Person.prototype.pet = function (dog) {
  dog.status = "happy";
};

Person.prototype.feed = function (dog) {
  dog.hungry = false;
};

export { Person };
