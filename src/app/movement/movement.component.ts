import { Component, Input, OnInit } from '@angular/core';
import { Movement } from '../models/Movement';
import { environment } from '../../environments/environment';

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
