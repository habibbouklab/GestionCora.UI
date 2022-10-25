import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagePricipalComponent } from './gererAssiette/page-pricipal/page-pricipal.component';
import { PageStatic01Component } from './gererAssiette/page-static01/page-static01.component';
import { PageStatic02Component } from './gererAssiette/page-static02/page-static02.component';

const routes: Routes = [
  { path: '', component: PagePricipalComponent },
  { path: '*', component: PagePricipalComponent },
  { path: 'pagestatic01', component: PageStatic01Component },
  { path: 'pagestatic02', component: PageStatic02Component },
  { path: 'pageprincipal', component: PagePricipalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
