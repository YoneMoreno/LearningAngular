import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {AppComponent} from './app.component';
import {ProductListComponent} from './products/product-list.component';
import {ConvertActionBindingResult} from "@angular/compiler/src/compiler_util/expression_converter";
import {ConvertToSpacesPipe} from "./shared/convert-to-spaces.pipe";
import {StarComponent} from "./shared/star.component";
import {HttpClientModule} from "@angular/common/http";
import { ProductDetailComponent } from './products/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
