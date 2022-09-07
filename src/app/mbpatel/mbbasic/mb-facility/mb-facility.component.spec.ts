import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MbFacilityComponent } from './mb-facility.component';

describe('MbFacilityComponent', () => {
  let component: MbFacilityComponent;
  let fixture: ComponentFixture<MbFacilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MbFacilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MbFacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
