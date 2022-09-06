import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MbLeftImageTextComponent } from './mb-left-image-text.component';

describe('MbLeftImageTextComponent', () => {
  let component: MbLeftImageTextComponent;
  let fixture: ComponentFixture<MbLeftImageTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MbLeftImageTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MbLeftImageTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
