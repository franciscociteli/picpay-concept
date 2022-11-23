import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractConditionsComponent } from './contract-conditions.component';

describe('HomeComponent', () => {
  let component: ContractConditionsComponent;
  let fixture: ComponentFixture<ContractConditionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractConditionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
