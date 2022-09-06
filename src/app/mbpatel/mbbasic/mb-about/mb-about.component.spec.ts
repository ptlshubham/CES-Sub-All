import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MbAboutComponent } from './mb-about.component';

describe('MbAboutComponent', () => {
  let component: MbAboutComponent;
  let fixture: ComponentFixture<MbAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MbAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MbAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
