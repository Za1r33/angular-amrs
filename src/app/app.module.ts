import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { TenantComponent } from './tenant/tenant.component';
import { HandyManComponent } from './handy-man/handy-man.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { AdminAssignComponent } from './admin-assign/admin-assign.component';
import { AdminWatchComponent } from './admin-watch/admin-watch.component';
import { AdminHistoryComponent } from './admin-history/admin-history.component';
import { AdminInfoComponent } from './admin-info/admin-info.component';
import { TenantLodgeComponent } from './tenant-lodge/tenant-lodge.component';
import { TenantHistoryComponent } from './tenant-history/tenant-history.component';
import { TenantInfoComponent } from './tenant-info/tenant-info.component';
import { HandyManWorkComponent } from './handy-man-work/handy-man-work.component';
import { HandyManHistoryComponent } from './handy-man-history/handy-man-history.component';
import { HandyManInfoComponent } from './handy-man-info/handy-man-info.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    TenantComponent,
    HandyManComponent,
    LandingPageComponent,
    LoginComponent,
    AdminAssignComponent,
    AdminWatchComponent,
    AdminHistoryComponent,
    AdminInfoComponent,
    TenantLodgeComponent,
    TenantHistoryComponent,
    TenantInfoComponent,
    HandyManWorkComponent,
    HandyManHistoryComponent,
    HandyManInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
