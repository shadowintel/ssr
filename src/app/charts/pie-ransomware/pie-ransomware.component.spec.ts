import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PieRansomwareComponent } from './pie-ransomware.component';

describe('PieRansomwareComponent', () => {
  let component: PieRansomwareComponent;
  let fixture: ComponentFixture<PieRansomwareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PieRansomwareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieRansomwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
