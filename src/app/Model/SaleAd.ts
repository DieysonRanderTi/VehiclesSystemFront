export class SaleAd{
  id: number;
  makeCarId: number;
  carModelId: number;
  carModel: {
    id,
    description
  };
  makeCar:{
    id,
    description
  };
  yearFabrication: Date;
  saleDate: Date;
  buyValue: number;
  saleValue: number;
  color: string;
  fuelType: string;
}
