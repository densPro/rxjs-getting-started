import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecializedMulticastOperatorsComponent } from './specialized-multicast-operators.component';

describe('SpecializedMulticastOperatorsComponent', () => {
  let component: SpecializedMulticastOperatorsComponent;
  let fixture: ComponentFixture<SpecializedMulticastOperatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecializedMulticastOperatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecializedMulticastOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
