import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnPhotosComponent } from './an-photos.component';

describe('AnPhotosComponent', () => {
  let component: AnPhotosComponent;
  let fixture: ComponentFixture<AnPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnPhotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
