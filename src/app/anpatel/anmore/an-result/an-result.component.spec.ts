import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnResultComponent } from './an-result.component';

describe('AnResultComponent', () => {
  let component: AnResultComponent;
  let fixture: ComponentFixture<AnResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
