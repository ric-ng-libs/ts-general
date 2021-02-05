// tslint:disable:no-string-literal

export default (() => {

    //Ajout de méthodes/membres static.
    Object.assign(HTMLElement, {


    });


    
    //Ajout de méthodes/membres  NON static.
    Object.assign(HTMLElement.prototype, {

        appendRawText(rawText: string): HTMLElement {
            this.innerHTML = "<div style='color: red'>"+rawText+"</div>";
            return(this);
        }



    });


})();