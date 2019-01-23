import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule} from './shared/shared.module';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomePageComponent } from './home/home-page.component';
import { FoodLogComponent } from './food-log/food-log.component';
import { ScoreComponent } from './score/score.component';
import { BiometricsComponent } from './biometrics/biometrics.component';
import { JournalComponent } from './journal/journal.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent},
  { path: 'foodlog', component: FoodLogComponent},
  { path: 'score', component: ScoreComponent},
  { path: 'biometrics', component: BiometricsComponent},
  { path: 'journal', component: JournalComponent},
  { path: 'profile', component: ProfileComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    SharedModule,
  ],
  declarations: [
  ],
  exports: [
    RouterModule,
  ]

})
export class AppRoutingModule { }
