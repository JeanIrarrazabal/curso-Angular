import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent{

heroes: string[] = ['Spiderman','Iroman', 'Hulk', 'Thor','Capitan America' ];
hBorrado:string = ''

borrarHeroe() {
  this.hBorrado = this.heroes.pop() || '' ;
 
}

}
