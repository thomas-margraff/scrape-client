import { AuthService } from '@services/auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
 } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.auth.isAuthenticated) {
      if (req.method === 'POST') {
        req = req.clone({
          withCredentials: true,
          headers: req.headers
                    .set( 'Authorization', 'Bearer ' + this.auth.authToken)
                    .set( 'Content-Type', 'application/json')
        });
      } else {
        req = req.clone({
          withCredentials: true,
          headers: req.headers.set( 'Authorization', 'Bearer ' + this.auth.authToken)
        });
      }
    } else {
      // nav to login page
    }

    return next.handle(req);
  }

}
