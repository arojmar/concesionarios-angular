export enum Brand {
    Audi = 1,
    BMW = 2,
    Mercedes = 3,
    Ferrari = 4,
    Tesla = 5,
    Otras = 6
}


export class Car {
    model: string;
    brand: Brand;
    year: string;
    stock: number;
    visible: boolean;

    constructor(item?: any){

        this.model = item?.model || '';
        this.brand = item?.brand || Brand.Otras;
        this.year = item?.year || '';
        this.stock = item?.stock || '';
        this.visible = item && item.visible !=null ? item.visible : true;
    }
}
