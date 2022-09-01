import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnHomeSliderComponent } from './an-home-slider.component';

describe('AnHomeSliderComponent', () => {
  let component: AnHomeSliderComponent;
  let fixture: ComponentFixture<AnHomeSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnHomeSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnHomeSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
