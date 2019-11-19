import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmostrasAddComponent } from './amostras-add.component';

describe('AmostrasAddComponent', () => {
  let component: AmostrasAddComponent;
  let fixture: ComponentFixture<AmostrasAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmostrasAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmostrasAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
