import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioModel } from '../../models/usuario.model';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();

  constructor( private auth: AuthService, private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('email')) {
      this.usuario.email = localStorage.getItem('email');
    }
  }

  login( form: NgForm) {
    // if ( form.invalid ) { return; }

    // this.auth.login( this.usuario )
    // .subscribe( resp => {
    //   //this.router.navigateByUrl('/product');
    //   console.log(resp);
    // }, (err) => {
    //   console.log(err.error.error.message);
    // });
  }
}
