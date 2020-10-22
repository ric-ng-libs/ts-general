
import { IComparateur, Filtre } from './../../modeles';


export abstract class AFiltreService<T> {
    private comparateur: IComparateur<T>;

    constructor() {
        this.comparateur = this.creerComparateur();
    }

    protected abstract creerComparateur(): IComparateur<T>;

    private obtenirComparateur(): IComparateur<T> {
        return(this.comparateur);
    }

    obtenirFiltreEgalite(itemCible: T): Filtre<T> {
        const retour: Filtre<T> = (item: T): boolean => {
            const trouve: boolean = this.obtenirComparateur().testerEgalite(item, itemCible);
            return(trouve);
        };
        return(retour);
    }

}
