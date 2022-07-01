import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsViewComponent } from './jobs-view.component';

describe('JobViewComponent', () => {
  let component: JobsViewComponent;
  let fixture: ComponentFixture<JobsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
