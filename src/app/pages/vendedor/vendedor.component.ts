import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendedor } from 'src/app/models/vendedor';
import { VendedorService } from 'src/app/services/vendedor.service';

@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.component.html',
  styleUrls: ['./vendedor.component.scss']
})
export class VendedorComponent implements OnInit {

  @Output() vendedorCompartilhado: Vendedor;

  vendedor: Vendedor;
  bolEditar: boolean = false;
  bolExcluir: boolean = false;
  bolLerMais: boolean = false;
  id: number;

  constructor(
    private service: VendedorService,
    private router: ActivatedRoute,
    private mudarRota: Router
  ) {}

  ngOnInit(): void {
    this.service.listaVendedor().subscribe(
      (res:any) => {
        this.vendedor = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  editar() {
    this.bolEditar = true;
  }

  excluir() {
    this.bolExcluir = true;
  }

}
