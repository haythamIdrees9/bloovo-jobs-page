// we will create dummy data to be used in  visualize jobs component
// TODO: remove this data since the initial state for the project is empty data and user can fill the data
import { citiesList, CountryEnum, jobModel, SectorEnum } from './job-model';
const loremText =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

export const initialJobsList: ReadonlyArray<jobModel> = [
  {
    id: 0,
    userId:0,
    title: 'Job Title',
    sector: SectorEnum.ADMINISTRATION,
    country: CountryEnum.JORDAN,
    city: citiesList[CountryEnum.JORDAN][0],
    description: loremText,
  },
  {
    id: 1,
    userId:0,
    title: 'Job Title',
    sector: SectorEnum.COMPUTER_SOFTWARE,
    country: CountryEnum.JORDAN,
    city: citiesList[CountryEnum.JORDAN][0],
    description: loremText,
  },
  {
    id: 2,
    userId:0,
    title: 'Job Title',
    sector: SectorEnum.SALE,
    country: CountryEnum.SAUDI_ARABIA,
    city: citiesList[CountryEnum.SAUDI_ARABIA][0],
    description: loremText,
  },
  {
    id: 3,
    userId:0,
    title: 'Job Title',
    sector: SectorEnum.COMPUTER_SOFTWARE,
    country: CountryEnum.SAUDI_ARABIA,
    city: citiesList[CountryEnum.SAUDI_ARABIA][0],
    description: loremText,
  },
  {
    id: 4,
    userId:0,
    title: 'Job Title',
    sector: SectorEnum.AIRLINES,
    country: CountryEnum.LEBANON,
    city: citiesList[CountryEnum.LEBANON][0],
    description: loremText,
  },
];
