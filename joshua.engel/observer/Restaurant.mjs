/* Restaurant.mjs
 *
 * Start the environment
 */
import Guest from "./actors/Guest.mjs";
import Waiter from "./actors/Waiter.mjs";

console.log("Hey there! Welcome to the Restaurant!");

let guestGareth = new Guest({ name: "Gareth" });
let waiterWanda = new Waiter("Wanda");

let diningTable = {
  id: 1,
  guest: null,
  hasWater: false,
}

guestGareth.sitDown({ table: diningTable })
waiterWanda.addTable({ table: diningTable });
waiterWanda.observeSubject({ subject: guestGareth })
guestGareth.isWaiting({ seconds: 1 });
