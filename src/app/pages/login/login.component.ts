import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../../models/login';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin : FormGroup;
  loginInterface : Login;

  constructor(private formBuilder : FormBuilder, private serviceLogin: LoginService, private router : Router) {}

  ngOnInit() {
    this.createFormLogin();
  }

  createFormLogin(){
    this.formLogin = this.formBuilder.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  loginSerasaPortal(){
    this.serviceLogin.consultaLogin(this.formLogin.value.user, this.formLogin.value.password).subscribe((res:any) => {
      this.loginInterface = res;
        this.router.navigate(["/vendedor"])
    }), error => {
      alert("Erro interno do servidor")
    }
  }

}
