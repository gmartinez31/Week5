//#1 Madlib
function Madlib (name, subject) {
    var output = name + "'s favorite subject in school is " + subject;
    return output
}
console.log(Madlib('Gustavo', 'Chemistry'))
console.log(Madlib('Jimmy', 'Computer Science'))


//#2 Tip Calculator
function tipAmount (bill, service) {
    if (service == 'good') {
        service = .20
    } else if (service == 'fair') {
        service = .15
    } else {
        service = .10
    }
    tip = bill * service
    return 'Tip Amount: $' + tip
}
console.log(tipAmount(20, 'good'))
console.log(tipAmount(50, 'bad'))

function totalAmount (bill, service) {
    if (service == 'good') {
        service = .20;
    } else if (service == 'fair') {
        service = .15;
    } else {
        service = .10;
    }
    tip = bill * service;
    total = bill + tip
    return 'Total:$ ' + total
}
console.log(totalAmount(44, 'fair'))
console.log(totalAmount(51, 'good'))

//#3 Function: Print Numbers
function printNum (start, end) {
    while (start <= end) {
        start += 1;
        console.log(start-1)
    }
}
printNum(3, 9);
printNum(342, 385);

//#4 Print a square
function printSquare (number) {
    for (var counter = 1; counter <= number; counter++) {
        console.log('*'.repeat(number));
    }
}
printSquare(2);
printSquare(5);

//#5 Print a box
function printBox (width, height) {
    //top
    var row = "*".repeat(width);
    //middle
    var middlerow = "*" + " ".repeat(width - 2) + "*";
    console.log(row);
    for (var i = 0; i < height - 2; i++) {
        console.log(middlerow);
    }
    //bottom
    console.log(row);
}
printBox(40, 20);
printBox(100, 50);

//#6 Print a banner
function printBanner (text) {
    //top row
    var top = '*'.repeat(text.length + 4);
    console.log(top)
    //middle row
    var middle = '* ' + text + ' *';
    console.log(middle)
    //bottom row
    console.log(top)
}
printBanner('Welcome to DigitalCrafts');
printBanner('Gustavo Martinez');

//#7 Leetspeak
function leetspeak (string) {
    capit = string.toUpperCase();
    char = capit.split('');

    da_dictionary = {
        'A' : '4',
        'E' : '3',
        'G' : '6',
        'I' : '1',
        'O' : '0',
        'S' : '5',
        'T' : '7'
    }
    console.log(capit);
    // Below, we take the object(array) char and run a for loop with it by looping through the items and indices of char.
    // Then we declare an if statement where if the item in char is in our object(dictionary), da_dictionary, we replace that item (in char) with
    // The respective item in da_dictionary by assigning the latter to the former. Because this is a for loop, it does this for every item and only executes 
    // what it needs to if it meets the argument in the if statement. Lastly, we simply print out the new char object, which is an array, and join everything inside it.
    char.forEach(function (item, index) {
        if (item in da_dictionary) {
            // console.log('This is the index:', index);
            // console.log('This is the char item:', item);
            // console.log('Charitem: ', char[index])
            // console.log('Dict item: ', da_dictionary[item])
            // console.log('--------------')
            char[index] = da_dictionary[item];
        }
    })
    console.log(char.join(''));
}
leetspeak('powerful dogs');
leetspeak('Pretty cool, huh?');

//#8 Long Vowels
function longVowels (string) {
    var strarr = string.split('');
    console.log(strarr);

    strarr.forEach(function (item, index, array) {
        var vowels = item + item + item + item + item;
        if (strarr[index] == strarr[index + 1]) {
            strarr.splice(index, 2, vowels);
        }
    });
    console.log(strarr.join(''))
    // for (var count = 1; count <= string.length; count++) {
    //     console.log(count);
        
    // }
}
longVowels('cheese');

//#9 Just the positives
function postiveNumbers(array) {
    newarray = [];
    array.forEach (function (item, index){
        if (array[index] >= 0) {
            newarray.push(item);
        }
    }); 
    return console.log(newarray);
}
array1 = [-3, 5, 2, -1, 0, 10, -3];
array2 = [21, 2, -10, -420, 32, -13, -2, 35, 0, -13, 34]
postiveNumbers(array1)
postiveNumbers(array2)

//#10 Caesar Cipher