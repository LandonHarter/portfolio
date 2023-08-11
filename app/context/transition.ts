import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { createContext } from "react";

const PageTransitionContext = createContext<Function>(() => { });
export default PageTransitionContext;

export function handlePageTransition(event: any, route: string, router: AppRouterInstance, pushPageTransition: Function) {
    event.preventDefault();
    pushPageTransition();
    setTimeout(() => {
        router.push(route);
    }, 750);
}