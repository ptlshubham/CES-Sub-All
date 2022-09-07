import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MbContactComponent } from './mb-contact.component';

describe('MbContactComponent', () => {
  let component: MbContactComponent;
  let fixture: ComponentFixture<MbContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MbContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MbContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
