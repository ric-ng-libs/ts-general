import { StringOrStringsArray } from '../../types';
import { IStringable } from '../IStringable';
import { LoggerMessageType } from './../../enums';

export interface IStringablesLogger {
    
    startBlock(beginByLineSeparator?: boolean): IStringablesLogger;
    endBlock(endByLineSeparator?: boolean): IStringablesLogger;
    setIndentStep(indentStep: number): IStringablesLogger;
    setIndentChar(indentChar: string): IStringablesLogger;
    
    addLineToLog(lineToLog: IStringable, messageType?: LoggerMessageType, autoIndent?: boolean): IStringablesLogger;
    addLineSeparatorToLog(number?: number): IStringablesLogger;  
    getLogAsString(): string;
    clearLog(): void;

}
