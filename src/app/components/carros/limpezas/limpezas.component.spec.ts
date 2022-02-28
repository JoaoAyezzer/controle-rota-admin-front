import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LimpezasComponent } from './limpezas.component';

describe('LimpezasComponent', () => {
  let component: LimpezasComponent;
  let fixture: ComponentFixture<LimpezasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LimpezasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LimpezasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
