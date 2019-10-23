import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../service/service.service';
import { Proyecto } from 'src/app/modelo/Proyecto';

@Component({
  selector: 'app-list-proyecto',
  templateUrl: './list-proyecto.component.html',
  styleUrls: ['./list-proyecto.component.css']
})
export class ListProyectoComponent implements OnInit {

  proyectos:Proyecto[];

  constructor(private service:ServiceService, private router:Router ) { }

  ngOnInit() {
    this.service.getProyectos()
    .subscribe(datos=>{
      this.proyectos=datos
    })
  }

  Editar(proyecto:Proyecto){
    localStorage.setItem("id", proyecto.id.toString());
    this.router.navigate(['edit-proyecto']);
  }

  Eliminar(proyecto:Proyecto){
    this.service.deleteProyecto(proyecto)
    .subscribe(data=>{
      this.proyectos=this.proyectos.filter(p=>p!==proyecto);
      alert('Proyecto Eliminado..');
    })
  }

}
