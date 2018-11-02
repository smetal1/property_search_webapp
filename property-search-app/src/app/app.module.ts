import { SearchResultsService } from './components/search-results/search-results.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SplitPipe } from './components/search-results/phone-filter.pipe';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'search', component: SearchResultsComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SearchResultsComponent,
    SplitPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
