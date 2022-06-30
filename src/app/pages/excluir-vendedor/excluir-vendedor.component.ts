import { Vendedor } from 'src/app/models/vendedor';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-vendedor',
  templateUrl: './excluir-vendedor.component.html',
  styleUrls: ['./excluir-vendedor.component.scss']
})
export class ExcluirVendedorComponent implements OnInit {
  @Input() vendedorRecebido: Vendedor;

  senha: number;
  vendedor: Vendedor;
  id: string;

  constructor(
    // private service: ModalExcluirService,
    // private vendedorService: VendedorService,
    private router: ActivatedRoute,
    private mudarRota: Router
  ) {}

  ngOnInit(): void {
    let params = this.router.params;
    params.subscribe((urlParams) => {
      // this.id = urlParams['id'];
      // if (this.id) {
      //   this.vendedorService.obterVendedorPorId(this.id).subscribe(
      //     (res) => (this.vendedorRecebido = res),
      //     (error) => (alert("Error interno do servidor"))
      //   );
      // }
    });
  }

  excluir(vendedor: Vendedor) {
    if(this.senha == 123) {
      const id = vendedor.id;
      // this.service.deletaVendedor(id).subscribe(
      //   (response) => {
      //     this.mudarRota.navigate(['/vendedor']);
      //   },
      //   (error) => {
      //     console.log(error);
      //   }
      // );
    }
    else {
      alert('Senha incorreta')
    }
  }

}
