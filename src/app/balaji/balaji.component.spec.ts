import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalajiComponent } from './balaji.component';

describe('BalajiComponent', () => {
  let component: BalajiComponent;
  let fixture: ComponentFixture<BalajiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalajiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BalajiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
