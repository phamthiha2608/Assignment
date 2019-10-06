import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HCNComponent } from './hcn.component';

describe('HCNComponent', () => {
  let component: HCNComponent;
  let fixture: ComponentFixture<HCNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HCNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HCNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
