import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './components/cursos/cursos.component';
import { FormCursosComponent } from './components/cursos/form-cursos/form-cursos.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DetalleEstudiantesComponent } from './components/estudiantes/detalle-estudiantes/detalle-estudiantes.component';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
import { FormEstudiantesComponent } from './components/estudiantes/form-estudiantes/form-estudiantes.component';
import { NotasComponent } from './components/notas/notas.component';

const routes: Routes = [
  { path: '', component: EstudiantesComponent, pathMatch: 'full'  },
  { path: 'estudiantes', component: EstudiantesComponent, pathMatch: 'full' },
  { path: 'estudiantes/detail/:Id', component: DetalleEstudiantesComponent, pathMatch: 'full' },
  { path: 'estudiantes/form', component: FormEstudiantesComponent, pathMatch: 'full' },
  { path: 'estudiantes/form/:Id', component: FormEstudiantesComponent, pathMatch: 'full' },
  { path: 'cursos', component: CursosComponent, pathMatch: 'full' },
  { path: 'cursos/form', component: FormCursosComponent, pathMatch: 'full' },
  { path: 'cursos/form/:Id', component: FormCursosComponent, pathMatch: 'full' },
  { path: 'notas', component: NotasComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
