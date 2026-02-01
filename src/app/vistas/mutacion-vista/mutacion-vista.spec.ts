import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutacionVista } from './mutacion-vista';

describe('MutacionVista', () => {
  let component: MutacionVista;
  let fixture: ComponentFixture<MutacionVista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MutacionVista]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MutacionVista);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
