import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '../material.module';
import {RouterModule, Routes} from '@angular/router';
// import {MatIconRegistry} from '@angular/material/icon';
// import {DomSanitizer} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {HttpService} from './services/http.service';
import { UserComponent } from './user/user.component';
import { MainComponent } from './main/main.component';
import {SharingService} from './services/sharing.service';
import {UsersInteractor} from './business/users.interactor';



const routes: Routes = [
  {path: '', component: MainComponent, children: [
  {path: ':id', component: UserComponent}]},
];


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(routes)
  ],
  providers: [HttpService, SharingService, UsersInteractor],
  bootstrap: [AppComponent]
})
export class AppModule {
  // constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
  //   matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityResourceUrl('/assets/mdi.svg'));
  // }
}
