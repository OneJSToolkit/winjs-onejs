import View = require('../onejs/View');
import RatingModel = require('./RatingModel');
//import WinJS = require('WinJS');
/// <reference path="winjs.d.ts" />

class ToggleSwitch extends View {

	viewName = 'Repeater';
	viewModelType = RatingModel;
	winControl;

	onRender() {
		this.winControl = new WinJS.UI.Rating(null, this.getViewModel());
		this.winControl.onchange = this._onChange.bind(this);
		this.element = this.winControl.element;
		return this.element;
	}

	onViewModelChanged(args) {
		if(this.winControl) {
			var vm = this.getViewModel();
            this.winControl.userRating = vm.userRating;
            this.winControl.maxRating = vm.maxRating;
            this.winControl.averageRating = vm.averageRating;
            this.winControl.disabled = vm.disabled;
            this.winControl.enableClear = vm.enableClear;
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
			this.getViewModel().setData({
				userRating: this.winControl.userRating
			});
		}
	}
}

export = ToggleSwitch;