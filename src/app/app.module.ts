// minnimum imports for bare bones module
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { Component } from '@angular/core'
import { APP_BASE_HREF } from '@angular/common'

// Observables
import 'rxjs/Observable';
import 'rxjs/Subject';
import 'rxjs/Subscription';
import 'rxjs/add/operator/map';

// need this for ngModel
import { FormsModule } from '@angular/forms'
// router
import { RouterModule, PreloadAllModules } from '@angular/router'

// our routing guard provider and user provider
import { EnsureLoginGuard } from './core/routing/guards/ensure-login-guard'
import { User } from './core/user/user-provider'


// our main app component
import { AppComponent } from './app.component'
// our routes
import { AppRoutes } from './core/routing/routes'

// bring in all of our routable components so we can declare them for the router
import { HomeComponent } from './core/home/home.component'
import { LoginComponent } from './core/user/login.component'
import { HeaderComponent } from './core/page/header.component'
import { FooterComponent } from './core/page/footer.component'


import { ContactComponent } from './core/contact/contact.component'


// ngBootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

// SASS imports
import './scss/global/bootstrap/bootstrap.scss'
import './scss/global/global-styles.scss'

// We need to declare all of our routable components, so we export a tidy array from routes.ts
let declarations: Component[] = [
  AppComponent,
  HomeComponent,//move to routing
  LoginComponent,//move to routing
  ContactComponent,
  HeaderComponent,
  FooterComponent
]

@NgModule({
  declarations: [
    declarations
  ]
  ,
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes,
      { preloadingStrategy: PreloadAllModules }
    ),
    NgbModule.forRoot()
  ]
  ,
  providers: [
      { provide: APP_BASE_HREF, useValue: '/' },
      { provide: User, useClass: User },
      // defining this like the other providers does not work and I suspect it's because the route definition references this provider with a string name
      { provide: 'EnsureLoginGuard', useClass: EnsureLoginGuard }
    ]
  ,
  bootstrap: [AppComponent]
})
export class AppModule { }
