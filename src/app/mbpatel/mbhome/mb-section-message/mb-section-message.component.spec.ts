import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MbSectionMessageComponent } from './mb-section-message.component';

describe('MbSectionMessageComponent', () => {
  let component: MbSectionMessageComponent;
  let fixture: ComponentFixture<MbSectionMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MbSectionMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MbSectionMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
