import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnfooterComponent } from './anfooter.component';

describe('AnfooterComponent', () => {
  let component: AnfooterComponent;
  let fixture: ComponentFixture<AnfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnfooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
