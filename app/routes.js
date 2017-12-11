"use strict";
var _404_component_1 = require("./errors/404.component");
var index_1 = require('./events/index');
exports.appRoute = [
    { path: 'events/new', component: index_1.CreateEventComponent,
        canDeactivate: ['CanDeactivateCreateEvent'] },
    { path: 'events/:id', component: index_1.EventDetailsComponent,
        canActivate: [index_1.EventRouteActivator] },
    { path: 'events/session/new', component: index_1.CreateSessionComponent },
    { path: 'events', component: index_1.EventsListComponent,
        resolve: { events: index_1.EventsListResolver },
    },
    { path: '404', component: _404_component_1.ErrorComponent },
    { path: "", redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', loadChildren: "app/user/user.module#UserModule" }
];
//# sourceMappingURL=routes.js.map