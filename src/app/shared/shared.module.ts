import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ApoliceService } from './services/apolice/apolice.service';
import { AppButtonComponent } from './components/app-button/app-button.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [AppButtonComponent],
  providers: [ApoliceService],
  exports: [
    AppButtonComponent,
  ]
})
export class SharedModule { }
