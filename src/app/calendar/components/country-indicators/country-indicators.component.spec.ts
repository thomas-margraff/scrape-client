import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryIndicatorsComponent } from './country-indicators.component';

describe('CountryIndicatorsComponent', () => {
  let component: CountryIndicatorsComponent;
  let fixture: ComponentFixture<CountryIndicatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryIndicatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryIndicatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
