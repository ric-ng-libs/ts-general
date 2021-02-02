//Ce fichier aurait dû être un .d.ts, mais ça provoquerait une erreur de compil. de ma lib. .

interface String {
    replaceCRLFBy(crReplacementString?: string, lfReplacementString?: string): string;
}