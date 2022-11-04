import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundosImobiliariosComponent } from './fundos-imobiliarios.component';

describe('FundosImobiliariosComponent', () => {
  let component: FundosImobiliariosComponent;
  let fixture: ComponentFixture<FundosImobiliariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundosImobiliariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FundosImobiliariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
