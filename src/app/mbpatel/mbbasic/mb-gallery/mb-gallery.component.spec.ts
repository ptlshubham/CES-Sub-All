import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MbGalleryComponent } from './mb-gallery.component';

describe('MbGalleryComponent', () => {
  let component: MbGalleryComponent;
  let fixture: ComponentFixture<MbGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MbGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MbGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
