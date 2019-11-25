import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipamentosAddComponent } from './equipamentos-add.component';

describe('EquipamentosAddComponent', () => {
  let component: EquipamentosAddComponent;
  let fixture: ComponentFixture<EquipamentosAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipamentosAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipamentosAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
