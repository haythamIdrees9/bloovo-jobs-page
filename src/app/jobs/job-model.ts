// TODO: add all list countries and cities, connect job city array type to selected job city 
export enum CountryEnum {
  PALESTINE = 'Palestine',
  JORDAN = 'Jordan',
  LEBANON = 'Lebanon',
  SAUDI_ARABIA = 'Saudi Arabia',
}

export enum SectorEnum {
    SALE = 'Sale',
    AIRLINES = 'Airlines',
    ADMINISTRATION = 'Administration',
    COMPUTER_SOFTWARE = 'Computer Software',
  }
  
export const  citiesList:Readonly<{[CountryEnum.PALESTINE]:ReadonlyArray<string>, [CountryEnum.JORDAN]:ReadonlyArray<string>,
                        [CountryEnum.LEBANON]:ReadonlyArray<string>,[CountryEnum.SAUDI_ARABIA]:ReadonlyArray<string>}> = {
      [CountryEnum.PALESTINE] : ["Jerusalem","Hebron","Bethlehem","Ramallah"],
      [CountryEnum.JORDAN] : ["Amman","Zarqa","Irbid","Russeifa"],
      [CountryEnum.LEBANON] : ["Beirut","Zahle","Tripoli","Sidon"],
      [CountryEnum.SAUDI_ARABIA] : ["Abha","Ad-Dilam","Al-Abwa","Al Artaweeiyah"]
}
export const wholeCitiesList:ReadonlyArray<string>=[
  ...citiesList[CountryEnum.PALESTINE],
  ...citiesList[CountryEnum.JORDAN],
  ...citiesList[CountryEnum.LEBANON],
  ...citiesList[CountryEnum.SAUDI_ARABIA],
]
export type jobModel = {
  id: number;
  userId: number;
  title: string;
  sector: SectorEnum;
  country: CountryEnum;
  city: string;
  description: string;
};
