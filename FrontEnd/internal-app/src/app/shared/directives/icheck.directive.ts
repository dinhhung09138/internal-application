import { Directive, ElementRef } from '@angular/core';
import { } from 'jquery';
import { } from 'icheck';



@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[icheck]',
  // tslint:disable-next-line: no-host-metadata-property
  host: {

  },
})

export class ICheckDirective {
  $: any;
    constructor(el: ElementRef) {
        console.log('icheck');
        this.$(el.nativeElement).iCheck({
            checkboxClass: 'icheckbox_square-aero',
            radioClass: 'iradio_square-aero'
        });
    }
}
