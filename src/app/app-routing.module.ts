import { VisitaFormComponent } from './components/visitas/visita-form/visita-form.component';
import { TecnicoFormComponent } from './components/tecnicos/tecnico-form/tecnico-form.component';
import { LimpezasComponent } from './components/carros/limpezas/limpezas.component';
import { ManutencoesComponent } from './components/carros/manutencoes/manutencoes.component';
import { AbastecimentosComponent } from './components/carros/abastecimentos/abastecimentos.component';
import { CarrosComponent } from './components/carros/carros.component';
import { DespesasComponent } from './components/despesas/despesas.component';
import { VisitasComponent } from './components/visitas/visitas.component';
import { TecnicosComponent } from './components/tecnicos/tecnicos.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'tecnicos', component: TecnicosComponent },
  {path: 'visitas', component: VisitasComponent },
  {path: 'visitas/form', component: VisitaFormComponent},
  {path: 'despesas', component: DespesasComponent },
  {path: 'carros', component: CarrosComponent},
  {path: 'carros/abastecimentos', component: AbastecimentosComponent},
  {path: 'carros/manutencoes', component: ManutencoesComponent},
  {path: 'carros/limpezas', component: LimpezasComponent},
  {path: 'tecnicos/form', component: TecnicoFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
