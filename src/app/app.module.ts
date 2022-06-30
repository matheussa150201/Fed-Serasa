import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './template/navbar/navbar.component';
import { PortalComponent } from './pages/portal/portal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VendedorComponent } from './pages/vendedor/vendedor.component';
import { EditarVendedorComponent } from './pages/editar-vendedor/editar-vendedor.component';
import { ExcluirVendedorComponent } from './pages/excluir-vendedor/excluir-vendedor.component';
import { CadastrarVendedorComponent } from './pages/cadastrar-vendedor/cadastrar-vendedor.component';

@NgModule({
  declarations: [
    AppComponent,
      LoginComponent,
      NavbarComponent,
      PortalComponent,
      VendedorComponent,
      EditarVendedorComponent,
      ExcluirVendedorComponent,
      CadastrarVendedorComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
