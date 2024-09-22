import { article } from "./types";
export const articleData: Array<article> = [
  {
    id: 1,
    main: `<h1>This is a Heading</h1><p>This is a paragraph.</p><img src="avatar.png" alt="Avatar" style="width:200px">`,
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
    main: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link
      rel="stylesheet"
      href="https://unpkg.com/element-ui/lib/theme-chalk/index.css"
    />
    <script src="https://cdn.staticfile.org/vue/2.4.2/vue.min.js"></script>

    <script src="https://unpkg.com/element-ui/lib/index.js"></script>
  </head>
  <body>
    <div style="margin-left: 20px">
      <div style="text-align: center"><h1>Java基础</h1></div>
      <div>
        <div><h3>一，数据类型</h3></div>
        <div>
          <ul>
            <h4>基本数据类型：</h4>
            <li>
              整数类型：byte(1字节)、short(2字节)、int(4字节)、long(8字节)
            </li>
            <br />
            <li>浮点类型：float(4字节)、double(8字节)</li>
            <br />
            <li>布尔类型：boolean</li>
            <br />
            <li>字符类型：char(2字节)</li>
            <br />
          </ul>
          <ul>
            <h4>引用数据类型：</h4>
            <li>引用数据类型：类，接口</li>
          </ul>
        </div>
      </div>
      <div>
        <div><h3>二，数组与集合：</h3></div>
        <div>
          数组的特点有固定大小，只能储存同类型元素等，在开发中很少使用，一般使用集合来代替。
          <ul>
            <h4>主要集合接口：</h4>
            <div>
              <h5>1, Collection接口:</h5>
              这是集合框架的根接口，代表一组对象的集合，它主要有两个子接口，list和set。
            </div>
            <div>
              <h5>2,list接口:</h5>
              代表一个有序的集合，可以包含重复的元素，实现类有ArrayList等。
            </div>
            <div>
              <h5><h5>3,Set接口:</h5></h5>
              代表一个不包含重复元素的集合，常见的实现类有，HashSet等。
            </div>
            <div>
              <h5><h5>4,Map接口:</h5></h5>
              代表一个键值对的集合，用于存储键值映射关系，常见的实现类有，HashMap等。可以通过键来获取对应值。
            </div>
          </ul>
          <ul>
            <h4>常见集合类：</h4>
            <div>
              <h5>1,ArrayList:</h5>
              基于动态数组实现，有序集合。
            </div>
            <div>
              <h5>2,HashSet:</h5>
              使用哈希表实现，无序集合，并且拥有唯一元素特性。
            </div>
            <div>
              <h5>3,HashMap:</h5>
              使用哈希表实现，提供快速的键值查找，无需集合
            </div>
          </ul>
        </div>
      </div>
      <div>
        <h3>三，面向对象：</h3>
        面向对象编程（OOP）是一种编程范式，Java
        是一种纯粹的面向对象语言。面向对象编程的核心概念包括封装、继承、多态。
        <ul>
          <div>
            <h5>1,方法:</h5>
            方法包含参数，返回值，方法名，方法体。
          </div>
          <div>
            <h5>2,重载:</h5>
            一个类中有多个方法具有相同的名字，但参数列表不同，编译器会根据参数的类型和数量来决定调用哪个方法。
          </div>
          <div>
            <h5>3,封装:</h5>
            将数据和操作数据的方法都封装在一个类中，通过访问修饰符来控制对数据的访问权限
          </div>
          <div>
            <h5>4,继承:</h5>
            允许一个类继承另一个类的属性和方法，子类可以扩展父类的功能，也可以重写父类的方法。使用场景在Saas的租户等功能，通常会有一个基类定义公共属性，实体类去继承基类。
          </div>
          <div>
            <h5>5,多态:</h5>
            多态是指同一个行为有多种不同的表现形式，通过方法重写或重载以及父类引用指向子类来实现。
          </div>
          <div>
            <h5>6，抽象类(abstract):</h5>
            抽象类不能被实例化，，它可以包含抽象方法(没有方法体的方法)和具体方法，抽象类的目的是为了给子类提供一个通用模板。
          </div>
          <div>
            <h5>7，接口:</h5>
            接口是一种完全抽象的类型，它只包含方法签名和常量，用于定义行为规范，一个类可以实现多个接口。
          </div>
          <div>
            <h5>8，枚举:</h5>
            枚举是一种特殊的类，用于定义一组有限的常量。枚举可以有属性和方法。
          </div>
          <div>
            <h5>9，泛型:</h5>
            泛型允许在定义类，接口，和方法时使用类型参数，使代码通用和类型安全。
          </div>
          <div>
            <h5>10，注解:</h5>
            注解可以在不改变代码结构和不影响运行逻辑的基础上，增加额外的功能，例如注入容器，日志记录，接口鉴权等。
          </div>
          <div>
            <h5>11，异常处理:</h5>
            可以捕获程序运行期间出现的异常，异常可以被捕获和处理。
          </div>
          <div>
            <h5>12，多线程:</h5>
            <ul>
              <p>关于线程的执行状态有：</p>
              <li>新建状态</li>
              <br />
              <li>就绪状态</li>
              <br />
              <li>运行状态</li>
              <br />
              <li>阻塞状态</li>
              <br />
              <li>死亡状态</li>
            </ul>
            <p>
              线程实现一共有两种方式，第一种继承java.lang.Thread, 重写run方法
            </p>
            <div id="app">
              <el-button type="primary">Primary</el-button>
            </div>
          </div>
        </ul>
      </div>
    </div>
  </body>
</html>`,
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
];
