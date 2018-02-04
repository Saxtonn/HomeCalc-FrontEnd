import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { OperationDetailsComponent } from './operation-details/operation-details.component';
import { HistoryComponent } from './history/history.component';
import { CycleMenuComponent } from './cycle-menu/cycle-menu.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SettingsComponent } from './settings/settings.component';

import { AuthGuard } from './auth-guard.service';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate: [ AuthGuard ] },
  { path: 'history', component: HistoryComponent, canActivate: [ AuthGuard ] },
  { path: 'cycles', component: CycleMenuComponent, canActivate: [ AuthGuard ] },
  { path: 'settings', component: SettingsComponent, canActivate: [ AuthGuard ] },
  { path: 'details/:id', component: OperationDetailsComponent, canActivate: [ AuthGuard ], runGuardsAndResolvers: 'always', },
  { path: '', redirectTo: '/welcome', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
