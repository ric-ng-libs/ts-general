// tslint:disable:no-string-literal

import { HTMLFactory } from './../HTML';


export default (() => {

    //Ajout de méthodes/membres static.
    Object.assign(String, {

        crDefaultReplacementString: "\\CR",
        lfDefaultReplacementString: "\\LF"

    });


    
    //Ajout de méthodes/membres  NON static.
    Object.assign(String.prototype, {


        replaceCRLFBy(
            crReplacementString: string = String["crDefaultReplacementString"], 
            lfReplacementString: string = String["lfDefaultReplacementString"]
        ): string {
            const result: string = this.replace(/\n/g, crReplacementString).replace(/\r/g, lfReplacementString);
            return(result);
        },


        toHTML(): string {
            const htmlBR: string = HTMLFactory.createBr().outerHTML;
            const result: string = this.replaceCRLFBy(htmlBR, htmlBR);
            return(result);
        }



    });


})();