import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-custom-pagination[pageSize][itemsLength]',
  templateUrl: './custom-pagination.component.html',
  styleUrls: ['./custom-pagination.component.scss'],
})
export class CustomPaginationComponent implements OnInit {
  @Input('pageSize') pageSize: number = 10;
  @Input('itemsLength') set setItemsLength(itemsLength: number){
    this.itemsLength = itemsLength;
    this.handlePaginationData();
  }
  itemsLength!: number;
  pagesNumber!: number;
  previousPages:number[] = []
  nextPages:number[] = []
  pageNumber!: number;
  currentUrl:string="";
  constructor(private readonly route: ActivatedRoute,private readonly router: Router) {}

  ngOnInit(): void {
    this.handleQueryParamsChange();
  }

  handleQueryParamsChange() {
    this.route.queryParams.subscribe((queryParams) => {
      this.pageNumber = queryParams['page'] ? Number(queryParams['page']) : 1;
      this.currentUrl = this.router.url.split('?')[0];
      this.handlePaginationData();
    });
  }

  handlePaginationData() {
    if (this.itemsLength <= 0 || this.pageSize <= 1 || !this.pageNumber) {
        this.pagesNumber = 0;
        return;
    }
    this.pagesNumber = Math.ceil(this.itemsLength / this.pageSize);
    this.calculatePagesList();
  }

  private calculatePagesList(){
    if(this.pagesNumber == 1){
      return;
    }
    this.previousPages = this.nextPages = []; 
    // add previous pages
    if(this.pageNumber > 2){
      this.previousPages = [this.pageNumber - 2,this.pageNumber - 1]
    } else  if(this.pageNumber > 1){
      this.previousPages = [this.pageNumber - 1]
    }

    // set nextPages pages
    if(this.pageNumber + 1 < this.pagesNumber){
      this.nextPages = [this.pageNumber + 1,this.pageNumber + 2]
    } else if (this.pageNumber  < this.pagesNumber){
      this.nextPages = [this.pageNumber + 1]
    }

  }
}
