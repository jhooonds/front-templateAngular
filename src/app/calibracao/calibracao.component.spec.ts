import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalibracaoComponent } from './calibracao.component';

describe('CalibracaoComponent', () => {
  let component: CalibracaoComponent;
  let fixture: ComponentFixture<CalibracaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalibracaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalibracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
