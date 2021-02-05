//Ce fichier aurait dû être un .d.ts, mais ça provoquerait une erreur de compil. de ma lib. .


interface StringConstructor { //Pour les méthodes/membres  static ajoutés.

    crDefaultReplacementString: string;
    lfDefaultReplacementString: string;  
    
}


interface String { //Pour les méthodes/membres  NON static ajoutés.

    replaceCRLFBy(crReplacementString?: string, lfReplacementString?: string): string;

    toHTML(): string;

}