import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomOperatorFromAnotherOperatorComponent } from './custom-operator-from-another-operator.component';

describe('CustomOperatorFromAnotherOperatorComponent', () => {
  let component: CustomOperatorFromAnotherOperatorComponent;
  let fixture: ComponentFixture<CustomOperatorFromAnotherOperatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomOperatorFromAnotherOperatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomOperatorFromAnotherOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
