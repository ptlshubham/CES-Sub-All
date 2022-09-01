import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnStatisticsIncrementorComponent } from './an-statistics-incrementor.component';

describe('AnStatisticsIncrementorComponent', () => {
  let component: AnStatisticsIncrementorComponent;
  let fixture: ComponentFixture<AnStatisticsIncrementorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnStatisticsIncrementorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnStatisticsIncrementorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
