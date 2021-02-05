import { IStringable } from './../IStringable';
import { LoggerMessageType } from './../../enums';

export interface IStringablesLoggerLine {
    data: Array<IStringable>;
    messageType?: LoggerMessageType;
}