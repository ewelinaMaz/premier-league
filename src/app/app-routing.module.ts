import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ListResolver } from './list/list.resolver';

const routes: Routes = [
  {path:'', pathMatch: 'full', component: WelcomePageComponent},
  {path:'rating', loadChildren: () => import('./list/list.module').then(m => m.ListModule), resolve: { res: ListResolver }},
  { path: '**', pathMatch: 'full',
        component: PageNotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
