import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicatorDataListComponent } from './indicator-data-list.component';

describe('IndicatorDataListComponent', () => {
  let component: IndicatorDataListComponent;
  let fixture: ComponentFixture<IndicatorDataListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndicatorDataListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicatorDataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
