// #3
var cakes = [
    {weight: 7, value: 360},
    {weight: 4, value: 90},
    {weight: 10, value: 500},
]

capacity = 20;

function maxDuffelBagValue(object, capacity) {
    if (object.weight < capacity) {
        object.weight+=object.weight
    }
};

console.log(cakes.map(maxDuffelBagValue));


// doesnt work //