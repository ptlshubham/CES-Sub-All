import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnLeftImageTextComponent } from './an-left-image-text.component';

describe('AnLeftImageTextComponent', () => {
  let component: AnLeftImageTextComponent;
  let fixture: ComponentFixture<AnLeftImageTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnLeftImageTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnLeftImageTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
