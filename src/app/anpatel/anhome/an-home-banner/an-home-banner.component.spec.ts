import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnHomeBannerComponent } from './an-home-banner.component';

describe('AnHomeBannerComponent', () => {
  let component: AnHomeBannerComponent;
  let fixture: ComponentFixture<AnHomeBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnHomeBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnHomeBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
