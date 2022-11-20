import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { BackgroundComponent } from './components/background/background.component';
import { IgGridComponent } from './views/media/ig-grid/ig-grid.component';
import { ImgFeedPreviewComponent } from './views/media/ig-grid/img-feed-preview/img-feed-preview.component';
import { ImageViewerComponent } from './components/image-viewer/image-viewer.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers/app-state.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    BackgroundComponent,
    IgGridComponent,
    ImgFeedPreviewComponent,
    ImageViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
