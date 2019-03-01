import { Component, Output, EventEmitter, Renderer2 } from "@angular/core";
import { Event as NavigationEvent } from "@angular/router";
import { filter } from "rxjs/operators";
import { NavigationStart } from "@angular/router";
import { Router } from "@angular/router";
import { AppstatemanagerService } from './Services/appstate/appstatemanager.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    // I initialize the app component.
    constructor(router: Router, private renderer: Renderer2, private appState: AppstatemanagerService) {

        this.monitorRotes(router);
        this.appState.state$.subscribe(state => {
            if (state["bodyClass"]) {
                this.renderer.removeAttribute(document.body, "class");
                 this.renderer.removeClass(document.body, state["bodyClass"]);
                 this.renderer.addClass(document.body, state["bodyClass"]);
            }
        });
    }

    monitorRotes(router: Router): void {
        router.events
            .pipe(
                // The "events" stream contains all the navigation events. For this demo,
                // though, we only care about the NavigationStart event as it contains
                // information about what initiated the navigation sequence.
                filter(
                    (event: NavigationEvent) => (event instanceof NavigationStart)
                )
            )
            .subscribe(
                (event: NavigationStart) => {

                    // console.group("NavigationStart Event");
                    // Every navigation sequence is given a unique ID. Even "popstate"
                    // navigations are really just "roll forward" navigations that get
                    // a new, unique ID.
                    // console.log("navigation id:", event.id);
                    // console.log("route:", event.url);
                    this.appState.setState("bodyClass", this.buildBodyClass(event.url));

                    // The "navigationTrigger" will be one of:
                    // --
                    // - imperative (ie, user clicked a link).
                    // - popstate (ie, browser controlled change such as Back button).
                    // - hashchange
                    // --
                    // NOTE: I am not sure what triggers the "hashchange" type.
                    // console.log("trigger:", event.navigationTrigger);

                    // This "restoredState" property is defined when the navigation
                    // event is triggered by a "popstate" event (ex, back / forward
                    // buttons). It will contain the ID of the earlier navigation event
                    // to which the browser is returning.
                    // --
                    // CAUTION: This ID may not be part of the current page rendering.
                    // This value is pulled out of the browser; and, may exist across
                    // page refreshes.
                    if (event.restoredState) {

                        // console.warn(
                        //     "restoring navigation id:",
                        //     event.restoredState.navigationId
                        // );

                    }

                    // console.groupEnd();

                }
            );
    }

    buildBodyClass(url: string): string {

        let routes = ["/customer", "/login", "/error"];
        let index = routes.filter(route => url.search(route) >= 0);

        if (index && index.length > 0) {
            switch (index[0]) {
                case "/customer":
                    return "customerContainer";
                case "/":
                case "/login":
                    return "loginBgImage";
                case "/error":

                case "underconstruction":
                    let errorRoutes = ["/underconstruction", "/pagenotfound"];
                    let errorIndex = errorRoutes.filter(route => url.search(route) >= 0);

                    if (errorIndex && errorIndex.length > 0) {
                        switch (errorIndex[0]) {
                            case "/pagenotfound":
                                return "pageNotFound";
                            case "/underconstruction":
                                return "underConstructionContainer";
                            default:
                                return "underConstructionContainer";
                        }

                    }
                    return "underConstructionContainer";
                default:
                return '';
                    return "innerContainer";

            }
        }

       return url == "/" ? "loginBgImage" : "innerContainer";

    }
}
