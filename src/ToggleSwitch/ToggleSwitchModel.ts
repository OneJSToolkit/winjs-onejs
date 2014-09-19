import ViewModel = require('ViewModel');
import List = require('List');

class ToggleSwitchModel extends ViewModel {
    checked = false;
    disabled = false;
    labelOn = "On";
    labelOff = "Off";
    title = "";
    //onchange
}

export = ToggleSwitchModel;