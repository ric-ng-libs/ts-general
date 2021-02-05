import { IHTMLTextNode } from './../../interfaces';

export abstract class AHTMLBuilder {

    getTextNodeFromRawText(rawText: string): IHTMLTextNode {
        const retour: IHTMLTextNode = window.document.createTextNode(rawText);
        return(retour);
    }

    
    
}