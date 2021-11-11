import { createWebHistory, createRouter } from 'vue-router';
import ListPage from './components/ListPage.vue';
import mainPage from './components/MainPage.vue';
import detailPage from './components/DetailPage.vue';
import CommentPage from './components/CommentPage.vue';

"vue-router";

const routes = [  
  {
    path: "/list",
    component: ListPage,
  },
  {
    path: "/main",
    component: mainPage,
  },
  {
    path: "/detail/:id",
    component: detailPage,
    children: [
      {
        path: "comment",
        component: CommentPage,
      },
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 