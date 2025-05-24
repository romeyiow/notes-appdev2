# Building Event-Driven Applications with Node.js (EventEmitter)

## Objectives:

By the end of this exercise, students will be able to:

* Understand the concept of event-driven programming in Node.js using `EventEmitter`.  
* Create custom events and associate them with listeners.  
* Use `emit()` to trigger events and invoke their associated handlers.  
* Learn how to pass data to event listeners.  
* Handle asynchronous events using the `EventEmitter` class.

---

## Instructions:

1. **Create a new file named `event.js`.**  
2. **Import the `EventEmitter` module:**  
   1. At the top of the file, require the `events` module to use the `EventEmitter` class.  
3. **Define multiple event listeners:**  
   1. Use the `on()` method to register multiple event listeners for different events.  
* **Listener 1**: For the event `"start"`, log `"Application Started!"` to the console.  
* **Listener 2**: For the event `"data"`, log `"Data received: [data]"` to the console. (Where `[data]` is dynamic and passed from the `emit()` call.)  
4. **Trigger the events:**  
   1. Use `emit()` to trigger the `"start"` event once.  
   2. Trigger the `"data"` event and pass dynamic data (e.g., `{ name: "John Doe", age: 25 }`) to the listener.  
5. **Add an error handling listener:**  
   1. Use the `on()` method to create an error listener. This listener should log an error message like `"Error occurred: [error]"` when an event `"error"` is emitted.  
6. **Emit an error event:**  
   1. Emit an `"error"` event at the end of your code with some sample error message. This will trigger the error handler.  
7. **Run `fs.js`.**  
8. **Verify the operations:**  
   1. The `"start"` event is triggered, and `"Application Started!"` is printed to the console.  
   2. The `"data"` event is triggered, and the data is logged to the console.  
   3. The `"error"` event is triggered, and the error message is logged.