import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'my-app',
  template:
    `
      <div class="container" style="margin-top: 40px;">
        <form [formGroup]="loginForm" class="col-xs-12">
          <div class="col-md-6 col-md-offset-3">
            <h4 align="center">Log ind med dit telefonnummer</h4>
            <div class="input-group input-group-lg">
              <span class="input-group-addon"
                    id="DK-landekode">+45</span>
              <input id="telefonNummer"
                     [formControl]="loginForm.controls['telefonNummer']"
                     type="text" 
                     class="form-control" 
                     placeholder="Indtast dit telefonnummer" 
                     aria-describedby="DK-landekode">
              <span class="input-group-addon" [style.color]="loginForm.valid ? 'green' : 'orange'">
                     <i class="fa fa-check" aria-hidden="true"></i></span>  
            </div>
            <button type="button" 
                    (click)="submitTelefonNummer(loginForm.value)"
                    class="btn btn-success btn-lg col-xs-12"
                    style="margin-top: 5px;">KOM I GANG</button>
          </div>
        </form>
      </div>
    `
})
export class AppComponent implements OnInit{
  
  public loginForm : FormGroup;
  
  constructor(private formBuilder: FormBuilder){
  }
  
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      'telefonNummer' : [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.pattern('^[0-9]*$'),
          Validators.maxLength(8)])]
    })
  }
  
  submitTelefonNummer(value: any){
    console.log(value);
  }
}
