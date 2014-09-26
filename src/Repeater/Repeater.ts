import View = require('../onejs/View');
import RepeaterModel = require('./RepeaterModel');
//import WinJS = require('WinJS');
/// <reference path="winjs.d.ts" />

class ToggleSwitch extends View {

	viewName = 'Repeater';
	viewModelType = RepeaterModel;
	winControl;

	onRender() {
		this.winControl = new WinJS.UI.Repeater(this.getViewModel());
		this.element = this.winControl.element;
		return this.element;
	}

	onViewModelChanged(args) {
		if(this.winControl) {
			var vm = this.getViewModel();
			//TODO
		}
	}

	onDispose() {
		if(this.winControl) {
			this.winControl.dispose();
			this.winControl = null;
		}
	}


}

export = ToggleSwitch;