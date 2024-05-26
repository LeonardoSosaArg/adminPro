import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrl: './account-settings.component.css',
})
export class AccountSettingsComponent implements OnInit {
  public linkTheme = document.querySelector('#theme');

  ngOnInit() {}

  changeTheme(color: string) {
    const url = `./assets/css/colors/${color}.css`;

    this.linkTheme?.setAttribute('href', url);
    localStorage.setItem('theme', url);
  }
}
