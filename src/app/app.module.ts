import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './navigationBarres/header/header.component';
import { FooterComponent } from './navigationBarres/footer/footer.component';
import { PageStatic01Component } from './gererAssiette/page-static01/page-static01.component';
import { PageStatic02Component } from './gererAssiette/page-static02/page-static02.component';
import { PagePricipalComponent } from './gererAssiette/page-pricipal/page-pricipal.component';
import { IngridientComponent } from './gererAssiette/commun/ingridient/ingridient.component';
import { AssietteService } from './gererAssiette/services/assiette.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageStatic01Component,
    PageStatic02Component,
    PagePricipalComponent,
    IngridientComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [AssietteService],
  bootstrap: [AppComponent],
})
export class AppModule {}
