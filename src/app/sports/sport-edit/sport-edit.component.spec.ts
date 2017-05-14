import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportEditComponent } from './sport-edit.component';

describe('SportEditComponent', () => {
  let component: SportEditComponent;
  let fixture: ComponentFixture<SportEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
