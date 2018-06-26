import {Component} from '@angular/core';
@Component({
selector:'app-server3',
templateUrl:'./server3.component.html'


})
export class Server3Component{
serverName='CustomServer';
serverId=12;
allowCreateServer=false;

constructor() { 
    setTimeout(()=>{
      this.allowCreateServer=true;
    },2000);

    
  }

serverCreationStatus='No server was created';
onEventCreate()
{
this.serverCreationStatus="Server Created Successfully";
}
}