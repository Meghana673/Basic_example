import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Registration } from '../data/register';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent {
  registration:Registration= {
    name:'Alice',
    notification:true,
    alerts:true,
    gender:'Female',
    subscriptionType:'Anual',
    notes:'Some notes'
  };
  name!: "ana";
  onSubmit(form:NgForm)
  {
    console.log('onSubmit',form.valid);
  }
  canDeactivate(): boolean {
    const confirmResult = confirm('Are you sure you want to leave this page ? ');
    if (confirmResult === true) {
      return true;
    } else {
      return false;
    }
  
    }
}
