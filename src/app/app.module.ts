import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { core } from '@angular/compiler';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { AssignmentComponentComponent } from './assignment-component/assignment-component.component';
import { WarningAlertComponent } from './assignment-component/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './assignment-component/success-alert/success-alert.component';
import { AssignementDirectivesComponent } from './assignement-directives/assignement-directives.component';
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    AssignmentComponentComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    AssignementDirectivesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
