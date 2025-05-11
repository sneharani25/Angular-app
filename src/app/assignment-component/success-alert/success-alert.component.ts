import { Component } from '@angular/core';
import {servers} from '../../../assets/dummy-server'

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrl: './success-alert.component.css'
})
export class SuccessAlertComponent {

  // It will give the random index value from 0 to the length of the server array.
  index : number = Math.floor(Math.random() * servers.length);
  selectedServer = servers[this.index];

}
