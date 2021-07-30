import { IComparator, IGenericList } from './../interfaces';
import { FilterType, NumberOrNull, StringOrNull } from './../types';



export class GenericList<ElementType> implements IGenericList<ElementType> {
    private elements: Array<ElementType>;
    private allowNullElement: boolean = false;
     

    constructor(elements: Array<ElementType> = []) {
        this.defineElements(elements);

    }

    setAllowNullElement(allowNullElement: boolean): void {
        this.allowNullElement = allowNullElement;
    }


    defineElements(elements: Array<ElementType>): boolean {
        let result: boolean = false;

        if (elements !== null) {
            if (this.elements !== elements) {
                this.elements = elements;
                result = true;
            }
        }
        
        return(result);
    }

    getElements(): Array<ElementType> {
        const result: Array<ElementType> = this.elements;
        return(result);
    }

    getElementByIndex(index: number): ElementType {
        let result: ElementType;
        this.checkValidIndex(index);
        result = this.elements[index];
        return(result);
    }

    private checkValidIndex(index: number): void {
        const lastIndex: NumberOrNull = this.getLastIndex();
        let errorMessage: StringOrNull = null;

        if (lastIndex === null) {
            errorMessage = `NO index can match, the list is empty`;

        } else {
            if (!this.isValidIndex(index)) {
                errorMessage = `Out of range index: ${index}, should be in interval : [0, ${lastIndex}]`;
            }

        }

        if (errorMessage !== null) {
            throw new Error(errorMessage);
        }
    }
    private isValidIndex(index: number): boolean {
        const elementsNumber: number = this.getElementsNumber();
        const result: boolean = (elementsNumber > 0  &&  index >= 0  &&  index < elementsNumber);
        return(result);
    }

    private getLastIndex(): NumberOrNull {
        const elementsNumber: number = this.getElementsNumber();
        const result: NumberOrNull = (elementsNumber>0)? elementsNumber-1 : null;
        return(result);
    }

    isEmpty(): boolean {
        const result: boolean = (this.getElementsNumber() === 0);
        return(result);
    }

    protected getDefaultEqualityFilter(targetElement: ElementType): FilterType<ElementType> {
        const result: FilterType<ElementType> = (element: ElementType): boolean => ( element === targetElement );
        return(result);

    }    

    // tslint:disable-next-line:prefer-function-over-method
    private getEqualityFilterFromComparator(
        targetElement: ElementType, 
        comparator: IComparator<ElementType>
    ): FilterType<ElementType> {

        const result: FilterType<ElementType> = (comparator === null) 
                                            ?
                                                this.getDefaultEqualityFilter(targetElement)
                                            :
                                                (element: ElementType): boolean => comparator.testEquality(element, targetElement)
                                            ;
        return(result);

    }    

    getElementsMatchingFilter(filter: FilterType<ElementType>): Array<ElementType> {
        const result: Array<ElementType> = this.elements.filter( 
            (element: ElementType, index: number) => filter(element, index)
        );
        return(result);
    }

    getFirstElementMatchingFilter(filter: FilterType<ElementType>): ElementType {
        let result: ElementType = null;

        let isElementFound: boolean;
        let index: number = 0;
        for (const element of this.elements) {
            isElementFound = filter(element, index++);
            if (isElementFound) {
                result = element;
                break;
            }
    
        }

        return(result);
    }

    getIndexOfFirstElementMatchingFilter(filter: FilterType<ElementType>): number {
        const result: number  = this.elements.findIndex( 
            (element: ElementType, index: number) => filter(element, index)
        );

        return(result);
    }
    
    modifyFirstElementMatchingFilter(sourceElement: ElementType, filter: FilterType<ElementType>): boolean {
        let result: boolean = false;
        if (sourceElement !== null) {

            const elementToModify: ElementType = this.getFirstElementMatchingFilter(filter);
            if (elementToModify !== null) {
                Object.assign(elementToModify, sourceElement);
                result = true;
            }

        }
        return(result);
    }
    
    testIfExistsElementMatchingFilter(filter: FilterType<ElementType>): boolean {
        const indexElementMatchingFilter: number= this.getIndexOfFirstElementMatchingFilter(filter);
                                            
        const result: boolean  = (indexElementMatchingFilter >= 0);

        return(result);        
    }
    
    removeElementsMatchingFilter(filter: FilterType<ElementType>): boolean {
        let result: boolean = false;

        let isRemoveDone: boolean;
        while( (isRemoveDone = this.removeElementMatchingFilter(filter)) ) {
            if (isRemoveDone) {
                result = true;
            }
        }

        return(result);
    }
    
