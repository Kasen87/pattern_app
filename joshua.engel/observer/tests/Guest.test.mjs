import { HELPERS } from './test_helpers.mjs'
import { Guest } from '../actors/Guest.mjs';

let assert = HELPERS.require('assert');

describe('Guest', () => {
  describe('#yourName()', () => {
    it('returns Kevin if no value is provided on creation', () => {
      let noNameGuest = new Guest();
      assert.equal(noNameGuest.yourName(), 'Kevin');
    })
  });
});
