 export interface rent {
  _id: string;
  propertyType:string;
  image: string[];
  propertyStatus: string;
  label: { name: string; vip?: boolean; isNew?: boolean }[];
  city: string;
  description: string;
  location:string;
  price: string;
  ownerPrice:number;
  area: string;
  commisionSum: number;
  construction:string;
  constructionDate: number;
  street: string;
  streetNumber: string;
  entranceNumber: string;
  apartmentNumber: string;
  buildingFloorCount: number;
  floor:number;
  currencyType:string;
  sku:number;
  createdAt:string;
}

export default rent;
