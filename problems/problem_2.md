
## Write a snippet of code violating the Don't Repeat Yourself (DRY) principle. Then, explain why it is a bad design, and fix it.
```
const add = () => {
    var sum = 0;
    for (var i=0; i < arguments.length; i++) {
        sum += arguments[i];
    };
    return sum;
};

const avg = () => {
	var sum = 0;
    for (var i=0; i < arguments.length; i++) {
        sum += arguments[i];
    };
    var average = sum / arguments.length;
    return average;
};

```
 - Function add takes in any number of parameters and returns the sum of them.
 - Function avg takes in any number of parameters and returns the average of them.
 - This code violates the DRY principle as clearly the add function is repeated.
 - This may not seem like a big deal for a small code such as above, but while working on a big application, such repetition makes the codebase heavy and might affect performance.
 - A better way to write the above code would be as below:
```
const add = () => {
    var sum = 0;
    for (var i=0; i < arguments.length; i++) {
        sum += arguments[i];
    };
    return sum;
};

const avg = () => {
	var sum = sum(...arguments);
    return average= sum / arguments.length;;
};

```
