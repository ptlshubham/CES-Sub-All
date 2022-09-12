import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MbPhysicsComponent } from './mb-physics.component';

describe('MbPhysicsComponent', () => {
  let component: MbPhysicsComponent;
  let fixture: ComponentFixture<MbPhysicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MbPhysicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MbPhysicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
