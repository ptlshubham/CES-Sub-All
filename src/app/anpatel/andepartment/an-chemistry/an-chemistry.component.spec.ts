import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnChemistryComponent } from './an-chemistry.component';

describe('AnChemistryComponent', () => {
  let component: AnChemistryComponent;
  let fixture: ComponentFixture<AnChemistryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnChemistryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnChemistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
