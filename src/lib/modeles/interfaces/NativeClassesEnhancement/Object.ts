//Ce fichier aurait dû être un .d.ts, mais ça provoquerait une erreur de compil. de ma lib. .

// ATTENTION, apparemment, après essai, j'ai constaté, que bien que la compil. passerait nickel,
//            sous Angular, à l'exécution, le fait d'avoir enrichit (static ou non), la classe Object
//            fait planter l'exécution.

interface ObjectConstructor { //Pour les méthodes/membres  static ajoutés.

}


interface Object { //Pour les méthodes/membres  NON static ajoutés.

}