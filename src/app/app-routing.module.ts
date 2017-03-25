import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

const appRoutes: Routes = [
  { path: '', redirectTo: '/players', pathMatch: 'full' }
];

@NgModule({
  imports:      [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [],
})

export class AppRoutingModule { }
