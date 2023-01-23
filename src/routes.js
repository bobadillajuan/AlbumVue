const routes = [
    {
        name: "Home",
        path: "/",
        component: () => import("./pages/Home.vue"),
    },
    {
        name: "Listado_Artistas",
        path: "/artistas",
        component: () => import("./pages/Listado_Artistas.vue"),
    },
    {
        name: "Artista",
        path: "/artistas/:id",
        component: () => import("./pages/Artista.vue"),
    },
    {
        name: "Albumes",
        path: "/albumes",
        component: () => import("./pages/AlbumesListado.vue"),
    },
    {
        name: "Album",
        path: "/albumes/:id",
        component: () => import("./pages/Album.vue"),
    },

];

export default routes;