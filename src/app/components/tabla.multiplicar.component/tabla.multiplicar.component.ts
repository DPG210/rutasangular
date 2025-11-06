import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-tabla.multiplicar.component',
  standalone: false,
  templateUrl: './tabla.multiplicar.component.html',
  styleUrl: './tabla.multiplicar.component.css',
})
export class TablaMultiplicarComponent {
  public numero:number;
  public resultados:Array<number>

  constructor(private _activateRouter:ActivatedRoute){
    this.numero=0;
    this.resultados=[];
  }
  generarTabla():void{
    let num=this.numero;
    let total=0;
    let aux=[];

    for(let i=0;i<=10;i++){
      total=num*i;
      aux.push(total)
    }
    this.resultados=aux
  }
  ngOnInit():void{
    this._activateRouter.params.subscribe((parametros:Params)=>{
      this.numero=parseInt(parametros['num']);
      this.generarTabla();
    })
  }
}
