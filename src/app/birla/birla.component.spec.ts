import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirlaComponent } from './birla.component';

describe('BirlaComponent', () => {
  let component: BirlaComponent;
  let fixture: ComponentFixture<BirlaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirlaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirlaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
