// tslint:disable:no-string-literal



// ATTENTION, apparemment, après essai, j'ai constaté, que bien que la compil. passerait nickel,
//            sous Angular, à l'exécution, le fait d'avoir enrichit (static ou non), la classe Object
//            fait planter l'exécution.

export default (() => {

    //Ajout de méthodes/membres static.
    Object.assign(Object, {

    });


    
    //Ajout de méthodes/membres  NON static.
    Object.assign(Object.prototype, {

    });


})();