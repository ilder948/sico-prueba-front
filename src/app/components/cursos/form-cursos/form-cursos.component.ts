import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CursosService } from '../../../services/cursos.service';

@Component({
  selector: 'app-form-cursos',
  templateUrl: './form-cursos.component.html',
  styleUrls: ['./form-cursos.component.css'],
})
export class FormCursosComponent implements OnInit {
  form!: FormGroup;
  Id: string = '';
  curso: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private cursosService: CursosService,
    private formBuilder: FormBuilder
  ) {
    this.buildForm();
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      Id: [''],
      Nombre: ['', [Validators.required]],
      NumeroCreditos: ['', Validators.maxLength(3)],
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.Id = params.Id;
    });
    this.getCurso(this.Id);
  }

  getCurso(Id: string) {
    this.cursosService.getCurso(Id).subscribe((res: any) => {
      this.curso = res;
      this.form.patchValue(this.curso);
    });
  }

  addCurso(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      if (this.form.value.Id) {
        this.updateCurso(this.form.value);
      } else {
        this.cursosService.addCurso(this.form.value).subscribe((res) => {
          this.router.navigate(['cursos']);
        });
      }
    }
  }

  updateCurso(data: any) {
    this.cursosService.updateCurso(data.Id, data).subscribe((res) => {
      this.router.navigate(['cursos']);
    });
  }

  goBack() {
    this.router.navigate(['cursos']);
  }
}
