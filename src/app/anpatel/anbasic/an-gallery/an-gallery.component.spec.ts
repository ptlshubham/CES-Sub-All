import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnGalleryComponent } from './an-gallery.component';

describe('AnGalleryComponent', () => {
  let component: AnGalleryComponent;
  let fixture: ComponentFixture<AnGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
