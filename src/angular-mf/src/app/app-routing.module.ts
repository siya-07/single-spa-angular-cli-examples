import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Route1Component } from './route1/route1.component';
import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';

const routes: Routes = [
    {
        path: 'angular-mf',
        children: [
            { path: 'route1', component: Route1Component },
            { path: 'route2', loadChildren: './route2module/route2-routing.module#Route2Module' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        { provide: APP_BASE_HREF, useValue: '/' }
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }