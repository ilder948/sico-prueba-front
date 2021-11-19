import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(private http: HttpClient) { }

  getCursos() {
    return this.http.get(`${environment.urlBackend}/cursos`)
  }

  getCurso(Id: string) {
    return this.http.get(`${environment.urlBackend}/cursos/${Id}`)
  }

  addCurso(curso: Partial<any>) {
    return this.http.post(`${environment.urlBackend}/cursos`, curso)
  }

  updateCurso(Id: string, curso: Partial<any> ) {
    return this.http.put(`${environment.urlBackend}/cursos/${Id}`, curso)
  }

  deleteCurso(Id: string) {
    return this.http.delete(`${environment.urlBackend}/cursos/${Id}`)
  }

  consultarAsignados (data: Partial<any>) {
    return this.http.post(`${environment.urlBackend}/notas/asignados`, data)
  }

  cursosAndEstudiantes (curso: string) {
    return this.http.get(`${environment.urlBackend}/notas?curso=${curso}`)
  }

  addNota (data: any) {
    return this.http.post(`${environment.urlBackend}/notas`, data)
  }

}
