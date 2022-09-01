import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnmainComponent } from './anmain.component';

describe('AnmainComponent', () => {
  let component: AnmainComponent;
  let fixture: ComponentFixture<AnmainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnmainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
