import RatingModel = require('../Rating/RatingModel');
import ViewModel = require('../onejs/ViewModel');

var colors = ['green', 'blue', 'red', 'yellow', 'orange', 'pink', 'purple'];
var nouns = ['foo', 'bar', 'baz', 'qux', 'xyzzy', 'lorem', 'ipsum'];

// min inclusive, max exclusive
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomName(): string {
    return colors[getRandomInt(0, colors.length)] + ' ' + nouns[getRandomInt(0, nouns.length)];
}

class RatingTemplateModel extends ViewModel {
    ratingModel: RatingModel;
    name = getRandomName();
}

export = RatingTemplateModel;