import { Vendedor } from './../../models/vendedor';
import { Component, OnInit } from '@angular/core';
import { VendedorService } from 'src/app/services/vendedor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-vendedor',
  templateUrl: './cadastrar-vendedor.component.html',
  styleUrls: ['./cadastrar-vendedor.component.scss']
})
export class CadastrarVendedorComponent implements OnInit {

  senha: number;
  vendedor: Vendedor;
  id: string;

  constructor(
    private service: VendedorService,
    private mudarRota: Router,
    private router: ActivatedRoute
  ) {  }

  ngOnInit() {
    // let params = this.router.params;
    // params.subscribe((urlParams) => {
    //   this.id = urlParams['id'];
    //   console.log(urlParams);
    //   if (this.id) {
    //     this.VendedorService.obterNoticiaPorId(this.id).subscribe(
    //       (res) => (this.noticia = res),
    //       (error) => (this.noticia = new Noticia())
    //     );
    //   }
    // });
  }

  // salvarNoticia() {
  //   if(this.senha == 123) {
  //     this.service.criarNoticia(this.noticia).subscribe((res) => {
  //       this.mudarRota.navigate(['/noticia']);
  //     });
  //   }
  //   else {
  //     alert('Senha incorreta')
  //   }
  // }

}
