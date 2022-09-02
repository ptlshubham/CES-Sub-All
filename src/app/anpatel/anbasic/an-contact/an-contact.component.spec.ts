import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnContactComponent } from './an-contact.component';

describe('AnContactComponent', () => {
  let component: AnContactComponent;
  let fixture: ComponentFixture<AnContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
