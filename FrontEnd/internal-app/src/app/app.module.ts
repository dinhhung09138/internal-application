import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './modules/shared/layout/layout.component';
import { LeftSidebarComponent } from './modules/shared/left-sidebar/left-sidebar.component';
import { NavigationBarComponent } from './modules/shared/navigation-bar/navigation-bar.component';
import { FooterComponent } from './modules/shared/footer/footer.commponent';
import { MessageComponent } from './modules/shared/message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LeftSidebarComponent,
    NavigationBarComponent,
    FooterComponent,
    MessageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
