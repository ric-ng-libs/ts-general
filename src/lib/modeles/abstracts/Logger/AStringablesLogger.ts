import { IStringable, IStringablesLogger, IStringablesLoggerLine, IGenericList } from '../../interfaces';
import { GenericList } from '../../concreteClasses/GenericList';
import { LoggerMessageType } from './../../enums';


export abstract class AStringablesLogger implements IStringablesLogger {
    private static defaultIndentStep: number = 6;
    private static defaultIndentChar: string = '.';
    private static linesSeparator: string = '\n';
    private static lineDataSeparator: string = ' '.repeat(3);

    private outputBuffer: IGenericList< IStringablesLoggerLine >;    

    private indentStep: number;
    private indentChar: string;
    private currentIndent: number;

    constructor() {
        this.outputBuffer = new GenericList< IStringablesLoggerLine >();
        this.setIndentStep(AStringablesLogger.defaultIndentStep);
        this.setIndentChar(AStringablesLogger.defaultIndentChar);
        this.currentIndent = 0;
        this.clearLog();
    }

    startBlock(beginByLineSeparator: boolean = true): IStringablesLogger {
        if (beginByLineSeparator) {
            this.addLineSeparatorToLog();
        }
        this.currentIndent += this.indentStep;
        return(this);
    }
    endBlock(endByLineSeparator: boolean = false): IStringablesLogger {
        this.currentIndent -= this.indentStep;
        if (endByLineSeparator) {
            this.addLineSeparatorToLog();
        } 
        return(this);      
    }

    setIndentStep(indentStep: number): IStringablesLogger {
        this.indentStep = indentStep;
        return(this);
    } 
    setIndentChar(indentChar: string): IStringablesLogger {
        this.indentChar = indentChar;
        return(this);
    }
    protected getIndentString(): string {
        const result: string = this.indentChar.repeat(this.currentIndent);
        return(result);
    }

    addLineToLog(
        lineToLog: IStringable, 
        messageType_: LoggerMessageType = LoggerMessageType.normal, 
        autoIndent: boolean = true
    ): IStringablesLogger {
        const lineData: Array<IStringable> = (Array.isArray(lineToLog))? [...lineToLog] :  [lineToLog];

        if (autoIndent && this.currentIndent > 0) {
            lineData.unshift(this.getIndentString());
        }

        this.addLineAsArrayToLog({
            data: lineData,
            messageType: messageType_
        });
        return(this);
    }
    addLineSeparatorToLog(number: number = 1): IStringablesLogger {
        this.addLineAsArrayToLog({
            data: [ `${AStringablesLogger.linesSeparator}`.repeat(number) ]
        });
        return(this);
    }
    
    getLogAsString(): string {
        let result: string;
        const lines: Array<string> = [];

        this.eachLine( (stringablesLoggerLine: IStringablesLoggerLine) => {
            const lineAsString: string = stringablesLoggerLine.data.join(AStringablesLogger.lineDataSeparator);
            lines.push(lineAsString);
        });

        result = lines.join(AStringablesLogger.linesSeparator);
        return(result);
    }

    protected eachLine(functionForEachLine: (stringablesLoggerLine: IStringablesLoggerLine) => void): void {
        this.outputBuffer.each( (stringablesLoggerLine: IStringablesLoggerLine) => {
            functionForEachLine(stringablesLoggerLine);
        }); 
        
    }
    
    clearLog(): void {
        this.outputBuffer.clear();
    }

    private addLineAsArrayToLog(stringablesLoggerLine: IStringablesLoggerLine): void {
        this.outputBuffer.addElement(stringablesLoggerLine);
    }

   
}