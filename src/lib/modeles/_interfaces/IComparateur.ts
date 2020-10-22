export interface IComparateur<T> {
    testerEgalite(item1: T, item2: T): boolean;
}
