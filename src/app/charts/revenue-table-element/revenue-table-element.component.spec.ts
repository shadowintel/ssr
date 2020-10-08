import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueTableElementComponent } from './revenue-table-element.component';

describe('RevenueTableElementComponent', () => {
  let component: RevenueTableElementComponent;
  let fixture: ComponentFixture<RevenueTableElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevenueTableElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenueTableElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
