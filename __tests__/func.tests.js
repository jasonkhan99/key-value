import * as func from "../func.js";

describe('Initial properties of Storage', () => {

  test('Should initialize storage object with put and fetch', () => {
    expect(Object.keys(func.storage)).toEqual(["put", "fetch"]);
  });

  test('should store a key value pair if input is put', () => {
    func.storage.put("favorite_color purple");
    expect(func.storage.favorite_color).toEqual(undefined);
    func.storage.put("put favorite_color purple");
    expect(func.storage.favorite_color).toEqual("purple");
  });

  test('should overwrite a value given a key already exists', () => {
    func.storage.put("put favorite_color purple");
    func.storage.put("put favorite_color green");
    expect(func.storage.favorite_color).toEqual("green");
    expect(Object.keys(func.storage)).toEqual(["put", "fetch", "favorite_color"]);
  });

  test('should fetch a value for the given key', () => {
    func.storage.put("put favorite_color purple");
    expect(func.storage.fetch("favorite_color")).toEqual("purple");
  });

  test('should display message if key not found', () => {
    func.storage.put("favorite_color", "purple");
    expect(func.storage.fetch("second_favorite_color")).toEqual("Value not found.");
  });

});