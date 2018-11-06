import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDbarchartComponent } from './three-dbarchart.component';

describe('ThreeDbarchartComponent', () => {
  let component: ThreeDbarchartComponent;
  let fixture: ComponentFixture<ThreeDbarchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeDbarchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeDbarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
