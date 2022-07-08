import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../_models';
import { AccountService } from '../_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    user: User;

    constructor(private accountService: AccountService,private _router: Router) {
        this.user = this.accountService.userValue;
    }
    navigateToFirst() {
        this._router.navigate(['employees'])
      }
}