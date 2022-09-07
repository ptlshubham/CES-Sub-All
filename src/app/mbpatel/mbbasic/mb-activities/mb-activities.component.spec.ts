import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MbActivitiesComponent } from './mb-activities.component';

describe('MbActivitiesComponent', () => {
  let component: MbActivitiesComponent;
  let fixture: ComponentFixture<MbActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MbActivitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MbActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
