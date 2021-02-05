import { HTMLFactory } from './../../HTML';


export default (() => {

    //Ajout de méthodes/membres static.
    Object.assign(HTMLElement, {

        // * Pour la classe HTMLElement, apparemment pas moyen (la compil. ne connaît pas le membre) d'avoir nos propres
        //   membres/méthodes static, il faudrait utiliser la syntaxe HTMLElement["nomMembre"]
        //   pour pouvoir les utiliser ! Bizarre, car pas le souci avec la classe String par exemple !

        // createTextNode(text: string = ""): Node {
        //     const result: Node =  HTMLFactory.createTextNode(text);
        //     return(result);
        // }


    });


    
    //Ajout de méthodes/membres  NON static.
    Object.assign(HTMLElement.prototype, {

        addHTML(html: Node): HTMLElement {
            this.innerHTML += html.textContent;
            return(this);       
        },

        appendRawText(rawText: string): HTMLElement {
            const htmlText: Node = HTMLFactory.createTextNode( rawText.toHTML() );
            //const htmlText: Node = HTMLElement.createTextNode( rawText.toHTML() );
            
            this.addHTML(htmlText);
            return(this);
        }        

    });


})();