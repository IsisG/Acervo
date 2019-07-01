import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { LivroComponent } from './livro/livro.component';
import { HeaderComponent } from './header/header.component';
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LivroService } from './livro/livroService.Service';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    LivroComponent,
    HeaderComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
      
  ],
  providers: [
    LivroService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
