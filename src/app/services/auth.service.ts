import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';
import { map, filter, scan } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1';
  private apiKey = 'AIzaSyA-uuaNQk7a23DmobrLr-LwT9uaSRWhDwg';

  userToken: string;

  constructor( private http: HttpClient) { }

  logout() {
    localStorage.removeItem('token');
  }

  login( usuario: UsuarioModel) {
    const authData = {
      ...usuario,
      returnSecureToken: true
    };

    return this.http.post(
      `${ this.url }/accounts:signInWithPassword?key=${ this.apiKey }`,
      authData
    ).pipe(
      map( resp => {
        this.guardarToken( resp['idToken'] );
        return resp;
      })
    );
  }

  nuevoUsuario( usuario: UsuarioModel ) {

    const authData = {
      ...usuario,
      returnSecureToken: true
    };

    return this.http.post(`${ this.url }/accounts:signUp?key=${ this.apiKey }`,
    authData).pipe(map( resp => {
      this.guardarToken( resp['idToken'] );
      return resp;
    })
    );
  }

  private guardarToken( idToken: string ) {

    this.userToken = idToken;
    localStorage.setItem('token', idToken);

    let hoy = new Date();
    hoy.setSeconds( 3600 );

    localStorage.setItem('expira', hoy.getTime().toString() );


  }
}
