import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipamentosEditComponent } from './equipamentos-edit.component';

describe('EquipamentosEditComponent', () => {
  let component: EquipamentosEditComponent;
  let fixture: ComponentFixture<EquipamentosEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipamentosEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipamentosEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
