export interface IStringsLogger {
    
    startBlock(beginBySeparator?: boolean): IStringsLogger;
    endBlock(endBySeparator?: boolean): IStringsLogger;
    setIndentStep(indentStep: number): IStringsLogger;
    setIndentChar(indentChar: string): IStringsLogger;
    
    writeToLog(text: string): IStringsLogger;
    writeSeparator(): IStringsLogger;    
    getLogAsString(): string;
    clearLog(): void;

}
