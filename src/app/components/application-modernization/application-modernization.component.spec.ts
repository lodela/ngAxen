import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationModernizationComponent } from './application-modernization.component';

describe('ApplicationModernizationComponent', () => {
  let component: ApplicationModernizationComponent;
  let fixture: ComponentFixture<ApplicationModernizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationModernizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationModernizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
