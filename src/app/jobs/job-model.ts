// TODO: add all list countries and cities, connect job city array type to selected job city 
export enum CounterEnum {
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
  
export const  citiesList:Readonly<{[CounterEnum.PALESTINE]:ReadonlyArray<string>, [CounterEnum.JORDAN]:ReadonlyArray<string>,
                        [CounterEnum.LEBANON]:ReadonlyArray<string>,[CounterEnum.SAUDI_ARABIA]:ReadonlyArray<string>}> = {
      [CounterEnum.PALESTINE] : ["Jerusalem","Hebron","Bethlehem","Ramallah"],
      [CounterEnum.JORDAN] : ["Amman","Zarqa","Irbid","Russeifa"],
      [CounterEnum.LEBANON] : ["Beirut","Zahle","Tripoli","Sidon"],
      [CounterEnum.SAUDI_ARABIA] : ["Abha","Ad-Dilam","Al-Abwa","Al Artaweeiyah"]
}

export type jobModel = {
  id: number;
  userId: number;
  title: string;
  sector: SectorEnum;
  country: CounterEnum;
  city: string;
  description: string;
};
