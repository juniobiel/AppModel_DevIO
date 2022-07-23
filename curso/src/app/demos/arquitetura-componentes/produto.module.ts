import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProdutoDashboardComponent } from "./produto-dashboard/produto-dashboard.component";
import { ProdutoRoutingModule } from "./produto.routes";

import { registerLocaleData } from "@angular/common";
import localePt from '@angular/common/locales/pt';
import { ProdutoDetalheComponent } from "./components/produto-card-detalhe.component";
import { ProdutoCountComponent } from "./components/produto-count.component";
registerLocaleData(localePt);

@NgModule({
  declarations: [
    ProdutoDashboardComponent,
    ProdutoDetalheComponent,
    ProdutoCountComponent
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule
  ],
  exports: []
})

export class ProdutoModule {}