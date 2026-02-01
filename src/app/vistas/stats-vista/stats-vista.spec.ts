import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsVista } from './stats-vista';

describe('StatsVista', () => {
  let component: StatsVista;
  let fixture: ComponentFixture<StatsVista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatsVista]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatsVista);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
