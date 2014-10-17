import List = require('../onejs/List');
import ViewModel = require('../onejs/ViewModel');
import ToggleSwitchModel = require('../ToggleSwitch/ToggleSwitchModel');
import RepeaterModel = require('../Repeater/RepeaterModel');
import RatingTemplate = require('../RatingTemplate/RatingTemplate');
import RatingTemplateModel = require('../RatingTemplate/RatingTemplateModel');
import RatingModel = require('../Rating/RatingModel');

// min inclusive, max exclusive
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

class AppRootModel extends ViewModel {
    toggle = new ToggleSwitchModel({ title: "Type here" });

    condition = true;

    commands = new List([1, 2, 3]);

    repeater = new RepeaterModel({
        template: function (item) {
            var view = new RatingTemplate();
            view.viewModel = new RatingTemplateModel({
                ratingModel: new RatingModel({ userRating: item })
            });
            var element = view.render();
            view.activate();
            return element;
        },
        data: new WinJS.Binding.List()
    });

    addRating() {
        this.repeater.data.push(getRandomInt(0, 6));
    }
}

export = AppRootModel;