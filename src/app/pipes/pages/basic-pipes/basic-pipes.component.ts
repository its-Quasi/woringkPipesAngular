import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-pipes',
  templateUrl: './basic-pipes.component.html',
  styleUrls: ['./basic-pipes.component.css']
})
export class BasicPipesComponent {
  public msg = 'Proof Mesagge'
  public customDate = new Date()
}
