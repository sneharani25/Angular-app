import { Component } from '@angular/core';

@Component({
  selector: 'app-assignement-directives',
  templateUrl: './assignement-directives.component.html',
  styleUrl: './assignement-directives.component.css'
})
export class AssignementDirectivesComponent {
  displayButton: boolean = true;
  buttonClicked = [];
  count =0;
  isCountGreaterThanFour : boolean = false;

  togglePara(){
    this.count++;
    this.buttonClicked.push(this.count);
    console.log(this.buttonClicked);
    this.isCountGreaterThanFour = this.count>4 ? true : false;
    // this.displayButton = this.displayButton === true ? false : true; 
    this.displayButton = !this.displayButton;
  }

  // addColor(){
  //   if(this.count >4){
       
  //   }
  // }

}
