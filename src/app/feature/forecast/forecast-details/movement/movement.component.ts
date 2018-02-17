import { Component, Input, OnInit } from '@angular/core';
import { environment } from '@env/environment';
import { Movement } from '@app/feature/forecast/models/Movement';

@Component({
  selector: 'app-movement',
  templateUrl: './movement.component.html',
  styleUrls: ['./movement.component.scss']
})
export class MovementComponent implements OnInit {

  @Input()
  public movement: Movement;
  public devise: string = environment.devise;

  constructor() {
  }

  public ngOnInit(): void {
  }

}
