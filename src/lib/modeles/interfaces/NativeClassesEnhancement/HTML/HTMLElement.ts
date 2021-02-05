//Ce fichier aurait dû être un .d.ts, mais ça provoquerait une erreur de compil. de ma lib. .


interface HTMLElementConstructor { //Pour les méthodes/membres  static ajoutés.
 

    // * Pour la classe HTMLElement, apparemment pas moyen (la compil. ne connaît pas le membre) d'avoir nos propres
    //   membres/méthodes static, il faudra utiliser la syntaxe HTMLElement["nomMembre"]
    //   pour pouvoir les utiliser ! Bizarre, car pas le souci avec la classe String par exemple !    

    // createTextNode(text?: string): Node;


}


interface HTMLElement { //Pour les méthodes/membres  NON static ajoutés.

    addHTML(html: Node): HTMLElement;

    appendRawText(rawText: string): HTMLElement;
    
}