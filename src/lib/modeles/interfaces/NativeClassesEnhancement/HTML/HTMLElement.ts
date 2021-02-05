//Ce fichier aurait dû être un .d.ts, mais ça provoquerait une erreur de compil. de ma lib. .


interface HTMLElementConstructor { //Pour les méthodes/membres  static ajoutés.
  
}


interface HTMLElement { //Pour les méthodes/membres  NON static ajoutés.

    appendRawText(rawText: string): HTMLElement;
    
}