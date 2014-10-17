import BaseView = require('../onejs/BaseView');
import RepeaterModel = require('./RepeaterModel');
//import WinJS = require('WinJS');
/// <reference path="winjs.d.ts" />

class Repeater extends BaseView {

	viewName = 'Repeater';
	viewModelType = RepeaterModel;
	winControl;

	onRender() {
		this.winControl = new WinJS.UI.Repeater(null, this.viewModel);
		this.element = this.winControl.element;
		return this.element;
	}

	onViewModelChanged(args) {
		if(this.winControl) {
            var vm = this.viewModel;
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

export = Repeater;