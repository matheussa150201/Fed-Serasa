import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendedor } from 'src/app/models/vendedor';

@Component({
  selector: 'app-editar-vendedor',
  templateUrl: './editar-vendedor.component.html',
  styleUrls: ['./editar-vendedor.component.scss']
})
export class EditarVendedorComponent implements OnInit {
  @Input() vendedorRecebido: Vendedor;

  senha: number;

  vendedor: Vendedor;
  id: string;

  constructor(
    // private vendedorService: VendedorService,
    private mudarRota: Router,
    private router: ActivatedRoute
  ) {}

  ngOnInit() {
    let params = this.router.params;
    // params.subscribe((urlParams) => {
    //   this.id = urlParams['id'];
    //   if (this.id) {
    //     this.vendedorService.obterVendedorPorId(this.id).subscribe(
    //       (res) => (this.vendedorRecebido = res),
    //       (error) => (alert("Erro interno do servidor"))
    //     );
    //   }
    // });
  }

  editarVendedor() {
  //   if(this.senha == 123) {
  //     this.vendedorService.atualizarVendedor(this.vendedorRecebido).subscribe((res) => {
  //       this.mudarRota.navigate(['/endedor']);
  //     });
  //   }
  //   else{
  //     alert('Senha incorreta!')
  //   }
  }
}
