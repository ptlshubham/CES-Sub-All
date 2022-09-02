import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnInfraComponent } from './an-infra.component';

describe('AnInfraComponent', () => {
  let component: AnInfraComponent;
  let fixture: ComponentFixture<AnInfraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnInfraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnInfraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
