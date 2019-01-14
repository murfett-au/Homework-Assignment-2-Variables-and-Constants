/*
Different Methods Available For Variable Declaration
----------------------------------------------------

1) var

var declares a variable as a globally scoped variable.

eg:
var balance = 5;

var has been available in JavaScript for a long time, but it has some behaviours that are not consistent with commonly accepted programming langauge behaviour. In particular, if you declare a variable using var inside a function of a bloock, one would expect it to NOT be decalred outside of that function of block. With var, this is not the case - the varibale is available in all places after the declaration.

2) let

let decalared a variable with block scope.

This is more consistent with modern programming practice, and is recommended for "normal", dynamic primative data types, eg:

let balance = 5;

3) const

const declares a block scope constant (though not immutable) variable.

eg

function openBankAccount() {
	let balance = 0;
	const currency = "AUD";
}

This is not a real example as we would want the balance and currency available outside the "open" function, but the point here is that I can change the balance of the bank account, but it will always be Australian dollars.

One case to bear in mind is const arrays and objects. These define a pointer to the data structure, so you can still add properties to objects (add a new key with a value) and still array.push(5) to an existing const array.

Hoisting
--------

Hoisting is a pcurularity in JavaScript when a function or variable is declared,the function or variable is defined in code BEFORE that declaration line.

eg
myFunc();
function myFunc() {
	console.log('hoist');
}


Note this does NOT apply to variable initialisation - just to declarations:
eg if you write
console.log(a);
var a="Hello World";
You will get 'undefined' 

Question
--------

Question for the pirple assesor: I would have expected the javascript engine to allocate a number of bytes in memory to store objects or arrays when it comes across statements like this:

const firstObj = {
	fiveBytesForBasicCharacterSetNullTerminated: "abcd",
	oneByteForBooleanAsOneBitNotPracticle: false,	
};
const secondArray = ['abc','xyz'];

So the memory would look like this (assuming null terminated ascii encoded strings):
abcd00abc0xyz0

When I add a key to my object:
firstobj.moreData="HelloWorld";
if the pointer was in the same spot, why does the memory become
abcd00abc0HelloWorld0

overwriting the constant pointer to the start of the secondArray data structure?

