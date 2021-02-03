//Ce fichier aurait dû être un .d.ts, mais ça provoquerait une erreur de compil. de ma lib. .


interface ArrayConstructor { //Pour les méthodes/membres  static ajoutés.
  x: number;
}


interface Array<T> { //Pour les méthodes/membres  NON static ajoutés.
    add10(): Array<T>;
}