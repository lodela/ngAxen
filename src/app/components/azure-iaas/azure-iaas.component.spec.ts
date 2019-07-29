import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AzureIaasComponent } from './azure-iaas.component';

describe('AzureIaasComponent', () => {
  let component: AzureIaasComponent;
  let fixture: ComponentFixture<AzureIaasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AzureIaasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AzureIaasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
