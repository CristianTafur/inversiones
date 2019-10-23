import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import { Proyecto } from 'src/app/modelo/Proyecto';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {

  proyecto:Proyecto = new Proyecto(); 

  constructor(private router:Router, private service:ServiceService) {  }

  ngOnInit() {
    this.datosEditar();
  }

  updateForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    monto: new FormControl('', Validators.required)
  });

  datosEditar(){
    let id = localStorage.getItem("id");
    this.service.getProyectoById(+id)
    .subscribe(data=>{
      this.proyecto = data[0];
      console.log(this.proyecto);
    })
  }
  
  Actualizar(proyecto:Proyecto){
    this.service.updateProyecto(proyecto)
    .subscribe(data=>{
      this.proyecto=data;
      alert("Proyecto Actualizado!..");
      this.router.navigate(['list-proyecto'])
    })
  }
}
