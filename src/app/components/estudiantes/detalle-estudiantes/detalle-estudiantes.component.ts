import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EstudiantesService } from '../../../services/estudiantes.service';
import { CursosService } from '../../../services/cursos.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-detalle-estudiantes',
  templateUrl: './detalle-estudiantes.component.html',
  styleUrls: ['./detalle-estudiantes.component.css'],
})
export class DetalleEstudiantesComponent implements OnInit {
  form!: FormGroup;
  Id: string = '';
  estudiante: any;
  Cursos: any;
  estudianteCurso: any;
  CursosEstudiante: any;
  error: boolean = false
  messageError: string = ''
  colorError: string = ''

  constructor(
    private activatedRoute: ActivatedRoute,
    private estudiantesService: EstudiantesService,
    private formBuilder: FormBuilder,
    private cursosService: CursosService
  ) {
    this.buildForm();
  }
  private buildForm() {
    this.form = this.formBuilder.group({
      Id: [''],
      IdCurso: [''],
      IdEstudiante: [''],
      NotaFinal: [''],
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.Id = params.Id;
    });
    this.detalleEstudiante();
  }

  detalleEstudiante() {
    this.estudiantesService.getEstudiante(this.Id).subscribe((result: any) => {
      this.estudiante = result.data;
    });
    this.estudiantesService
      .listarCursosByEstudiante(this.Id)
      .subscribe((res: any) => {
        this.CursosEstudiante = res;
      });
  }

  detalleEstudianteCurso(IdEstudianteCurso: string) {
    this.estudiantesService
      .detalleEstudianteCurso(IdEstudianteCurso)
      .subscribe((res) => {
        this.estudianteCurso = res;
        this.getCursos();
        if (this.estudianteCurso) {
          this.form.patchValue(this.estudianteCurso);
        }
      });
  }

  getCursos() {
    this.form.patchValue({ IdEstudiante: this.Id });
    this.cursosService.getCursos().subscribe((res) => {
      this.Cursos = res;
    });
  }

  addNota(event: Event) {
    event.preventDefault();
    if (!this.form.value.Id) {
      this.cursosService
        .consultarAsignados(this.form.value)
        .subscribe((result: any) => {
          if (result.length == 0) {
            this.cursosService.addNota(this.form.value).subscribe((res) => {
              this.detalleEstudiante();
              this.error = true
              this.messageError = `Registrado Exitosamente`
              this.colorError = `alert-success`
              this.reset()
            });
          } else {
            this.error = true
            this.messageError = `Estudiante ya esta suscrito a este curso`
            this.colorError = `alert-danger`
          }
        });
    } else {
      this.estudiantesService
        .updateEstudianteCurso(this.form.value)
        .subscribe((res) => {

          this.detalleEstudiante();
          this.error = true
          this.messageError = `Actualizado`
          this.colorError = `alert-success`
          this.reset()
        });
    }
  }

  reset() {
    this.form.reset();
  }
}
