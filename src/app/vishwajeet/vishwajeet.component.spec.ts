import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VishwajeetComponent } from './vishwajeet.component';

describe('VishwajeetComponent', () => {
  let component: VishwajeetComponent;
  let fixture: ComponentFixture<VishwajeetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VishwajeetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VishwajeetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
