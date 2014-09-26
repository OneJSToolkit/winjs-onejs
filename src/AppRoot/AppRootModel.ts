import List = require('../onejs/List');
import ViewModel = require('../onejs/ViewModel');
import ToggleSwitchModel = require('../ToggleSwitch/ToggleSwitchModel');

class AppRootModel extends ViewModel {
    toggle = new ToggleSwitchModel({ title: "Type here" });

    scores = new List([1]);

    addRating() {
        this.scores.push(5);
    }
}

export = AppRootModel;