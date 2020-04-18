import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColdToHotObservableComponent } from './cold-to-hot-observable.component';

describe('ColdToHotObservableComponent', () => {
  let component: ColdToHotObservableComponent;
  let fixture: ComponentFixture<ColdToHotObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColdToHotObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColdToHotObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
