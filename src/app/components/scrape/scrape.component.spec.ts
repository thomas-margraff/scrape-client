import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrapeComponent } from './scrape.component';

describe('ScrapeComponent', () => {
  let component: ScrapeComponent;
  let fixture: ComponentFixture<ScrapeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrapeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
