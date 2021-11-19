import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedComponent } from './components/shared/shared.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WidgetComponent } from './components/shared/widget/widget.component';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
import { NavComponentComponent } from './components/shared/nav-component/nav-component.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { ButtonsComponent } from './components/shared/buttons/buttons.component';
import { FormEstudiantesComponent } from './components/estudiantes/form-estudiantes/form-estudiantes.component';
import { AlertComponent } from './components/shared/alert/alert.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { NotasComponent } from './components/notas/notas.component';
import { FormCursosComponent } from './components/cursos/form-cursos/form-cursos.component';
import { DetalleEstudiantesComponent } from './components/estudiantes/detalle-estudiantes/detalle-estudiantes.component';

@NgModule({
  declarations: [
    AppComponent,
    SharedComponent,
    NavbarComponent,
    DashboardComponent,
    WidgetComponent,
    EstudiantesComponent,
    NavComponentComponent,
    LoadingComponent,
    ButtonsComponent,
    FormEstudiantesComponent,
    AlertComponent,
    CursosComponent,
    NotasComponent,
    FormCursosComponent,
    DetalleEstudiantesComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
