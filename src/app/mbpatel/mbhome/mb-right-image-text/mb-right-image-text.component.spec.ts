import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MbRightImageTextComponent } from './mb-right-image-text.component';

describe('MbRightImageTextComponent', () => {
  let component: MbRightImageTextComponent;
  let fixture: ComponentFixture<MbRightImageTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MbRightImageTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MbRightImageTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
