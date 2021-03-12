import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Modulos
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

// Componentes
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

const routes: Routes = [
  // path: 'pages' están dentro de PagesRouting
  // path: 'auth' están dentro de AuthRouting

  { path: '', pathMatch: '/dashboard', redirectTo: 'full' },

  { path: '**', component: NopagefoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
