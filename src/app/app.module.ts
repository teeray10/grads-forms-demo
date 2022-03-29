import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { TemplateDrivenComponent } from './components/template-driven/template-driven.component';
import { ReactiveComponent } from './components/reactive/reactive.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { BasicComponent } from './components/template-driven/basic/basic.component';
import { HrComponent } from './components/template-driven/hr/hr.component';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { ReactiveHrComponent } from './components/reactive/reactive-hr/reactive-hr.component';
import { ReactiveBasicComponent } from './components/reactive/reactive-basic/reactive-basic.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenComponent,
    ReactiveComponent,
    BasicComponent,
    HrComponent,
    ReactiveHrComponent,
    ReactiveBasicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzTabsModule,
    NzFormModule,
    ReactiveFormsModule,
    NzCheckboxModule,
    NzButtonModule,
    NzSelectModule,
    NzInputModule,
    NzRadioModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
