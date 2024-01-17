import { Component, ɵallowSanitizationBypassAndThrow } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-uncommon-pipes',
  templateUrl: './uncommon-pipes.component.html',
  styleUrls: ['./uncommon-pipes.component.css']
})
export class UncommonPipesComponent {
  name = 'Felipe'
  gender  : 'male'|'female'  = 'male'
  switchGender = false
  genderMap = {
    'male' : 'invitarlo',
    'female' : 'invitarla'
  }

  changePerson() : void {
    if(this.switchGender) {
      this.name = 'Felipe'
      this.gender = 'male'
    } else {
      this.name = 'Daniela'
      this.gender = 'female'
    }
    this.switchGender = !this.switchGender
  }


  // prular pipe
  clients = ['felipe', 'daniela', 'marco', 'carlos', 'mario', 'lupe', 'marcela']
  clientsMap = {
    '=0' : 'No tenemos clientes esperando',
    '=1' : 'Tenemos un cliente esperando',
    'other' : 'Tenemos # clientes esperando'
  }
  removeCLient() : void {
    this.clients.pop()
  }
  // json pipe
  person = {
   name : 'Felipe',
   age : '23',
   nickname : 'Quasi'
  }

  timer = interval(2000)
}
