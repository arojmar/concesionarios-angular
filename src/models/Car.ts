export enum Brand {
    Audi = 1,
    BMW = 2,
    Mercedes = 3,
    Ferrari = 4,
    Tesla = 5
}


export interface Car {
    model: string;
    brand: Brand;
    year: string;
    stock: number;
    visible: boolean;
}
