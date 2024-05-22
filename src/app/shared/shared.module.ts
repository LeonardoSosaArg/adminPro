import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NopagefoundComponent } from '../pages/nopagefound/nopagefound.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NopagefoundComponent,
    BreadcrumbsComponent,
    SidebarComponent,
    HeaderComponent
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    NopagefoundComponent,
    BreadcrumbsComponent,
    SidebarComponent,
    HeaderComponent
  ],
})
export class SharedModule {}
