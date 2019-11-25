import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalibracaoAddComponent } from './calibracao-add.component';

describe('CalibracaoAddComponent', () => {
  let component: CalibracaoAddComponent;
  let fixture: ComponentFixture<CalibracaoAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalibracaoAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalibracaoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
