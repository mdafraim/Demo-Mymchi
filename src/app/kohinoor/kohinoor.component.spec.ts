import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KohinoorComponent } from './kohinoor.component';

describe('KohinoorComponent', () => {
  let component: KohinoorComponent;
  let fixture: ComponentFixture<KohinoorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KohinoorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KohinoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
