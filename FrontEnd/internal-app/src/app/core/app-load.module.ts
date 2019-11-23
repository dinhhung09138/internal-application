import { AppLoadService } from './services/app-load.service';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

export function get_settings(appLoadService: AppLoadService) {
  return () => appLoadService.getSetting();
}

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    AppLoadService,
    {
      provide: APP_INITIALIZER,
      useFactory: get_settings,
      deps: [AppLoadService],
      multi: true
    }
  ]
})
export class AppLoadModule { }
