# Observer Pattern

### What's the quick description?
Observer pattern is used when there is one-to-many relationship between objects such as if one object is modified, its depenedent objects are to be notified automatically. Observer pattern falls under behavioral pattern category.

### Where did I get the information?
The TutorialPoint website [here](https://www.tutorialspoint.com/design_pattern/observer_pattern.htm).

### What does this look like to me?
It's like a fancy restaurant with a guest or two at a couple of tables along with a bartender and waiter.

### But how does it work by example in that scenario?
Think of the Waiter and Bartender as Observers. Their role is to make sure they stay aware of the guests' current state.

For example, if Guest Gareth is out of water in their water glass on the table *then* the Bartender or Waiter should know about that state in order to refill the glass with water.

That said, there's an interesting exchange of "actions" that doesn't make sense to me based on the name of the actors in this pattern. >.<

### Why do the names of the actors confuse me?
The Observers are responsible for watching the state of the Subject.

The Subject is responsible for managing its own state.

And the subject is responsible for keeping a list of the Observers that want to know about updates to its private state.

And the subject is responsible for adding observers to its list or removing observers from its list.

And the subject is responsible for letting each observer in its list know when it's state changes.

*Honestly*, that's a helluva lot of work for the Subject that's just trying to do it's own thing.

### Anyway, how does this apply to the same scenario before?
The difference now is that the Waiter and Bartender are not actively watching the Guest Gareth's state of their water glass at all.

Bartender Ben and Waiter Wilson have already told Guest Gareth that they're available if anything is needed, just *let them know* and they'll get right to it.


### In practice, using that scenario above - let's draft things!

Scenario: Thirsty Hershey
Files To Create:
- Restaurant.js (sets the environment up)

- Partaker.js (the subject class example)
- Provider.js (the observer base-class example to extend)

- Waiter.js (extension of the Provider.js)
- Bartender.js (extension of the Provider.js)
- Guest.js (extension of the Partaker.js)


### What will happen?
1. The Restaurant will open its doors
2. The Guest will enter and take a seat
3. The Bartender will let the Guest know they can ask for anything if needed
4. The Waiter will let the Guest know they can ask for anything if needed
5. The Guest will be thirsty and ask for a glass of water
6. The Bartender or Waiter will respond to the Guest's state change

### Things to be aware of?
It's possible that both the Waiter and the Bartender will try to respond to the Guest's lack of water by each bringing a glass of water.

In that situation, the Guest would receive two glasses of water when they only wanted to receive one – lame.


