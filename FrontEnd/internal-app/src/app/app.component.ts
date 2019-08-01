import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map, mergeMap } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private route: Router,
    private activateRoute: ActivatedRoute,
    private titleService: Title
  ) {

  }

  ngOnInit() {
     this.route.events.pipe(filter((event) => event instanceof NavigationEnd))
                      .pipe(map(() => this.activateRoute))
                      .pipe(map((route) => {
                        while (route.firstChild) { route = route.firstChild; }
                        return route;
                      }))
                      // .pipe(filter((route) => route.outlet === 'primary'))
                      .pipe(mergeMap((route) => route.data))
                      .subscribe((event) => this.titleService.setTitle(event.title));
  }

  onActive(event: any) {
    console.log('active');
    console.log(event);
  }

  onDeActive(event: any) {
    console.log('Deactive');
    console.log(event);
  }
}
