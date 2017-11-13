import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public user$ = this.authService.user;

  constructor(private authService: AuthService, private router: Router) { }

  enviarForm(form) {
    const inputValue = form.value;
    this.authService.login(inputValue.email, inputValue.password)
      .subscribe(
      success => this.router.navigate(['/catalogo']),
      error => alert(error.message)
      );
  }

  comprueba(){
    this.authService.isAuthenticated()
      .subscribe(
        success => {if(success != true){
          this.router.navigate(['/login'])
        }},
        error => console.log("error")

      );

  }

}
