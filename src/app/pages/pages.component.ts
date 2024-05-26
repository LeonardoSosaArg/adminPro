import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [],
})
export class PagesComponent implements OnInit {
  //Setear tema por defecto del SideBar
  public linkTheme = document.querySelector('#theme');
  public defaultThemeUrl: string = './assets/css/colors/default-dark.css';

  ngOnInit(): void {
    const favoriteThemeUrl = localStorage.getItem('theme');
    if (favoriteThemeUrl != null) {
      this.linkTheme?.setAttribute('href', favoriteThemeUrl);
    }
    else this.linkTheme?.setAttribute('href', this.defaultThemeUrl);
  }
}
