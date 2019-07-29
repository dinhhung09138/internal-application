import { Component, ViewChildren } from '@angular/core';
import { OnInit } from '@angular/core';
import { jquery } from 'jquery';
import { ICheckOptions } from 'icheck';
import { ICheckDirective } from 'src/app/shared/directives/icheck.directive';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: []
})

export class TestComponent implements OnInit {
  @ViewChildren(ICheckDirective) icheck: ICheckDirective;

  checked = true;
  // icheck: jquery;

  constructor() { }

  ngOnInit() {
    // const iCheckOptions: ICheckOptions = {
    //   checkboxClass: 'icheckbox_square-blue',
    //   radioClass: 'iradio_square-blue',
    //   increaseArea: '20%'
    // };
    // this.icheck = jquery('input').icheck(iCheckOptions);
  }


}
