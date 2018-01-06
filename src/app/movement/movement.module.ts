import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovementComponent } from './movement.component';
import { MatButtonModule, MatCardModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  declarations: [MovementComponent],
  exports: [MovementComponent]
})
export class MovementModule {
}
