import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharepointOnlineComponent } from './sharepoint-online.component';

describe('SharepointOnlineComponent', () => {
  let component: SharepointOnlineComponent;
  let fixture: ComponentFixture<SharepointOnlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharepointOnlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharepointOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
