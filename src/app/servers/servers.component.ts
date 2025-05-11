import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent implements OnInit {
  // allowedNewServer = false;
  // serverCreationStatus='No server was created'
  // serverName='Test';
  userName='';
  buttonClicked : boolean = true;
  constructor(){
    // setTimeout(()=> {
    //   this.allowedNewServer = true;
    // },2000);
  }

  get isButtonDisabled(): boolean {
    return this.userName.trim() === '';
  }

  ngOnInit() {
    
  }
  // onCreateServer(){
  //   this.serverCreationStatus='Server was created with name'+ this.serverName
  // }

  // onUpdateServerName(event:any){
  //   this.serverName=(<HTMLInputElement>event.target).value;
  // }

  OnClicked(){
    this.userName='';
  }
}
