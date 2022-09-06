import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MbHomeBannerComponent } from './mb-home-banner.component';

describe('MbHomeBannerComponent', () => {
  let component: MbHomeBannerComponent;
  let fixture: ComponentFixture<MbHomeBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MbHomeBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MbHomeBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
