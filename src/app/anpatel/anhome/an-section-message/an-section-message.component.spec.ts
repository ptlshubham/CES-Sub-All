import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnSectionMessageComponent } from './an-section-message.component';

describe('AnSectionMessageComponent', () => {
  let component: AnSectionMessageComponent;
  let fixture: ComponentFixture<AnSectionMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnSectionMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnSectionMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
