import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {
  form: FormGroup;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private authService: AuthService) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: object | any) => {
      params = JSON.parse(JSON.stringify(params));
      params.userMeta = { email: params.email, _id: params._id , name: params.name, language: params.language};
      Object.preventExtensions(params);
      this.authService.setTokenTimer(params.expiresIn);
      this.authService.saveAuthData(params);
      this.authService.token = params.token
      this.authService.userAuthenticated = true;
      this.authService.authTokenListner.next(true);
      this.router.navigate(['/']);
    });
  }



}
