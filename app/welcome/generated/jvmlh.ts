
import {Component} from '@angular/core'

@Component({
  selector: 'd-jvmlh',
  template: `
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for Jvmlh</span>
    <div (click)="doNothing($event)"></div>
    `,
})
export class Jvmlh {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
