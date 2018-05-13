import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from "@ng-bootstrap/ng-bootstrap";
import { HttpClient} from "@angular/common/http"; // Servicio


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
public images:string[] =[
  '../../../assets/img/slide-1.jpg',
  '../../../assets/img/slide-2.jpg',
  '../../../assets/img/slide-3.jpg',
]
  constructor(private _ngbCarouselConfig:NgbCarouselConfig ) {
  this._ngbCarouselConfig.interval = 3000;
  this._ngbCarouselConfig.keyboard = true;
  }

  ngOnInit() {
  }

}
