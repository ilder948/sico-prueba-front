import { Component, OnInit } from '@angular/core';
import { CursosService } from '../../services/cursos.service'

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: any


  constructor(private cursosService: CursosService) { }

  ngOnInit(): void {
    this.getCursos()
  }

  getCursos() {
    this.cursosService.getCursos()
    .subscribe(res => {
      this.cursos = res
    })
  }

  eliminarCurso(Id: string) {
    this.cursosService.deleteCurso(Id)
    .subscribe(res => {
      this.getCursos()
    })
  }
}
