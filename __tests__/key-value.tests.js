import * as kv from "../key-value.js";

describe('Initial properties of Storage', () => {

  test('Should initialize storage object with put and fetch', () => {
    expect(Object.keys(kv.storage)).toEqual(["put"]);
  });

  test('should store a key value pair', () => {
    kv.storage.put("favorite_color", "purple");
    expect(kv.storage.favorite_color).toEqual("purple");
  });

  test('should overwrite a value given a key already exists', () => {
    kv.storage.put("favorite_color", "purple");
    kv.storage.put("favorite_color", "green");
    expect(kv.storage.favorite_color).toEqual("green");
    expect(Object.keys(kv.storage)).toEqual(["put", "favorite_color"]);
  });

  test('should filter input to a string of words separated by single spaces', () => {
    let result = kv.inputFilter("    put    favorite_color      purple");
    expect(result).toEqual("put favorite_color purple");
  });

  test('should filter input to down the first 3 letters', () => {
    let filteredInput = kv.inputFilter("    put    favorite_color      purple");
    let result = kv.putFilter(filteredInput);
    expect(result).toEqual("put");
  });

  test('should filter input to down the first 5 letters', () => {
    let filteredInput = kv.inputFilter("    fetch    favorite_color      ");
    let result = kv.fetchFilter(filteredInput);
    expect(result).toEqual("fetch");
  });

  test('should filter input to down the first 4 letters', () => {
    let filteredInput = kv.inputFilter("exit     ");
    let result = kv.fetchFilter(filteredInput);
    expect(result).toEqual("exit");
  });

});