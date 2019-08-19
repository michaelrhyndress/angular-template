import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MsalGuard } from "@azure/msal-angular";
import {PreloadModulesStrategy} from './core/strategies/preload-modules.strategy';

// Components
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TestComponent } from './components/test/test.component';

const routes: Routes = [
  { path: '',  component: HomeComponent },
  { path: 'test', component: TestComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  providers: [ PreloadModulesStrategy ],
  imports: [ RouterModule.forRoot(routes, { preloadingStrategy: PreloadModulesStrategy, enableTracing: true }) ],
  exports: [ RouterModule ]
})

export class AppRoutes { }
