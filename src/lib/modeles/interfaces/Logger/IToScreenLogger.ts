import { IStringablesLogger } from './IStringablesLogger';

export interface IToScreenLogger extends IStringablesLogger {
    outputToConsole(): IToScreenLogger;

    outputToPopup(): IToScreenLogger;
}