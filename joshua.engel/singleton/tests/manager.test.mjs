import "../manager.mjs";
import { HELPERS } from "./test_helpers.mjs";
import { MANAGER as mgr } from "../manager.mjs";

const assert = HELPERS.require('assert').strict;

describe("Manager Singleton", () => {
  it("is frozen and cannot have properties added to it", () => {
    let firstInstance = mgr.new();

    assert.throws(() => { firstInstance.name = "first"}, TypeError, "Class is frozen in constructor.")
  })
});

describe("Manager#constructor", () => {
  it("returns a new instance of the class if none existed", () => {
    let instance = mgr.new();
    assert.strictEqual(instance.get(), mgr.new())
  })
})
