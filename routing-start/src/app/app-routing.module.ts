import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {HomeComponent} from "./home/home.component";
import {UsersComponent} from "./users/users.component";
import {UserComponent} from "./users/user/user.component";
import {ServersComponent} from "./servers/servers.component";
import {ServerComponent} from "./servers/server/server.component";
import {EditServerComponent} from "./servers/edit-server/edit-server.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {AuthGuard} from "./auth-guard.service";
import {CanDeactivateGuard} from "./servers/edit-server/can-deactivate-guard.service";
import {ServerResolver} from "./servers/server-resolver.service";

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'users',
    component: UsersComponent,
    children: [
      {
        path: ':id/:name',
        component: UserComponent
      }
    ]
  },
  {
    path: 'servers',
    // canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: ServersComponent,
    children: [
      {
        path: ':id',
        component: ServerComponent,
        resolve: {server: ServerResolver}
      },
      {
        path: ':id/edit',
        component: EditServerComponent,
        canDeactivate: [CanDeactivateGuard]
      }
    ]
  },
  // {path: '404', component: PageNotFoundComponent},
  {path: '404', component: PageNotFoundComponent,
    data: {message: 'oz is not Found:)'}
    },
  {path: '**', redirectTo: '/404'},
];

@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes, {useHash: true}) for Older Server that can not parse url.
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
