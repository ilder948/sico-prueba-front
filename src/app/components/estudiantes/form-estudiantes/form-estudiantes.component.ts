import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { EstudiantesService } from '../../../services/estudiantes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-estudiantes',
  templateUrl: './form-estudiantes.component.html',
  styleUrls: ['./form-estudiantes.component.css'],
})
export class FormEstudiantesComponent implements OnInit {
  form!: FormGroup;
  Id: string = '';
  Estudiante: any;
  error: boolean = false
  messageError: string = ''
  colorError: string = ''

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private estudiantesService: EstudiantesService,
    private formBuilder: FormBuilder
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.Id = params.Id;
    });
    this.getEstudiante(this.Id);
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      Id: [''],
      Nombre1: ['', [Validators.required]],
      Nombre2: [''],
      Identificacion: ['', [Validators.required,  ]],
      TipoIdentificacion: ['', [Validators.required, Validators.maxLength(2)]],
      Apellido1: ['', [Validators.required]],
      Apellido2: [''],
      Celular: [''],
      Email: [''],
      Direccion: [''],
      Ciudad: ['', [Validators.required]],
    });
  }

  addEstudiante(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      if (this.form.value.Id) {
        this.updateEstudiante(this.form.value)
      } else {
        this.estudiantesService.addEstudiante(this.form.value)
          .subscribe(res => {
            this.router.navigate(['/estudiantes']);
          });
      }
    } else {
        this.error = true
        this.messageError = `Error al guardar estudiante`
        this.colorError = `alert-danger`
    }
  }

  updateEstudiante(estudiante: any) {
    this.estudiantesService.updateEstudiante(estudiante.Id, estudiante)
    .subscribe(res => {
      this.router.navigate(['estudiantes']);
    })
  }

  getEstudiante(Id: string) {
    this.estudiantesService.getEstudiante(Id).subscribe((res: any) => {
      this.Estudiante = res.data;
      this.form.patchValue(this.Estudiante);
    });
  }

  goBack() {
    this.router.navigate(['estudiantes']);

  }
}
