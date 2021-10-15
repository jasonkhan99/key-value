export var storage = {
  put: function (putInput) {
    let putInputFilter = putInput.split(" ").filter(c => c).join(" ");
    if (putInputFilter.substring(0, 3).toLowerCase() === "put") {
      storage[putInput.split(" ")[1]] = putInput.split(" ")[2];
    }
  },
  fetch: function (key) {
    if (storage[key]) {
      return storage[key];
    } else {
      return "Value not found."
    }
  }
};