import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelreaderComponent } from './excelreader.component';

describe('ExcelreaderComponent', () => {
  let component: ExcelreaderComponent;
  let fixture: ComponentFixture<ExcelreaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcelreaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcelreaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
