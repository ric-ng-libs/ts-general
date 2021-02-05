export class HTMLFactory {

    private static getWindow(): Window {
        return(window);
    }    

    private static getDocument(): HTMLDocument {
        //return(this.getWindow().document); //<< Syntaxe posant problème !?
        return(window.document);
    }

    static getBody(): HTMLElement {
        //return(this.getDocument().body); //<< Syntaxe posant problème !?
        return(window.document.body);
    }    
    

    static createTextNode(rawText: string): Node {
        const result: Node = this.getDocument().createTextNode( rawText.toHTML() );
        return(result);
    }

    static createHTMLElement(elementTagName: string): HTMLElement {
        const result: HTMLElement =  this.getDocument().createElement(elementTagName);
        return(result);
    }    



    static createBr(): HTMLElement {
        const result: HTMLElement = this.createHTMLElement("br");
        return(result);
    }

    static createDiv(): HTMLElement {
        const result: HTMLElement = this.createHTMLElement("div");
        return(result);
    }
  
    
}