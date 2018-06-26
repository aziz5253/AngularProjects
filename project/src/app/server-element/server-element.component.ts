import { Component, OnInit,Input, ViewEncapsulation,
   OnChanges,
   SimpleChanges,
   DoCheck,
   AfterContentInit,
   AfterContentChecked,
   AfterViewInit,AfterViewChecked,OnDestroy, ViewChild,ElementRef, 
   ContentChild} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnChanges,OnInit,DoCheck,AfterContentInit,
AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{
  @Input('srvElement') element:{type:string,name:string,content:string};
  @Input() name:String;
  @ViewChild('heading') header:ElementRef;
  @ContentChild('contentParagraph') contentParagraph:ElementRef
 ngOnChanges(changes:SimpleChanges)
 {
  console.log('ngonChanges Called called!');
  console.log(changes);

 }
  constructor() { 
   console.log('constructor called!');
  }

  ngOnInit() {
    console.log('ngOninit called!');
    console.log('Text Content:'+this.header.nativeElement.textContent);
    console.log('Paragrpah Content:'+this.contentParagraph.nativeElement.textContent);
  }
  ngDoCheck()
  {
    console.log('ngDoCheck Called');
  }
ngAfterContentInit()
{
  console.log('ngAfterContentInit Called');
  console.log('Paragrpah Content:'+this.contentParagraph.nativeElement.textContent);
}
ngAfterContentChecked()
{
  console.log('ngAfterContentChecked Called');
}
ngAfterViewInit()
{
  console.log('ngAfterViewInit Called');
  console.log('Text Content:'+this.header.nativeElement.textContent);
}
ngAfterViewChecked()
{
  console.log('ngAfterViewChecked Called');
}
ngOnDestroy()
{
  console.log('ngOnDestroy Called');
}
}
