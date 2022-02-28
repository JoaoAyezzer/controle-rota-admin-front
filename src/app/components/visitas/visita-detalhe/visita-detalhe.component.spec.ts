import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitaDetalheComponent } from './visita-detalhe.component';

describe('VisitaDetalheComponent', () => {
  let component: VisitaDetalheComponent;
  let fixture: ComponentFixture<VisitaDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitaDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitaDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
