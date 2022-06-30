/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ExcluirVendedorComponent } from './excluir-vendedor.component';

describe('ExcluirVendedorComponent', () => {
  let component: ExcluirVendedorComponent;
  let fixture: ComponentFixture<ExcluirVendedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcluirVendedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcluirVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
