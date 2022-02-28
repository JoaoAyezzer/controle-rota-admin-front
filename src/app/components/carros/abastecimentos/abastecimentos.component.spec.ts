import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbastecimentosComponent } from './abastecimentos.component';

describe('AbastecimentosComponent', () => {
  let component: AbastecimentosComponent;
  let fixture: ComponentFixture<AbastecimentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbastecimentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbastecimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
