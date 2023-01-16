import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GnpComponent } from './gnp.component';

describe('GnpComponent', () => {
  let component: GnpComponent;
  let fixture: ComponentFixture<GnpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GnpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GnpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
