import ViewModel = require('../onejs/ViewModel');

class ToggleSwitchModel extends ViewModel {
    checked = this.checked === undefined ? false : this.checked;
    disabled = this.disabled === undefined ? false : this.disabled;
    labelOn = this.labelOn || "On";
    labelOff = this.labelOff || "Off";
    title = this.title || "";
}

export = ToggleSwitchModel;