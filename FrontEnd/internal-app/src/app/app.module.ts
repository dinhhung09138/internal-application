import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule, NgbModalModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './modules/shared/components/layout/layout.component';
import { LeftSidebarComponent } from './modules/shared/components/left-sidebar/left-sidebar.component';
import { NavigationBarComponent } from './modules/shared/components/navigation-bar/navigation-bar.component';
import { FooterComponent } from './modules/shared/components/footer/footer.commponent';
import { MessageComponent } from './modules/shared/components/message/message.component';
import { RecruitmentModule } from './modules/recruitment/recruitment.module';

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
    HttpClientModule,
    RecruitmentModule,
    NgbModule,
    NgbModalModule,
    AppRoutingModule
  ],
  providers: [
    NgbActiveModal
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
