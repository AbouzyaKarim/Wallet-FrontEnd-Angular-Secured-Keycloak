import { Component, OnInit } from '@angular/core';
import {SecurityService} from "../services/security.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public secService : SecurityService) { }

  public async ngOnInit() {

  }

  onLogout() {
    this.secService.kcService.logout(window.location.origin);
  }

  public async getToken() {
  }

  async login(){
    await this.secService.kcService.login({
      redirectUri: window.location.origin
    })
  }
}
