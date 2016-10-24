function Person () {
};

Person.prototype.pet = function (dog) {
  return dog.status = "happy";
};


export { Person };
