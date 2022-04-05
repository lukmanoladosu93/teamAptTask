import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainViewComponent } from './layouts/main-view/main-view.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: MainViewComponent,
  },
  {
    path: 'analytics',
    component: MainViewComponent,
  },
  {
    path: 'projects',
    component: MainViewComponent,
  },
  {
    path: 'tracking',
    component: MainViewComponent,
  },
  {
    path: 'history',
    component: MainViewComponent,
  },
  {
    path: 'settings',
    component: MainViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
