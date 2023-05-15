import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';

@Injectable({
  providedIn: 'root'
})
export class CandeactivateGuard implements CanDeactivate<TemplateFormsComponent> {
  canDeactivate(component:TemplateFormsComponent)
  {
    if (component.canDeactivate) {
      return component.canDeactivate();
    }
    // if(component.name)
    //   return window.confirm('You have unsaved changes');
    return true;
  }

}
