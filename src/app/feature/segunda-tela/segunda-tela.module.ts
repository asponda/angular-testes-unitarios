import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { SegundaTelaRoutesModule } from './segunda-tela.routes';
import { SegundaTelaComponent } from './segunda-tela.component';


@NgModule({
  imports: [
    CommonModule,
    SegundaTelaRoutesModule,
    SharedModule,
  ],
  declarations: [SegundaTelaComponent]
})
export class SegundaTelaModule { }
