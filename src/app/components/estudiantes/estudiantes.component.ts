import { Component, OnInit } from '@angular/core';
import { EstudiantesService } from '../../services/estudiantes.service'

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {

  title: string = 'Estudiantes'
  estudiantes: any = []
  error: boolean = false
  messageError: string = ''
  colorError: string = ''

  constructor(private estudiantesService: EstudiantesService) { }

  ngOnInit(): void {
    this.getEstudiantes ()
  }

  getEstudiantes () {
    this.estudiantesService.getEstudiantes()
    .subscribe(res => {
      this.estudiantes = res
    })
  }

  eliminarEstudiante(Id: string) {
    this.estudiantesService.eliminarEstudiante(Id)
    .subscribe((res: any) => {
      this.getEstudiantes()
      if (res.error) {
        this.error = true
        this.messageError = `Error al eliminar estudiante ${res.error.name}`
        this.colorError = `alert-danger`
      } else {
        this.error = true
        this.messageError = `Estudiante Eliminado`
        this.colorError = `alert-success`
      }
    })
  }

}
