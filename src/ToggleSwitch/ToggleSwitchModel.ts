import ViewModel = require('../onejs/ViewModel');

class ToggleSwitchModel extends ViewModel {
    checked = false;
    disabled = false;
    labelOn = "On";
    labelOff = "Off";
    title = "";
}

export = ToggleSwitchModel;