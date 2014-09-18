import ViewModel = require('ViewModel');
import List = require('List');

class ToggleSwitchModel extends ViewModel {
    exampleMessage = "This is the exampleMessage value in ToggleSwitchModel.ts.";
    isKittenVisible = true;
    names = new List([ 'Bob', 'Sue', 'Joe', 'Jane' ]);
    amount = '0';

    amountTimesThree() {
        return String(Number(this.amount) * 3);
    }

    addMessage() {
        this.names.push(this.exampleMessage);
    }

}

export = ToggleSwitchModel;