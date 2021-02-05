import { IStringablesLogger } from './IStringablesLogger';


export interface IToScreenLogger extends IStringablesLogger {
    outputToConsole(): IToScreenLogger;

    outputToPopup(): IToScreenLogger;


    outputToHTMLBody(): IToScreenLogger; 
    outputToHTMLElement(htmlElement: HTMLElement): IToScreenLogger;
}