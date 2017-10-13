/////////////////////////// Even Numbers ///////////////////////////
//Write a function which takes an array of numbers as input and returns a new array containing only the even numbers in the given array.
function evenNumbers (array) {
    return array % 2 == 0;
}
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
newarr = arr.filter(evenNumbers)
console.log(arr)
console.log(newarr)

/////////////////////////// Square the Numbers ///////////////////////////
// Write a function which takes an array of numbers as input and returns a new array containing result of squaring each of the numbers 
// in the given array by two. Example: squareTheNumbers([1, 2, 3]) should give [1, 4, 9].
function squareTheNumbers (array) {
    return array * array;
}
sqrarr = arr.map(squareTheNumbers);
console.log(sqrarr);

/////////////////////////// Cities ///////////////////////////
var cities = [
    { name: 'Los Angeles', temperature: 60.0 },
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 }
];

function City (array) {
     if (array.temperature > 70.0) {
         return 1;
     }
}
coolcities = cities.filter(City);
console.log(cities);
console.log(coolcities);

/////////////////////////// Good Job! ///////////////////////////
var people = [
    'Dom',
    'Lyn',
    'Kirk',
    'Autumn',
    'Trista',
    'Jesslyn',
    'Kevin',
    'John',
    'Eli',
    'Juan',
    'Robert',
    'Keyur',
    'Jason',
    'Che',
    'Ben'
];
  // names is a placeholder where we simply are referencing people's(array) items // 
var goodjob = people.map(function (names) {
        return `Good Job, ${names}!`;
    }
)
console.log(goodjob)

/////////////////////////// Sort an Array ///////////////////////////
console.log(people.sort())
function nameLength (a, b, c) {
    return a.length - b.length;
}
console.log(people.sort(nameLength))

/////////////////////////// 3 Times ///////////////////////////
var hi = function () {
    return 'Hello, World!';
}
function call3Times(fun) {
    fun();
    fun();
    fun();
}
console.log(call3Times(hi));

/////////////////////////// n Times ///////////////////////////
function callNTimes (n, fun) {
    for (let i = 0; i < n; i++) {
        console.log(fun());
    }
}
callNTimes(5, hi);
console.log('----')
callNTimes(20, hi);

/////////////////////////// Sum an Array ///////////////////////////
function sumArr (x, y) {
    return x + y;
}

array1 = [1,2,3]
array2 = [200,300,500]

console.log(array1.reduce(sumArr));
console.log(array2.reduce(sumArr));

/////////////////////////// Acronym ///////////////////////////
var Acronyms = function (accumulator, currentValue, currentIndex) {
    if (currentIndex == 1) {
        return accumulator[0] + currentValue[0]
    }
    return accumulator + currentValue[0]
}

var vip = ['very', 'important', 'person'];
var iifym = ['if', 'it', 'fits', 'your', 'macros'];

console.log(vip.reduce(Acronyms));
console.log(iifym.reduce(Acronyms));


/////////////////////////// Bonus ///////////////////////////
