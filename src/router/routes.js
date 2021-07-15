import store from '@/state/store'

export default [
  {
    path: "/indexRecursos",
    name: "Recursos",
    component: () => import("../views/pages/dashboard/indexRecursos"),
    meta: {
      authRequired: false,
    },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/pages/account/login"),
    meta: {
      beforeResolve(routeTo, routeFrom, next) {
        // If the user is already logged in
        if (store.getters["auth/loggedIn"]) {
          // Redirect to the home page instead
          next({ name: "home" });
        } else {
          // Continue to the login page
          next();
        }
      },
    },
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/pages/account/register"),
    meta: {
      beforeResolve(routeTo, routeFrom, next) {
        // If the user is already logged in
        if (store.getters["auth/loggedIn"]) {
          // Redirect to the home page instead
          next({ name: "home" });
        } else {
          // Continue to the login page
          next();
        }
      },
    },
  },
  {
    path: "/forgot-password",
    name: "Forgot-password",
    component: () => import("../views/pages/account/forgot-password"),
    meta: {
      beforeResolve(routeTo, routeFrom, next) {
        // If the user is already logged in
        if (store.getters["auth/loggedIn"]) {
          // Redirect to the home page instead
          next({ name: "home" });
        } else {
          // Continue to the login page
          next();
        }
      },
    },
  },
  {
    path: "/logout",
    name: "logout",
    meta: {
      authRequired: true,
      beforeResolve(routeTo, routeFrom, next) {
        if (process.env.VUE_APP_DEFAULT_AUTH === "firebase") {
          store.dispatch("auth/logOut");
        } else {
          store.dispatch("authfack/logout");
        }
        const authRequiredOnPreviousRoute = routeFrom.matched.some((route) =>
          route.push("/login")
        );
        // Navigate back to previous page, or home as a fallback
        next(authRequiredOnPreviousRoute ? { name: "home" } : { ...routeFrom });
      },
    },
  },
  {
    path: "/",
    name: "home",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/dashboard/index"),
  },
  {
    path: "/crearRecursos",
    name: "crearRecursos",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/dashboard/crearRecursos"),
  },
];
