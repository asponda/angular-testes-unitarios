import { Component, OnInit } from '@angular/core';
import { ApoliceService } from '../../shared/services/apolice/apolice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  apolices: any;

  exemploExibicaoTexto = `teste 0`;
  private contadorClick = 0;

  constructor(
    private router: Router,
    private apolicesService: ApoliceService,
  ) { }

  ngOnInit() {

    const obs = this.apolicesService
        .getApolices()
        .subscribe(
          (data) => { this.apolices = data; },
          (err) => { console.log(err); }
        );
  }

  // Events
  onClickButtonExibicaoTexto() {
    this.incrementarContador();
    this.exemploExibicaoTexto = `teste ${this.contadorClick}`;
  }

  onClickButton() {
    this.router.navigate(['segunda-tela']);
  }

  // Methods
  private incrementarContador() {
    this.contadorClick++;
  }

}
