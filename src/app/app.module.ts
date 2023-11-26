import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon.component';
import { WebService } from './web.service';
import { RegisterComponent } from './register.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NavComponent } from './nav.component';
import { PokemonDetailedComponent } from './pokemon-detailed-view.component';

var routes: any = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'pokemon',
    component: PokemonComponent
  },
  {
    path: 'pokemon/:id',
    component: PokemonDetailedComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    PokemonDetailedComponent,
    HomeComponent,
    RegisterComponent,
    NavComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
