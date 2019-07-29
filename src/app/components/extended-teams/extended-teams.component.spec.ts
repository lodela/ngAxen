import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedTeamsComponent } from './extended-teams.component';

describe('ExtendedTeamsComponent', () => {
  let component: ExtendedTeamsComponent;
  let fixture: ComponentFixture<ExtendedTeamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtendedTeamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendedTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
