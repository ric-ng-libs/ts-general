// tslint:disable:no-string-literal

export default (() => {

    //Ajout de méthodes/membres static.
    Object.assign(Array, {
        x: 100

    });


    
    //Ajout de méthodes/membres  NON static.
    Object.assign(Array.prototype, {

        add10(): Array<number> {
            return(this.push(10));
        },


    });


})();