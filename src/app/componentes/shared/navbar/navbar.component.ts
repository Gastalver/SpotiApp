import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from "@angular/router"; // Para insertar rutas

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor( private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

}
