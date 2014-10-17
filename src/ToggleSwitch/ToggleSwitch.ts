import BaseView = require('../onejs/BaseView');
import ToggleSwitchModel = require('./ToggleSwitchModel');
//import WinJS = require('WinJS');
/// <reference path="winjs.d.ts" />

class ToggleSwitch extends BaseView {

	viewName = 'ToggleSwitch';
	viewModelType = ToggleSwitchModel;
	winControl;

	onRender() {
		this.winControl = new WinJS.UI.ToggleSwitch(null, this.viewModel);
		this.winControl.onchange = this._onChange.bind(this);
		this.element = this.winControl.element;
		return this.element;
	}

	onViewModelChanged(args) {
		if(this.winControl) {
            var vm = this.viewModel;
			this.winControl.checked = vm.checked;
			this.winControl.disabled = vm.disabled;
			this.winControl.labelOn = vm.labelOn;
			this.winControl.labelOff = vm.labelOff;
			this.winControl.title = vm.title;
		}
	}

	onDispose() {
		if(this.winControl) {
			this.winControl.dispose();
			this.winControl = null;
		}

	}

	_onChange() {
		if(this.winControl) {
			this.viewModel.setData({
				checked: this.winControl.checked
			});
		}
	}
}

export = ToggleSwitch;