import { StringOrStringsArray } from '../../types';
import { IStringable } from '../IStringable';

export interface IStringablesLogger {
    
    startBlock(beginByLineSeparator?: boolean): IStringablesLogger;
    endBlock(endByLineSeparator?: boolean): IStringablesLogger;
    setIndentStep(indentStep: number): IStringablesLogger;
    setIndentChar(indentChar: string): IStringablesLogger;
    
    addLineToLog(stringable: IStringable): IStringablesLogger;
    addLineSeparatorToLog(): IStringablesLogger;    
    getLogAsString(): string;
    clearLog(): void;

}
