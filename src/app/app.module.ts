import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent, ChildOneComponent, ChildTwoComponent, ChildThreeComponent } from './app.component';
import {PortalModule} from '@angular/cdk/portal';

@NgModule({
  imports:      [ BrowserModule, FormsModule, PortalModule ],
  declarations: [ AppComponent, ChildOneComponent, ChildTwoComponent, ChildThreeComponent ],
  bootstrap:    [ AppComponent ],
  entryComponents: [ChildOneComponent, ChildTwoComponent, ChildThreeComponent],
})
export class AppModule { }