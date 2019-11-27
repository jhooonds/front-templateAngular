import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmostrasEditComponent } from './amostras-edit.component';

describe('AmostrasEditComponent', () => {
  let component: AmostrasEditComponent;
  let fixture: ComponentFixture<AmostrasEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmostrasEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmostrasEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
