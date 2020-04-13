import { Component, OnInit, ViewChild, ElementRef, Injector, Input, ComponentRef } from '@angular/core';
import { ComponentPortal, DomPortalHost } from '@angular/cdk/portal';
import { createDomPortalHost } from './utils';


@Component({
  selector: 'my-app',
  template: `
    <button (click)="onClickAddRandomChild()">Click to add random child component</button>
    <div #portalHost></div>
  `
})
export class AppComponent {

  portalHost: DomPortalHost;
  @ViewChild('portalHost') elRef: ElementRef;
  readonly components = [ChildOneComponent, ChildTwoComponent, ChildThreeComponent];

  constructor(readonly injector: Injector) {
  }

  ngOnInit() {
    this.portalHost = createDomPortalHost(this.elRef, this.injector);
  }

  onClickAddRandomChild() {
    const randomChildComponent = this.components[0];
    const myPortal = new ComponentPortal(randomChildComponent);
    this.portalHost.detach(); // remove previously added component if needed
    const componentRef = this.portalHost.attach(myPortal);
    setTimeout(() => componentRef.instance.myInput = '> This is data passed from AppComponent <', 1000);
    // ... if we had an output called 'myOutput' in a child component, this is how we would receive events...
    // this.componentRef.instance.myOutput.subscribe(() => ...);
  }
}

@Component({
  selector: 'app-child-one',
  template: `<p>I am child one. <strong>{{myInput}}</strong></p>`
})
export class ChildOneComponent {
  @Input() myInput = '';
}

@Component({
  selector: 'app-child-two',
  template: `<p>I am child two. <strong>{{myInput}}</strong></p>`
})
export class ChildTwoComponent {
  @Input() myInput = '';
}

@Component({
  selector: 'app-child-three',
  template: `<p>I am child three. <strong>{{myInput}}</strong></p>`
})
export class ChildThreeComponent {
  @Input() myInput = '';
}
