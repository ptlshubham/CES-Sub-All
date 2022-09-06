import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MbStatisticsIncrementorComponent } from './mb-statistics-incrementor.component';

describe('MbStatisticsIncrementorComponent', () => {
  let component: MbStatisticsIncrementorComponent;
  let fixture: ComponentFixture<MbStatisticsIncrementorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MbStatisticsIncrementorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MbStatisticsIncrementorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
