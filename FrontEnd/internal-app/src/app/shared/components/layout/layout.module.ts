import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AccountComponent } from './navigation/account/account.component';
import { NotificationComponent } from './navigation/notification/notification.component';
import { EmailComponent } from './navigation/email/email.component';
import { TaskComponent } from './navigation/task/task.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';



@NgModule({
  declarations: [
    LayoutComponent,
    NavigationComponent,
    AccountComponent,
    NotificationComponent,
    EmailComponent,
    TaskComponent,
    LeftSidebarComponent,
    FooterComponent,
    ContentComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
  ]
})
export class LayoutModule { }
