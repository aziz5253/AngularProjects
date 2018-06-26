import { Directive, Renderer2, OnInit,ElementRef,HostListener,Input,HostBinding} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input()defaultColor:string='transparent';
  @Input('appBetterHighlight')highLightColor:string='blue';
  @HostBinding('style.backgroundColor') backgroundColor:string;
  @HostListener('mouseenter')mouseover(eventData:Event)
  {
    //this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue'); 
    this.backgroundColor=this.highLightColor;
  }
  @HostListener('mouseleave')mouseleave(eventData:Event)
  {
    //this.renderer.setStyle(this.elRef.nativeElement,'background-color','transaparent'); 
   this.backgroundColor=this.defaultColor;
  } 
  constructor(private elRef:ElementRef,private renderer:Renderer2) { }
ngOnInit()
{
  this.backgroundColor=this.defaultColor;
 // this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');
}
}
