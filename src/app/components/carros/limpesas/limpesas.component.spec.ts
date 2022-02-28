import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LimpesasComponent } from './limpesas.component';

describe('LimpesasComponent', () => {
  let component: LimpesasComponent;
  let fixture: ComponentFixture<LimpesasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LimpesasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LimpesasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
