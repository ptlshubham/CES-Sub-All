import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MbPhotosComponent } from './mb-photos.component';

describe('MbPhotosComponent', () => {
  let component: MbPhotosComponent;
  let fixture: ComponentFixture<MbPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MbPhotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MbPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
