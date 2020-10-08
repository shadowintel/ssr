import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RansomewareSubscribeComponent } from './ransomeware-subscribe.component';

describe('RansomewareSubscribeComponent', () => {
  let component: RansomewareSubscribeComponent;
  let fixture: ComponentFixture<RansomewareSubscribeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RansomewareSubscribeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RansomewareSubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
