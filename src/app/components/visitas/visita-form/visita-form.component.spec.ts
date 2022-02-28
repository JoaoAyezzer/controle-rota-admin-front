import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitaFormComponent } from './visita-form.component';

describe('VisitaFormComponent', () => {
  let component: VisitaFormComponent;
  let fixture: ComponentFixture<VisitaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
