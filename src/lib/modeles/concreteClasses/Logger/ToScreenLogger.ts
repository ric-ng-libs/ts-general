import { IToScreenLogger, IStringablesLoggerLine } from './../../interfaces';


import { AStringablesLogger } from './../../abstracts';
import { LoggerMessageType } from './../../enums/LoggerMessageType';



export class ToScreenLogger extends AStringablesLogger implements IToScreenLogger {

    outputToConsole(): IToScreenLogger {
        this.eachLine( (stringablesLoggerLine: IStringablesLoggerLine) => {
            this.outputLineToConsole(stringablesLoggerLine);

        });        

        return(this);
    }

    private outputLineToConsole(stringablesLoggerLine: IStringablesLoggerLine): void {

        switch(stringablesLoggerLine.messageType) {
            
            case (LoggerMessageType.error):
                console.error(...stringablesLoggerLine.data);
                break;                    

            case (LoggerMessageType.warning):
                console.warn(...stringablesLoggerLine.data);
                break;  
            
            case (LoggerMessageType.normal):
            default:
                console.log(...stringablesLoggerLine.data);
                break;
        }

    }

    outputToPopup(): IToScreenLogger {
        window.alert(`${this.getLogAsString()}`);
        return(this);
    }

    outputToHTMLBody(): IToScreenLogger {
        this.outputToHTMLElement( window.document.body );
        return(this);
    }    

    outputToHTMLElement(htmlElement: HTMLElement): IToScreenLogger {
        const rawText: string = this.getLogAsString();
        htmlElement.appendRawText(rawText);
        return(this);
    }
        
}