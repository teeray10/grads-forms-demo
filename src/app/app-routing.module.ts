import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateDrivenComponent } from './components/template-driven/template-driven.component';
import { ReactiveComponent } from './components/reactive/reactive.component';

const routes: Routes = [
  { path: 'template-driven', component: TemplateDrivenComponent },
  { path: 'reactive', component: ReactiveComponent },
  { path: '', redirectTo: '/template-driven', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
