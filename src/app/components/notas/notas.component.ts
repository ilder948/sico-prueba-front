import { Component, OnInit } from '@angular/core';
import { CursosService } from '../../services/cursos.service';
import { EstudiantesService } from '../../services/estudiantes.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css'],
})
export class NotasComponent implements OnInit {
  formAsignar!: FormGroup;
  formBuscarEstudiante!: FormGroup;
  cursos: any;
  estudiantes: any;
  error: boolean = false;
  colorError: string = '';
  messageError: string = '';
  estudiantesAsignados: any;

  constructor(
    private cursosService: CursosService,
    private estudiantesService: EstudiantesService,
    private formBuilder: FormBuilder
  ) {
    this.buildFormAsignar();
    this.buildFormBuscarEstudiante();
  }

  ngOnInit(): void {
    this.getCursos();
  }

  private buildFormAsignar() {
    this.formAsignar = this.formBuilder.group({
      IdCurso: ['', Validators.required],
      IdEstudiante: ['', Validators.required],
    });
  }

  private buildFormBuscarEstudiante() {
    this.formBuscarEstudiante = this.formBuilder.group({
      estudiante: ['', Validators.required],
    });
  }

  getCursos() {
    this.cursosService.getCursos().subscribe((res) => {
      this.cursos = res;
      this.formAsignar.patchValue(this.cursos);
    });
  }

  getEstudiantes() {
    this.estudiantesService.getEstudiantes().subscribe((res) => {
      this.estudiantes = res;
      this.formAsignar.patchValue(this.estudiantes);
    });
  }

  asignar(event: Event) {
    event.preventDefault();




    this.cursosService
      .cursosAndEstudiantes(this.formAsignar.value.IdCurso)
      .subscribe((res: any) => {
        this.estudiantesAsignados = res.data;
      });
    this.estudiantesService.getEstudiantes().subscribe((res) => {
      this.estudiantes = res;
    });
    if (this.formAsignar.valid) {
      this.cursosService
        .consultarAsignados(this.formAsignar.value)
        .subscribe((res: any) => {
          if (res.length > 0) {
            this.messageError = 'Usuario ya esta asignado a este curso';
            this.colorError = 'alert-danger';
            this.error = true;
          } else {
            const dataEnviar = {
              IdCurso: this.formAsignar.value.IdCurso,
              IdEstudiante: this.formAsignar.value.IdEstudiante,
            };
            this.cursosService.addNota(dataEnviar).subscribe((res: any) => {
              this.messageError = `Asignacion Exitosa con Id: ${res.Id}`;
              this.colorError = 'alert-success';
              this.error = true;
              this.cursosService
                .cursosAndEstudiantes(this.formAsignar.value.IdCurso)
                .subscribe((res: any) => {
                  this.estudiantesAsignados = res.data;
                });
            });
          }
        });
    }
  }

  buscarPorEstudiante(event: Event) {
    event.preventDefault();
  }

  reset() {
    this.estudiantes = null;
    this.formAsignar.reset();
    this.estudiantesAsignados = null;
  }
}
