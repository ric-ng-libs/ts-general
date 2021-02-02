// tslint:disable:no-string-literal

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
            return( this.replace(/\n/g, crReplacementString).replace(/\r/g, lfReplacementString) );
        }


    });


})();