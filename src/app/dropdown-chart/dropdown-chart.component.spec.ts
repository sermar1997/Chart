import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownChartComponent } from './dropdown-chart.component';

describe('DropdownChartComponent', () => {
  let component: DropdownChartComponent;
  let fixture: ComponentFixture<DropdownChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
