import "../manager.mjs";
import { HELPERS } from "./test_helpers.mjs";
import { MANAGER as manager } from "../manager.mjs";

const assert = HELPERS.require('assert').strict;

describe("Manager", () => {
  it("cannot have properties added to it", () => {
    let instance = manager.new();

    assert.throws(() => { return (instance.managerName = "Test name") }, TypeError, "Object is frozen.")
  })

  it("cannot have properties removed from it", () => {
    let instance = manager.new();

    assert.throws(() => { return delete instance._data }, TypeError, "Object is frozen.")
  })

  context("#new", () => {
    it("returns the same instance of the Manager class", () => {
      let instance = manager.new();

      assert.strictEqual(instance, manager.new())
    });
  });

  context("#add", () => {
    it("can add an item to the _data array", () => {
      let instance = manager.new();
      instance.add("Hello")

      assert.strictEqual(instance._data[0], "Hello")
    });

    it("throws an exception when no value is sent as a parameter ", () => {
      let instance = manager.new();

      assert.throws(() => { return instance.add() }, TypeError, "Expected a parameter to be passed in during function call.")
    });

    it("does not throw when falsey values are sent as a parameter", () => {
      let instance = manager.new();

      assert.doesNotThrow(() => { return instance.add('') }, TypeError, "Expected a parameter to be passed in during function call.")
    });
  });

  context("#get", () => {
    it("it returns the same instance", () => {
      let instance = manager.new();

      assert.strictEqual(instance.get(), manager.new())
    });
  });
})
