import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/templates/header/header.component';
import { NavComponent } from './components/templates/nav/nav.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/templates/footer/footer.component';
import { VisitasComponent } from './components/visitas/visitas.component';
import { DespesasComponent } from './components/despesas/despesas.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { CarrosComponent } from './components/carros/carros.component';
import { AbastecimentosComponent } from './components/carros/abastecimentos/abastecimentos.component';
import { ManutencoesComponent } from './components/carros/manutencoes/manutencoes.component';
import { LimpezasComponent } from './components/carros/limpezas/limpezas.component';
import { VisitasReadComponent } from './components/visitas/visitas-read/visitas-read.component';
import { HomeComponent } from './components/home/home.component';
import { TecnicosComponent } from './components/tecnicos/tecnicos.component';
import { VisitaFormComponent } from './components/visitas/visita-form/visita-form.component';
import { VisitaDetalheComponent } from './components/visitas/visita-detalhe/visita-detalhe.component';
import { TecnicoFormComponent } from './components/tecnicos/tecnico-form/tecnico-form.component';
import { TecnicoDetalheComponent } from './components/tecnicos/tecnico-detalhe/tecnico-detalhe.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    VisitasComponent,
    DespesasComponent,
    ClientesComponent,
    CarrosComponent,
    AbastecimentosComponent,
    ManutencoesComponent,
    LimpezasComponent,
    VisitasReadComponent,
    HomeComponent,
    TecnicosComponent,
    VisitaFormComponent,
    VisitaDetalheComponent,
    TecnicoFormComponent,
    TecnicoDetalheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
