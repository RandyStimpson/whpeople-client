import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { FoodLogModule} from './food-log/food-log.module';
import { ScoreModule} from './score/score.module';
import { BiometricsModule} from './biometrics/biometrics.module';
import { ProfileModule} from './profile/profile.module';
import { JournalModule} from './journal/journal.module';
import { SharedModule} from './shared/shared.module';
import { HomeModule} from './home/home.module';
import { AppControllerService } from './app-controller.service';


import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MenuButtonComponent } from './menu-bar/menu-button.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    MenuButtonComponent,
    MenuBarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HomeModule,
    AppRoutingModule,
    FoodLogModule, 
    ScoreModule,
    BiometricsModule,
    JournalModule,
    ProfileModule,
    SharedModule,
  ],
  providers: [AppControllerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
