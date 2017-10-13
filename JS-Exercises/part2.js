/////////////////////////////// Exercise 1  ///////////////////////////////
var phonebookDict = {
    Alice: '703-493-1834',
    Bob: '857-384-1234',
    Elizabeth: '484-584-2923'
}
//1 Elizabeth's #
console.log(phonebookDict.Elizabeth)
console.log('----------------------')

//2 Add a entry to the dictionary: Kareem's number is 938-489-1234.
phonebookDict.Kareem = '938-489-1234'
console.log(phonebookDict)
console.log('----------------------')

//3 Delete Alice's phone entry.
delete phonebookDict.Alice
console.log(phonebookDict)
console.log('----------------------')

//4 Change Bob's phone number to '968- 345 - 2345'.
phonebookDict.Bob = '968-345-2345'
console.log(phonebookDict)
console.log('----------------------')
//5 Given this code var personName = 'Elizabeth';, use the variable personName to access the dictionary entry.Use a for...in loop to print all the phone entries.
var personName = 'Elizabeth'
for (personName in phonebookDict) {
    var value = phonebookDict[personName];
    console.log(`${value}`);
}

/////////////////////////////// Letter Histogram  ///////////////////////////////
//Write a function letterHistogram which takes a string as argument. It will tally(histogram) the number of times 
//each character appears in the string, and return the tally as an object.
function Histogram (string) {
    var tally = {}
    for (let count = 0; count < string.length; count++) {
        var letter = string[count];
        if (letter in tally) {
            tally[letter] ++;
        } else {
            tally[letter] = 1;
        }
    }
    return tally;
}
console.log(Histogram('bananas'));
console.log(Histogram('This is a sentence that repeats itself over and over again and again'));

/////////////////////////////// Word Histogram  ///////////////////////////////
function wordHistogram(sentence) {
    var arr = {}
    var words = sentence.split(' ');
    for (let count = 0; count < words.length; count++) {
        var word = words[count];
        if (word in arr) {
            arr[word]++;
        } else {
            arr[word] = 1;
        }
    }
    return arr;
}
console.log(wordHistogram('to be or not to be'))
console.log(wordHistogram('this that is fit and fat while that is this and fat is fit'))