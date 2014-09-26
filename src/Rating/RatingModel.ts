import ViewModel = require('../onejs/ViewModel');

class RatingModel extends ViewModel {
    averageRating: number;
    maxRating = 5;
    enableClear = true;
    userRating: number;
    tooltipStrings: string[];
    disabled = false;
}

export = RatingModel;