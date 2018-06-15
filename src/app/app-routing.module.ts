import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/content/custom-pages/login/login.module#LoginModule',
  },
  {
    path: 'register',
    loadChildren: 'app/content/custom-pages/register/register.module#RegisterModule',
  },
  {
    path: 'forgot-password',
    loadChildren: 'app/content/custom-pages/forgot-password/forgot-password.module#ForgotPasswordModule',
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: 'app/content/dashboard/dashboard.module#DashboardModule',
        pathMatch: 'full'
      },
      {
        path: 'components',
        loadChildren: 'app/content/components/components.module#ComponentsModule',
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class RoutingModule {
}
