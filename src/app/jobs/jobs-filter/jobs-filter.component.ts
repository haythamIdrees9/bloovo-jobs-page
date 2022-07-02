import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryEnum, SectorEnum, wholeCitiesList } from '../job-model';

@Component({
  selector: 'app-jobs-filter',
  templateUrl: './jobs-filter.component.html',
  styleUrls: ['./jobs-filter.component.scss'],
})
export class JobsFilterComponent implements OnInit {
  sectors = Object.values(SectorEnum);
  countries:any = Object.values(CountryEnum);
  citiesList = wholeCitiesList;
  selectedCountry: boolean[] = Array(Object.keys(CountryEnum).length).fill(
    false
  );
  sectorCountry: boolean[] = Array(Object.keys(SectorEnum).length).fill(false);
  selectedData: any = {
    sectors: Array(Object.keys(SectorEnum).length).fill(false),
    countries: Array(Object.keys(CountryEnum).length).fill(false),
    cities: Array(Object.keys(wholeCitiesList).length).fill(false),
  };
  @Input('opened') opened!:boolean;
  
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.handleQueryParamsChange();
    
  }

  private handleQueryParamsChange() {
    this.route.queryParams.subscribe((queryParams) => {
      for (const key of Object.keys(this.selectedData)) {
        if (queryParams[key]) {
          const selected = queryParams[key].split(',');
          for (const selectedIndex of selected) {
            if (Number(selectedIndex) < this.selectedData[key].length) {
              this.selectedData[key][Number(selectedIndex)] = true;
            }
          }
        }
      }
    });
  }

  onSectorsChange(checked: boolean, index: number) {
    this.onCheckboxChange(Object.keys(this.selectedData)[0], checked, index);
  }

  onCountriesChange(checked: boolean, index: number) {
    this.onCheckboxChange(Object.keys(this.selectedData)[1], checked, index);
  }

  onCitiesChange(checked: boolean, index: number) {
    this.onCheckboxChange(Object.keys(this.selectedData)[2], checked, index);
  }

  private onCheckboxChange(
    queryParamKey: string,
    checked: boolean,
    index: number
  ) {
    let selected =
      this.route.snapshot.queryParams[queryParamKey]?.split(',') ?? [];
    if (checked) {
      selected.push(index);
    } else {
      selected = selected.filter(
        (country: string) => Number(country) !== index
      );
    }
    
    if (selected.length) {

      this.router.navigate([this.router.url.split('?')[0]], {
        queryParams: { [queryParamKey]: selected.toString(),page:1 },
        queryParamsHandling: 'merge',
      });
    } else {
      const queryParams: any = { ...this.route.snapshot.queryParams,page:1 };
      delete queryParams[queryParamKey];
      this.router.navigate([''], { queryParams });
    }
  }
}
