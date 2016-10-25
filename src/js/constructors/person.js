function Person () {
};

Person.prototype.pet = function (dog) {
  return dog.status = "happy";
};

Person.prototype.feed = function (dog) {
  return dog.hungry = false;
}

export { Person };
