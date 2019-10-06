import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThuongComponent } from './thuong.component';

describe('ThuongComponent', () => {
  let component: ThuongComponent;
  let fixture: ComponentFixture<ThuongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThuongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThuongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
