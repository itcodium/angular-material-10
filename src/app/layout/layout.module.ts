import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';


import { MatSidenavModule } from '@angular/material/sidenav';
import { MenuApp } from './menu.service';

import { MatButtonModule } from '@angular/material/button';

@NgModule({
    imports: [
        CommonModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatSidenavModule,
        RouterModule
    ],
    exports: [
        FooterComponent,
        HeaderComponent,
        SidebarComponent,
        MenuComponent
    ],
    declarations: [
        FooterComponent,
        HeaderComponent,
        SidebarComponent,
        MenuComponent
    ],
    providers: [MenuApp]
})
export class LayoutModule { }