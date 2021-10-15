export var storage = {
  put: function (key, value) {
    storage[key] = value;
  },
  fetch: function (key) {
    if (storage[key]) {
      return storage[key];
    } else {
      return "Value not found."
    }
  }
};