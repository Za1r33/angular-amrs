import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantLodgeComponent } from './tenant-lodge.component';

describe('TenantLodgeComponent', () => {
  let component: TenantLodgeComponent;
  let fixture: ComponentFixture<TenantLodgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenantLodgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantLodgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
