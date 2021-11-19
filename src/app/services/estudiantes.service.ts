import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  constructor(private http: HttpClient) { }

  getEstudiantes() {
    return this.http.get(`${environment.urlBackend}/estudiantes`)
  }

  addEstudiante(estudiante: Partial<any>) {
    return this.http.post(`${environment.urlBackend}/estudiantes`, estudiante )
  }

  getEstudiante(Id: String) {
    return this.http.get(`${environment.urlBackend}/estudiantes/${Id}`)
  }

  updateEstudiante(Id: string, estudiante: Partial<any>) {
    return this.http.put(`${environment.urlBackend}/estudiantes/${Id}`, estudiante )
  }

  eliminarEstudiante(Id: string) {
    return this.http.delete(`${environment.urlBackend}/estudiantes/${Id}`)
  }

  listarCursosByEstudiante(Id: string) {
    return this.http.get(`${environment.urlBackend}/notas/estudiantes/${Id}`)
  }

  detalleEstudianteCurso(Id: string) {
    return this.http.get(`${environment.urlBackend}/notas/${Id}`)
  }

  updateEstudianteCurso(data: Partial<any>) {
    return this.http.put(`${environment.urlBackend}/notas/${data.Id}`, data)
  }

}
