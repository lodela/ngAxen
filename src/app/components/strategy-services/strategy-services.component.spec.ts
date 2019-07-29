import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategyServicesComponent } from './strategy-services.component';

describe('StrategyServicesComponent', () => {
  let component: StrategyServicesComponent;
  let fixture: ComponentFixture<StrategyServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrategyServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrategyServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
