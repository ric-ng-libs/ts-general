import { IStringable, IStringablesLogger, IGenericList } from '../../interfaces';
import { GenericList } from '../../concreteClasses/GenericList';

export abstract class AStringablesLogger implements IStringablesLogger {
    private static defaultIndentStep: number = 6;
    private static defaultIndentChar: string = '.';
    private static linesSeparator: string = '\n';
    private static lineDataSeparator: string = ' '.repeat(3);

    private outputBuffer: IGenericList< Array<IStringable> >;    

    private indentStep: number;
    private indentChar: string;
    private currentIndent: number;

    constructor() {
        this.outputBuffer = new GenericList< Array<IStringable> >();
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

    addLineToLog(lineToLog: IStringable): IStringablesLogger {
        const line: Array<IStringable> = (Array.isArray(lineToLog))? [...lineToLog] :  [lineToLog];
        if (this.currentIndent > 0) {
            line.unshift(this.getIndentString());
        }
        this.addLineAsArrayToLog(line);
        return(this);
    }
    addLineSeparatorToLog(number: number = 1): IStringablesLogger {
        this.addLineAsArrayToLog([ `${AStringablesLogger.linesSeparator}`.repeat(number) ]);
        return(this);
    }
    
    getLogAsString(): string {
        let result: string;
        const lines: Array<string> = [];

        this.eachLine( (line: Array<IStringable>) => {
            const lineAsString: string = line.join(AStringablesLogger.lineDataSeparator);
            lines.push(lineAsString);
        });

        result = lines.join(AStringablesLogger.linesSeparator);
        return(result);
    }

    protected eachLine(functionForEachLine: (line: Array<IStringable>) => void): void {
        this.outputBuffer.each( (line: Array<IStringable>) => {
            functionForEachLine(line);
        }); 
        
    }
    
    clearLog(): void {
        this.outputBuffer.clear();
    }

    private addLineAsArrayToLog(lineAsArray: Array<IStringable>): void {
        this.outputBuffer.addElement(lineAsArray);
    }
    
}