    removeElementMatchingFilter(filter: FilterType<ElementType>): boolean {
        let result: boolean = false;

        const indexElementMatchingFilter: number = this.getIndexOfFirstElementMatchingFilter(filter);

        if(indexElementMatchingFilter >= 0) {
          this.elements.splice(indexElementMatchingFilter, 1);
          result = true;
        } 

        return(result);
    }    

   
    getFirstElementEqualTo(targetElement: ElementType, comparator: IComparator<ElementType> = null): ElementType {
        const equalityFilter: FilterType<ElementType> = this.getEqualityFilterFromComparator(targetElement, comparator);
                                            
        const result: ElementType = this.getFirstElementMatchingFilter(equalityFilter);

        return(result);
    }
    
    getIndexOfFirstElementEqualTo(targetElement: ElementType, comparator: IComparator<ElementType> = null): number {
        const equalityFilter: FilterType<ElementType> = this.getEqualityFilterFromComparator(targetElement, comparator);
                                            
        const result: number = this.getIndexOfFirstElementMatchingFilter(equalityFilter);

        return(result);       
    }

    modifyFirstElementEqualTo(
        sourceElement: ElementType, 
        targetElement: ElementType, 
        comparator: IComparator<ElementType> = null
    ): boolean {
        const equalityFilter: FilterType<ElementType> = this.getEqualityFilterFromComparator(targetElement, comparator);

        const result: boolean = this.modifyFirstElementMatchingFilter(sourceElement, equalityFilter);

        return(result);
    }

    testIfExistsElementEqualTo(targetElement: ElementType, comparator: IComparator<ElementType> = null): boolean {
        const equalityFilter: FilterType<ElementType> = this.getEqualityFilterFromComparator(targetElement, comparator);
                                            
        const result: boolean  = this.testIfExistsElementMatchingFilter(equalityFilter);

        return(result);        
    }
    
    addNewElement(element: ElementType, comparator: IComparator<ElementType> = null): void {
        if (!this.testIfExistsElementEqualTo(element, comparator)) {
            this.addElement(element);

        }
    }

    addElements(elements: Array<ElementType>): void {
        if (elements !== null) {
            for(const element of elements) {
                this.addElement(element);

            }
        }
    }

    addElementsFromList(elementsList: IGenericList<ElementType>): void {
        if (elementsList !== null) {
            const elements: Array<ElementType> = elementsList.getElements();
            this.addElements(elements);
            
        }        
    }

    addElement(element: ElementType): void {
        if (element !== null || this.allowNullElement) {
            this.elements.push(element);
        }
    }

    clear(): void {
        this.removeElementsEqualTo(this.elements);
    }

    removeElementsEqualTo(targetElements: Array<ElementType>, comparator: IComparator<ElementType> = null): boolean {
        let result: boolean = false;

        let isRemoveDone: boolean;
        const targetElementsCopy: Array<ElementType> = [...targetElements];
        for(const targetElement of targetElementsCopy) {
            if (this.elements.length) {
                isRemoveDone = this.removeElementEqualTo(targetElement, comparator);
                if (isRemoveDone) {
                    result = true;
                }
            }

        }

        return(result);
    }

    removeElementEqualTo(targetElement: ElementType, comparator: IComparator<ElementType> = null): boolean {
        let result: boolean;

        const equalityFilter: FilterType<ElementType> = this.getEqualityFilterFromComparator(targetElement, comparator);

        result = this.removeElementMatchingFilter(equalityFilter);

        return(result);
    }

    getElementsNumber(): number {
        const result: number = this.elements.length;
        return(result);
    }

    getLastElement(): ElementType | null {
        const result: ElementType = (this.isEmpty())? null : this.getElementByIndex(this.getLastIndex());
        return(result);
    }


    each<CallBackReturnType>( 
        fCallBack: ((element: ElementType, index?: number) => CallBackReturnType),
        fBreakLoop: ((callBackReturnedValue: CallBackReturnType) => boolean) = null
    ): void {
        if (fCallBack !== null) {

            let index: number = 0;
            const lastIndex: number = this.getLastIndex();
            let callBackReturnedValue: CallBackReturnType;
            const isBreakLoopConditionFunction: boolean = (fBreakLoop !== null);
            for (const element of this.elements) {
                callBackReturnedValue = fCallBack(element, index);

                if (isBreakLoopConditionFunction && index !== lastIndex) {
                    if (fBreakLoop(callBackReturnedValue)) {
                        break;
                    }
                }

                index++;
            }        

        }
    }
   
}
