import { IStringsLogger } from './../../interfaces';

export abstract class AStringsLogger implements IStringsLogger {
    private static defaultIndentStep: number = 4;
    private static defaultIndentChar: string = '.';
    private static writesSeparator: string = '\n';

    private outputBuffer: Array<string>;    

    private indentStep: number;
    private indentChar: string;
    private currentIndent: number;

    constructor() {
        this.setIndentStep(AStringsLogger.defaultIndentStep);
        this.setIndentChar(AStringsLogger.defaultIndentChar);
        this.currentIndent = 0;
        this.clearLog();
    }

    startBlock(beginBySeparator: boolean = true): IStringsLogger {
        if (beginBySeparator) {
            this.writeSeparator();
        }
        this.currentIndent += this.indentStep;
        return(this);
    }
    endBlock(endBySeparator: boolean = false): IStringsLogger {
        this.currentIndent -= this.indentStep;
        if (endBySeparator) {
            this.writeSeparator();
        } 
        return(this);      
    }

    setIndentStep(indentStep: number): IStringsLogger {
        this.indentStep = indentStep;
        return(this);
    } 
    setIndentChar(indentChar: string): IStringsLogger {
        this.indentChar = indentChar;
        return(this);
    }
    protected getIndentString(): string {
        const result: string = this.indentChar.repeat(this.currentIndent);
        return(result);
    }

    writeToLog(text: string): IStringsLogger {
        this.addText(`${this.getIndentString()}${text}` );
        return(this);
    }
    writeSeparator(): IStringsLogger {
        this.addText(`${AStringsLogger.writesSeparator}`);
        return(this);
    }
    
    getLogAsString(): string {
        const result: string = this.outputBuffer.join(AStringsLogger.writesSeparator);
        return(result);
    }
    
    clearLog(): void {
        this.outputBuffer = [];
    }

    private addText(text: string): void {
        this.outputBuffer.push(text);
    }
    
}