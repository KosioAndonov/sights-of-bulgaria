import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NewReviewComponent } from './new-review/new-review.component';
import { AboutComponent } from './about/about.component';
import { CommunityComponent } from './community/community.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CurrentSightComponent } from './current-sight/current-sight.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/all-sights',
  },
  {
    path: 'all-sights',
    component: MainComponent,
  },
  {
    path: 'new-review',
    component: NewReviewComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'community',
    component: CommunityComponent,
  },
  {
    path: 'all-sights/:sightName',
    component: CurrentSightComponent,
  },
  {
    path: 'auth',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  { path: '**',
   component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
