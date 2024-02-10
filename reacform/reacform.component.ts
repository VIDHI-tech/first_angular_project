import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reacform',
  templateUrl: './reacform.component.html',
  styleUrls: ['./reacform.component.scss']
})
export class ReacformComponent {
 
  formreact: FormGroup= new FormGroup({
    name: new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
    }),

    email: new FormControl(''),
    password: new FormControl(''),

    address: new FormGroup({
      state: new FormControl(''),
      city: new FormControl(''),
    })
  })
  gfdg(){
    console.log(this.formreact.value);
    
  }


}
