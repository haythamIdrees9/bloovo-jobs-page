// we will create dummy data to be used in  visualize jobs component
// TODO: remove this data since the initial state for the project is empty data and user can fill the data
import { citiesList, CounterEnum, job, SectorEnum } from './job-model';
const loremText =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

export const jobsList: ReadonlyArray<job> = [
  {
    id: 0,
    userId:0,
    title: 'Job Title',
    sector: SectorEnum.ADMINISTRATION,
    country: CounterEnum.JORDAN,
    city: citiesList[CounterEnum.JORDAN][0],
    description: loremText,
  },
  {
    id: 1,
    userId:0,
    title: 'Job Title',
    sector: SectorEnum.COMPUTER_SOFTWARE,
    country: CounterEnum.JORDAN,
    city: citiesList[CounterEnum.JORDAN][0],
    description: loremText,
  },
  {
    id: 2,
    userId:0,
    title: 'Job Title',
    sector: SectorEnum.SALE,
    country: CounterEnum.SAUDI_ARABIA,
    city: citiesList[CounterEnum.SAUDI_ARABIA][0],
    description: loremText,
  },
  {
    id: 3,
    userId:0,
    title: 'Job Title',
    sector: SectorEnum.COMPUTER_SOFTWARE,
    country: CounterEnum.SAUDI_ARABIA,
    city: citiesList[CounterEnum.SAUDI_ARABIA][0],
    description: loremText,
  },
  {
    id: 4,
    userId:0,
    title: 'Job Title',
    sector: SectorEnum.AIRLINES,
    country: CounterEnum.LEBANON,
    city: citiesList[CounterEnum.LEBANON][0],
    description: loremText,
  },
];
