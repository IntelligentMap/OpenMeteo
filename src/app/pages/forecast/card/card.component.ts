import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-forecast-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() place: String; // Место
  @Input() time: String; // Дата, время
  @Input() temperature: String; // Температура
  @Input() humidity: String; // Влажность
  @Input() wind: String; // ветер

  // Ветер

  constructor() { }

  ngOnInit() {
  }

}
