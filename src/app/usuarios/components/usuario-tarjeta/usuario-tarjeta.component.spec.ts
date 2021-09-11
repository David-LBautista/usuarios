import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioTarjetaComponent } from './usuario-tarjeta.component';

describe('UsuarioTarjetaComponent', () => {
  let component: UsuarioTarjetaComponent;
  let fixture: ComponentFixture<UsuarioTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioTarjetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
