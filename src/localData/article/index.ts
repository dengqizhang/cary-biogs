import { article } from "./types";
import { javaBasics } from "./data/javaBasics";
/**
 * 文章列表数据源
 */
export const articleData: Array<article> = [
  {
    id: 1,
    main: `肉丁数联Saas平台`,
    articleName: "肉丁数联Saas平台",
    navId: 2,
  },
  {
    id: 2,
    main: "2222",
    articleName: "个人博客",
    navId: 2,
  },
  {
    id: 3,
    main: javaBasics,
    articleName: "java基础",
    navId: 3,
  },
  {
    id: 4,
    main: "网络杂谈",
    articleName: "网络杂谈",
    navId: 4,
  },
  {
    id: 5,
    main: "工具收集",
    articleName: "工具收集",
    navId: 5,
  },
  {
    id: 6,
    main: "springboot",
    articleName: "Springboot",
    navId: 3,
  },
  {
    id: 7,
    main: "Java8新特性",
    articleName: "Java8新特性",
    navId: 3,
  },
  {
    id: 8,
    main: "Mysql基础",
    articleName: "Mysql基础",
    navId: 3,
  },
];
