import { IToScreenLogger } from './../../interfaces';
import { AStringsLogger } from './../../abstracts';

export class ToScreenLogger extends AStringsLogger implements IToScreenLogger {

    outputToConsole(): IToScreenLogger {
        console.log(`${this.getLogAsString()}`);
        return(this);
    }

    outputToPopup(): IToScreenLogger {
        window.alert(`${this.getLogAsString()}`);
        return(this);
    }    
        
}