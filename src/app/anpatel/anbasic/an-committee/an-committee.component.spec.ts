import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnCommitteeComponent } from './an-committee.component';

describe('AnCommitteeComponent', () => {
  let component: AnCommitteeComponent;
  let fixture: ComponentFixture<AnCommitteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnCommitteeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnCommitteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
