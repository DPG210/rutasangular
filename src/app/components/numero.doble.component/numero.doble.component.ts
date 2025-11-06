import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-numero-doble-component',
  standalone: false,
  templateUrl: './numero.doble.component.html',
  styleUrl: './numero.doble.component.css',
})
export class NumeroDobleComponent implements OnInit {
  public doble:number;
  public numero!:number;

  constructor(private _activateRouter: ActivatedRoute,
    private _router:Router
  ){
    
    this.doble=0;
  }

  ngOnInit(): void {
    //AQUI ES DONDE NOS SUBSCRIBIMOS A LOS PARAMETROS
    this._activateRouter.params.subscribe((parametros:Params)=>{
      //DENTRO DE Params ES DONDE RECIBIMOS LOS PARAMETROS POR SU :name
      //LA SINTAXIS PARA RECUPERARLOS ES params ['PARAMETER NAME]
      // EN ESTE EJEMPLO, EL PARAMETRO ES OPCIONAL
      if(parametros['numero']!=null){
        //EL PARAMETRO SIEMPRE SON STRING
        this.numero = parseInt(parametros['numero']);
        this.doble = this.numero*2;
      }
    })
  }
  redirect(num:number):void{
    this._router.navigate(['/numerodoble', num]);
  }

  goToHome():void{
    this._router.navigate(['/']);
  }

}
