import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AjvComponent } from './ajv/ajv.component';
import { AppComponent } from './app.component';
import { DjvComponent } from './djv/djv.component';
import { DynamicModule } from './dynamic/dynamic.module';
import { GeneratorModule } from './generator/generator.module';

@NgModule({
  declarations: [
    AppComponent,
    DjvComponent,
    AjvComponent
  ],
  imports: [
    BrowserModule,
    DynamicModule,
    GeneratorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
