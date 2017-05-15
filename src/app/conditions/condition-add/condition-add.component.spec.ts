import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionAddComponent } from './condition-add.component';

describe('ConditionAddComponent', () => {
  let component: ConditionAddComponent;
  let fixture: ComponentFixture<ConditionAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConditionAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
