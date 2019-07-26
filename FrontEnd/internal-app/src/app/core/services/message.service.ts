import { Injectable, TemplateRef } from '@angular/core';

@Injectable({ providedIn: 'root'})
export class MessageService {
  toasts: any[] = [];

  success(msg) {
    console.log(msg);
    this.show(msg, { classname: 'bg-success text-light minwidth-150', delay: 40000 });
  }

  warning(msg) {
    this.show(msg, { classname: 'bg-warning text-light minwidth-150', delay: 40000 });
  }

  error(msg) {
    this.show(msg, { classname: 'bg-danger text-light minwidth-150', delay: 40000 });
  }

  private show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
    this.toasts.push({ textOrTpl, ...options });
  }

  remove(toast: any) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }
}
