import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandyManWorkComponent } from './handy-man-work.component';

describe('HandyManWorkComponent', () => {
  let component: HandyManWorkComponent;
  let fixture: ComponentFixture<HandyManWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandyManWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HandyManWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
