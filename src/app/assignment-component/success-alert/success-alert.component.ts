import { Component, computed, signal } from '@angular/core';
import {servers} from '../../../assets/dummy-server'

// It will give the random index value from 0 to the length of the server array.
const index : number = Math.floor(Math.random() * servers.length); 
@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrl: './success-alert.component.css'
})
  
export class SuccessAlertComponent {
  // initializing a signal
selectedServer = signal(servers[index]);
  
price = signal(100);
weight = signal(5);
 
// computed property
total = computed(() => {
  return this.price() * this.weight(); });

constructor() {
 console.log(this.total());
 this.price.set(200);
 console.log(this.total());
}
  onSelectServer(){
    // updating a signal
    this.selectedServer.set(servers[index]);
  }
}
