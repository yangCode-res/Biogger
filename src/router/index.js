import { createRouter, createWebHashHistory } from "vue-router";
import Index from "~/page/index.vue"
import Home from "~/page/Home.vue"
import Editor from "~/page/Editor/editor.vue"
import Article from "~/page/article.vue"
import YearsStatics from "~/components/yearsStatics.vue"
import NoticeShow from "~/page/Notice/NoticeShow.vue"
import PlaceShow from "~/page/placeOnFile/placeOnFile.vue"
import ClasserShow from "~/page/classer/ClasserShow.vue"
import comments from "~/components/comments.vue"
const routes=[
    {
        path: "/",
        component: Index,
        children: [
            {
                path: "/",
                name: "index",
                component: Home,
            },
            {
                path: "/editor",
                name: "home",
                component: Editor,
            },
            {
                path: "/article/:id",
                name: "Article",
                props: true,
                component: Article,
            },
            {
                path: "/yearsStatics",
                name: "Statics",
                component: YearsStatics,
            },
            {
                path: "/notice",
                name: "NoticeShow",
                component: NoticeShow,

            },
            {
                    path: "/place",
                    name: "PlaceShow",
                    component: PlaceShow,
            },
            {
                path:"/classer/:subcategory",
                name:"classerSHow",
                component:ClasserShow,
                props:true,


            },
            {
                path:"/comments",
                name:"comments",
                component:comments,
            }
        ],
    },
]
export const router = createRouter({
    history: createWebHashHistory(),
    routes,
  });