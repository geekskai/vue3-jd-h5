import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    name: "",
    path: "/",
    component: () => import("@/views/home/index.vue"),
    meta: {
      title: "首页",
    },
    children: [
      {
        name: "cart",
        path: "/cart",
        component: () => import("@/views/cart/index.vue"),
        meta: {
          title: "cart",
        },
      },
    ],
  },

  {
    name: "notFound",
    path: "/:path(.*)+",
    redirect: {
      name: "goods",
    },
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

router.beforeEach((to, from, next) => {
  const title = to?.meta?.title;
  if (title) {
    document.title = title as string;
  }
  next();
});

export default router;
