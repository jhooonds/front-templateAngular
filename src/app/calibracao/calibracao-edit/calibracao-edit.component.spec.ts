import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalibracaoEditComponent } from './calibracao-edit.component';

describe('CalibracaoEditComponent', () => {
  let component: CalibracaoEditComponent;
  let fixture: ComponentFixture<CalibracaoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalibracaoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalibracaoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
