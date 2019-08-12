import { Injectable, TemplateRef } from '@angular/core';

@Injectable({ providedIn: 'root'})
export class MessageService {
  toasts: any[] = [];

  success(msg) {
    console.log(msg);
    this.show(msg, { messageType: 'success', className: 'bg-success text-light minwidth-150', delay: 3000 });
  }

  warning(msg) {
    this.show(msg, { messageType: 'warning', className: 'bg-warning text-light minwidth-150', delay: 3000 });
  }

  error(msg) {
    this.show(msg, { messageType: 'error', className: 'bg-danger text-light minwidth-150', delay: 3000 });
  }

  private show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
    this.toasts.push({ textOrTpl, ...options });
  }

  remove(toast: any) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }
}
