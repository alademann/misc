JS Interview Questions
===

##Why does the code below log `undefined` when I declared the jack variable to be 'Jack'?

```js
(function() {
    var jack = 'Jack';
})();
console.log(typeof jack);
```

  + Because variables in javascript have function scope.

---

##Why would this code not work as expected? Is anything missing?

function User(name) {
    this.name = name;
};

var j = User('Jack');
console.log(j.name);

  + `this` has function scope, and is not returned via the `User` function.


---

##Why isn't `parsed` equal to 8 in older browsers?

```js
var number = '08',
    parsed = parseInt(number);
```

  + Because the default value of the radix parameter of `parseInt(str, [radix])` in older browsers is 8 - which means that strings starting with `0` will be interpreted as octal.

> __Bonus points__ for telling me what parsed is equal to in older browsers. (answer is `0`);


---

##In JavaScript, what is the difference between `var x = 1` and `x = 1`?

###Answer in as much or as little detail as you feel comfortable.

  + __Novice__ JS programmers might have a basic answer about locals vs globals.
  + __Intermediate__ JS guys should definitely have that answer, and should probably mention function-level scope.
  + __Advanced__ JS programmers should be prepared to talk about locals, implied globals, the window object, function-scope, declaration hoisting, and scope chains.

---


##Write a sum() function that accepts any number of arguments, and returns their sum.


###Use that function (without modification) to sum all the values in an array. They should write a function that looks like this:

```js
function sum() {
  var i, l, result = 0;
  for (i = 0, l = arguments.length; i < l; i++) {
    result += arguments[i];
  }
  return result;
}

sum(1,2,3); // 6
```

And they should invoke it on your array like this (context for apply can be whatever, I usually use null in that case):


```js
var data = [1,2,3];
sum.apply(null, data); // 6
```

---

##Misc topics of interest

__Basic JS programmming__

  + Scope of variable
  + What is Associative Array? How do we use it?

__OOPS JS__

  + Difference between Classic Inheritance and Prototypical Inheritance
  + What is difference between private variable, public variable and static variable? How we achieve this in JS?
  + How to add/remove properties to object in run time?
  + How to achieve inheritance ?
  + How to extend built-in objects?
  + Why extending array is bad idea?

__DOM and JS__

  + Difference between browser detection and feature detection
  + DOM Event Propagation
  + Event Delegation
  + Event bubbling V/s Event Capturing

__Misc__

  + Graceful Degradation V/s Progressive Enhancement