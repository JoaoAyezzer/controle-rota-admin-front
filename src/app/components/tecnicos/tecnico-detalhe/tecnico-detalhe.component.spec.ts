import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnicoDetalheComponent } from './tecnico-detalhe.component';

describe('TecnicoDetalheComponent', () => {
  let component: TecnicoDetalheComponent;
  let fixture: ComponentFixture<TecnicoDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TecnicoDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TecnicoDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
