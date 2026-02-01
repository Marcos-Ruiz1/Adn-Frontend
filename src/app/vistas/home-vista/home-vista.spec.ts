import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeVista } from './home-vista';

describe('HomeVista', () => {
  let component: HomeVista;
  let fixture: ComponentFixture<HomeVista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeVista]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeVista);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
