import { Component } from '@angular/core';

@Component({
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.scss'
})
export class ProductoComponent {
  products:any[]=[{id:0,nombre:"Guapo",precio:394.96,categoria_id:5,stock: 12},
    {id:1,nombre:"Guapo",precio:394.96,categoria_id:5,stock: 12},
    {id:2,nombre:"Guapo",precio:394.96,categoria_id:5,stock: 12},
    {id:3,nombre:"Guapo",precio:394.96,categoria_id:5,stock: 12},
    {id:4,nombre:"Guapo",precio:394.96,categoria_id:5,stock: 12},
    {id:5,nombre:"Guapo",precio:394.96,categoria_id:5,stock: 12},
    {id:6,nombre:"Guapo",precio:394.96,categoria_id:5,stock: 12},
    {id:7,nombre:"Guapo",precio:394.96,categoria_id:5,stock: 12},
    {id:8,nombre:"Guapo",precio:394.96,categoria_id:5,stock: 12},
    {id:9,nombre:"Guapo",precio:394.96,categoria_id:5,stock: 12},
    {id:10,nombre:"Guapo",precio:394.96,categoria_id:5,stock: 12},
    {id:11,nombre:"Guapo",precio:394.96,categoria_id:5,stock: 12},
    {id:12,nombre:"Guapo",precio:394.96,categoria_id:5,stock: 12},
    {id:13,nombre:"Guapo",precio:394.96,categoria_id:5,stock: 12},
    {id:14,nombre:"Guapo",precio:394.96,categoria_id:5,stock: 12},
    {id:15,nombre:"Guapo",precio:394.96,categoria_id:5,stock: 12}
  ];
  cols:any[]=[]




  
  openNew(){

  }
  
  editProduct(prod:any){

  }

  deleteProduct(prod:any){

  }


}
