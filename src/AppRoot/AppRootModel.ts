import ViewModel = require('../onejs/ViewModel');
import ToggleSwitchModel = require('../ToggleSwitch/ToggleSwitchModel');

class AppRootModel extends ViewModel {
    toggle = new ToggleSwitchModel({ title: "Type here" });
}

export = AppRootModel;