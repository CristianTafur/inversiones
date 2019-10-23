import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Proyecto } from '../modelo/Proyecto';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  Url = 'http://localhost:3000/inversiones/proyecto';

  getProyectos(){
    return this.http.get<Proyecto[]>(this.Url);
  }

  getProyectoById(id:number){
    return this.http.get<Proyecto>(this.Url + '/' +id);
  }

  createProyecto(proyecto:Proyecto){
    return this.http.post<Proyecto>(this.Url, proyecto);
  }

  updateProyecto(proyecto:Proyecto){
    return this.http.put<Proyecto>(this.Url + "/" + proyecto.id, proyecto);
  }

  deleteProyecto(proyecto:Proyecto){
    return this.http.delete<Proyecto>(this.Url + "/" + proyecto.id);
  }
}
