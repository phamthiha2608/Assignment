import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhamthihaComponent } from './phamthiha.component';

describe('PhamthihaComponent', () => {
  let component: PhamthihaComponent;
  let fixture: ComponentFixture<PhamthihaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhamthihaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhamthihaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
