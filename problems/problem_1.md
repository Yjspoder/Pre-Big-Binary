## Immutability is the practice of setting values once, at the moment of their creation, and never changing them. How can immutability help write safer code?

* When a value is set in a way that we do not change it after creating it once. We know what value to expect everytime we are using it in the code , without the fear of it being changed. In other words , codes can be written with minimum margin or error by following the practice of immutability. In turn making the code safe.

* Immutable objects can make use of structural sharing to reduce memory overhead.This means that any changes made to the objects, only, will need additional memory, while what is unchanged uses the same memory which was being used previously. The changes saved in the new memory and the data saved previously, together form a new object. This in turn woulld enhance performance at less memory usage.

* Mutation hides changes , this may create unnecessary bugs. When immutability is enforced , it becomes easier to keep the application architecture and mental model simple , which in turn makes reasoning with the application simple and predictable. In other words , immutability enhances predictability, and programmers know this, if the code is predictable, it is safe.

* Immutability allows you to optimize your application by making use of reference- and value equality. This makes it really easy to see if anything has changed. In other words debugging becomes really simple as the assignments are done once , which makes tracking of mutation much simple.

* ###  This is how immutability helps write safer code.