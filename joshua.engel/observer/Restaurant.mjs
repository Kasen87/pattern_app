/* Restaurant.mjs
 *
 * Start the environment
 */
import Guest from "./actors/Guest.mjs";
import Waiter from "./actors/Waiter.mjs";
import Bartender from "./actors/Bartender.mjs";

console.log("Hey there! Welcome to the Restaurant!");

let guestGareth = new Guest({ name: "Gareth" });
let waiterWanda = new Waiter({ name: "Wanda" });
let bartenderBenny = new Bartender({ name: "Benny" });

let diningTable = {
  id: 1,
  guest: null,
  hasWater: false,
}

guestGareth.sitDown({ table: diningTable })
waiterWanda.addTable({ table: diningTable });
waiterWanda.observeSubject({ subject: guestGareth })
bartenderBenny.observeSubject({ subject: guestGareth })

console.log(`Is water on the table? \n\t A: ${diningTable.hasWater}`)

guestGareth.isWaiting({ seconds: 1 });

setTimeout(() => {
  console.log(`After 1.5 seconds, is water on the table now? \n\t A: ${diningTable.hasWater}`)

  bartenderBenny.ignoreSubject({ subject: guestGareth })

  console.log("Thanks for visiting! Please come back with money and without COVID-19! 👋")
}, 1500);
