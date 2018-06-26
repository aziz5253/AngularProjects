import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { HttpModule } from '@angular/http';
import { ServersComponent } from './servers/servers.component';
import { Server3Component } from './servers3/server3.component';
@NgModule({
  declarations: [
    AppComponent,ServerComponent, ServersComponent,Server3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
