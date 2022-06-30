import { CadastrarVendedorComponent } from './pages/cadastrar-vendedor/cadastrar-vendedor.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";
import { PortalComponent } from "./pages/portal/portal.component";
import { VendedorComponent } from "./pages/vendedor/vendedor.component";


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'portal', component: PortalComponent },
  { path: 'vendedor', component: VendedorComponent },
  { path: 'cadastrar-vendedor', component: CadastrarVendedorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
