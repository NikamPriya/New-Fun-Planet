export interface IweddingPackageList{
    weddingPackageId: number,
    packageName: string,
    withFoodCost: number,
    withoutFoodCost: number,
    perPersonCost: number,
    rangeOfPeoples: string,
    description: string,
    createdDate: Date,
    isDeleted: boolean
  }