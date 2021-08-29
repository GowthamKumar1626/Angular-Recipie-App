import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipiesComponent } from './recipies/recipies.component';
import { RecipeListComponent } from './recipies/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipies/recipe-detail/recipe-detail.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, RecipiesComponent, RecipeListComponent, RecipeDetailComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
