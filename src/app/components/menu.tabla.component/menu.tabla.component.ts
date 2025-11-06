import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-tabla-component',
  standalone: false,
  templateUrl: './menu.tabla.component.html',
  styleUrl: './menu.tabla.component.css',
})
export class MenuTablaComponent {
  public numeros:Array<number>;
  public numero:number;

  constructor(){
    this.numeros=[];
    this.numero=0;
  }

  ngOnInit(){
    for (let i=0;i<6;i++){
      this.numero= Math.floor(Math.random()*100+1);
      this.numeros.push(this.numero);
    }
  }
}
