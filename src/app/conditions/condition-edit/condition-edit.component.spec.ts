import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionEditComponent } from './condition-edit.component';

describe('ConditionEditComponent', () => {
  let component: ConditionEditComponent;
  let fixture: ComponentFixture<ConditionEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConditionEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
