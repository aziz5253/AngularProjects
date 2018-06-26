import { Component ,EventEmitter,Output} from '@angular/core'

@Component({
selector:'app-header',
templateUrl:'./header.component.html'
})
export class HeaderComponent{
    @Output()featureSelected=new EventEmitter<String>();
    onFeatureSelected(feature:String)
    {
        this.featureSelected.emit(feature);
    }
}