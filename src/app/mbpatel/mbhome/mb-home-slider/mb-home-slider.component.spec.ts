import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MbHomeSliderComponent } from './mb-home-slider.component';

describe('MbHomeSliderComponent', () => {
  let component: MbHomeSliderComponent;
  let fixture: ComponentFixture<MbHomeSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MbHomeSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MbHomeSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
