import View = require('../onejs/View');
import DomUtils = require('../onejs/DomUtils');
import Block = require('../onejs/Block');
import ImageSprite = require('../Rating/Rating');

class ParentType extends View {
    viewName = 'ParentType';
    searchIcon = <any>this.addChild(new ImageSprite());

    onViewModelChanged(viewModel, args?: any) {
        super.onViewModelChanged(viewModel, args);
        this.searchIcon.setData(this.getValue('searchIcon'));
    }

    _spec = <any> {
        "type": 0,
        "tag": "div",
        "children": [
            {
                "type": 0,
                "tag": "div",
                "attr": {
                    "class": "searchBox"
                },
                "children": [
                    {
                        "type": 0,
                        "tag": "span",
                        "binding": {
                            "id": "0",
                            "text": "searchText"
                        },
                        "children": []
                    },
                    {
                        "type": 6,
                        "name": "searchIcon",
                        "children": []
                    }
                ]
            },
            {
                "type": 0,
                "tag": "div",
                "attr": {
                    "class": "scrollArea"
                },
                "children": [
                    {
                        "type": 5,
                        "source": "commands",
                        "iterator": "command",
                        "children": [
                            {
                                "type": 0,
                                "tag": "div",
                                "binding": {
                                    "id": "1",
                                    "text": "command"
                                },
                                "children": [
                                    {
                                        "type": 2,
                                        "value": "hi"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": 4,
                        "source": "hasQuota",
                        "children": [
                            {
                                "type": 0,
                                "tag": "div",
                                "attr": {
                                    "class": "c-QuotaPane"
                                },
                                "children": [
                                    {
                                        "type": 0,
                                        "tag": "div",
                                        "attr": {
                                            "class": "quota"
                                        },
                                        "children": [
                                            {
                                                "type": 2,
                                                "value": "37.4GB available"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    };
}

export = ParentType;
