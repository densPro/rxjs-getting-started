import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomOperatorFromZeroComponent } from './custom-operator-from-zero.component';

describe('CustomOperatorFromZeroComponent', () => {
  let component: CustomOperatorFromZeroComponent;
  let fixture: ComponentFixture<CustomOperatorFromZeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomOperatorFromZeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomOperatorFromZeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
