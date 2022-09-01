import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnRightImageTextComponent } from './an-right-image-text.component';

describe('AnRightImageTextComponent', () => {
  let component: AnRightImageTextComponent;
  let fixture: ComponentFixture<AnRightImageTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnRightImageTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnRightImageTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
