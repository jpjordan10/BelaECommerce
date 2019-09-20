import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  usuario: UsuarioModel;

  constructor( private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.usuario = new UsuarioModel();
  }

  onSubmit( form: NgForm ) {
    if ( form.invalid ) { return; }

    this.auth.nuevoUsuario( this.usuario )
    .subscribe( resp => {
      this.router.navigateByUrl('/product/list');
      console.log(resp);
    }, (err) => {
      console.log(err.error.error.message);
    });

  }

}
