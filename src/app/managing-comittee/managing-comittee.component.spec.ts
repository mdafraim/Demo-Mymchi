import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagingComitteeComponent } from './managing-comittee.component';

describe('ManagingComitteeComponent', () => {
  let component: ManagingComitteeComponent;
  let fixture: ComponentFixture<ManagingComitteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagingComitteeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagingComitteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
