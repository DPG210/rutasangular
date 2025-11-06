import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-tabla-component',
  standalone: false,
  templateUrl: './menu.tabla.component.html',
  styleUrl: './menu.tabla.component.css',
})
export class MenuTablaComponent {
  public numeros:Array<number>;
  

  constructor(){
    this.numeros=[];
    
  }

  ngOnInit(){
    for (let i=0;i<6;i++){
      let numero= Math.floor(Math.random()*100+1);
      this.numeros.push(numero);
    }
  }
}
