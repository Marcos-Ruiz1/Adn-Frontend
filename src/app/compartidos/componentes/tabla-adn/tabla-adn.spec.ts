import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaAdn } from './tabla-adn';

describe('TablaAdn', () => {
  let component: TablaAdn;
  let fixture: ComponentFixture<TablaAdn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaAdn]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaAdn);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
