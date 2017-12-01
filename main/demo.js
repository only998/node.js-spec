'use strict';

function demo(collection) {
    var result = [];

    for (var i = 0; i < collection.length; i++) {
        if (collection[i] % 2 !== 0) {
            result.push(collection[i]);
        }
    }

/*    for (var j = 0; j < collection.length; j++) {
        if (collection[j] % 2 === 0) {
            result.push(collection[j]);
        }
    }*/

    return result;
}

module.exports = demo;
