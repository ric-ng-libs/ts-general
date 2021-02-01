import { IToScreenLogger, IStringable } from './../../interfaces';
import { AStringablesLogger } from './../../abstracts';

export class ToScreenLogger extends AStringablesLogger implements IToScreenLogger {

    outputToConsole(): IToScreenLogger {
        this.eachLine( (line: Array<IStringable>) => {
            console.log(...line);
        });        

        return(this);
    }

    outputToPopup(): IToScreenLogger {
        window.alert(`${this.getLogAsString()}`);
        return(this);
    }    
        
}