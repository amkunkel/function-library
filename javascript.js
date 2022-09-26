// First JavaScript file for useful functions found during the Odin Project curriculum

// From the JavaScript Exercises:

const reverseString = function(string) {
    const stringLength = string.length;
    const stringArray = [];
    let newString = '';

    for (let i = 0; i < stringLength; i++) {
        stringArray[i] = string.substr(i, 1)
    }

    for (let i = stringLength - 1; i > -1; i--) {
        newString += stringArray[i];
    }
    return newString;
};

//  variations on the removeFromArray exercise with notes
//  uses the 'filter' and 'includes' functions, recall that ...args is an array which allows for the use
//  of 'includes', and 'filter' uses the arrow call-back function to omit the values that need to be left out
const removeFromArray = function(array, ...args) {
    array = array.filter(value => !args.includes(value));
    return array;
};
