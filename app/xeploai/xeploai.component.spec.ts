import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XeploaiComponent } from './xeploai.component';

describe('XeploaiComponent', () => {
  let component: XeploaiComponent;
  let fixture: ComponentFixture<XeploaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XeploaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XeploaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
