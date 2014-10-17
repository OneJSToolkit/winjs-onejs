import BaseView = require('../onejs/BaseView');
import RatingModel = require('./RatingModel');
//import WinJS = require('WinJS');
/// <reference path="winjs.d.ts" />

class ToggleSwitch extends BaseView {

	viewName = 'Repeater';
	viewModelType = RatingModel;
	winControl;

	onRender() {
		this.winControl = new WinJS.UI.Rating(null, this.viewModel);
		this.winControl.onchange = this._onChange.bind(this);
		this.element = this.winControl.element;
		return this.element;
	}

	onViewModelChanged(args) {
		if(this.winControl) {
            var vm = this.viewModel;
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
			this.viewModel.setData({
				userRating: this.winControl.userRating
			});
		}
	}
}

export = ToggleSwitch;