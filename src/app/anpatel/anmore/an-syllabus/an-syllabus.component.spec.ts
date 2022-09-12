import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnSyllabusComponent } from './an-syllabus.component';

describe('AnSyllabusComponent', () => {
  let component: AnSyllabusComponent;
  let fixture: ComponentFixture<AnSyllabusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnSyllabusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnSyllabusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
