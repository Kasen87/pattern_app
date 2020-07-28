/* Restaurant.mjs
 *
 * Start the environment
 */
import {Guest} from './actors/Guest.mjs';
import {Waiter} from './actors/Waiter.mjs';
import {Bartender} from './actors/Bartender.mjs';

console.log(`Hey there! Welcome to the Restaurant!`);

let guestGareth = new Guest('Gareth');
guestGareth.sitsDown();

let waiterWanda = new Waiter('Wanda');

waiterWanda.introduceSelf(guestGareth);

let bartenderBernard = new Bartender('Bernard');

bartenderBernard.introduceSelf(guestGareth);

/* Gareth waits for 5 ticks
 *
 *
 * Gareth gets thirsty.
 *
 *
 * Gareth lets them know of his thirst.
 */

guestGareth.isWaiting(5);
