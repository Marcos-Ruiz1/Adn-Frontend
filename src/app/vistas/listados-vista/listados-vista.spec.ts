import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadosVista } from './listados-vista';

describe('ListadosVista', () => {
  let component: ListadosVista;
  let fixture: ComponentFixture<ListadosVista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadosVista]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadosVista);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
