import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackedareachartComponent } from './stackedareachart.component';

describe('StackedareachartComponent', () => {
  let component: StackedareachartComponent;
  let fixture: ComponentFixture<StackedareachartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackedareachartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackedareachartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
