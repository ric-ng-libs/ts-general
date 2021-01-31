import { IStringsLogger } from './IStringsLogger';

export interface IToScreenLogger extends IStringsLogger {
    outputToConsole(): IToScreenLogger;

    outputToPopup(): IToScreenLogger;
}