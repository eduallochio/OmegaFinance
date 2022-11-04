import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { AcoesComponent } from './acoes/acoes.component';
import { AjudaComponent } from './ajuda/ajuda.component';
import { AporteComponent } from './aporte/aporte.component';
import { CarteiraComponent } from './carteira/carteira.component';
import { FundosImobiliariosComponent } from './carteira/fundos-imobiliarios/fundos-imobiliarios.component';
import { CriptosComponent } from './carteira/criptos/criptos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DesempenhoComponent } from './desempenho/desempenho.component';
import { HomeComponent } from './home/home.component';
import { LoginlogoutComponent } from './loginlogout/loginlogout.component';
import { LoginLogoutComponent } from './login-logout/login-logout.component';
import { MercadoComponent } from './mercado/mercado.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { DividendosComponent } from './dividendos/dividendos.component';
import { RentabilidadeComponent } from './rentabilidade/rentabilidade.component';
import { SettingsComponent } from './settings/settings.component';
import { NavFooterComponent } from './sidebar/nav-footer/nav-footer.component';
import { NavHeaderComponent } from './sidebar/nav-header/nav-header.component';
import { NavRightComponent } from './sidebar/nav-right/nav-right.component';

@NgModule({
  declarations: [
    AppComponent,
    AcoesComponent,
    AjudaComponent,
    AporteComponent,
    CarteiraComponent,
    FundosImobiliariosComponent,
    CriptosComponent,
    DashboardComponent,
    DesempenhoComponent,
    HomeComponent,
    LoginlogoutComponent,
    LoginLogoutComponent,
    MercadoComponent,
    NoticiasComponent,
    DividendosComponent,
    RentabilidadeComponent,
    SettingsComponent,
    NavFooterComponent,
    NavHeaderComponent,
    NavRightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
