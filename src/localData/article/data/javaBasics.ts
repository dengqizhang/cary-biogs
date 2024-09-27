/**
 * 文章列表数据源
 */
export const javaBasics: string = `<body>
    <div id="inqd">
  <h1 id="i4yd">Java 基础
  </h1>
  <h2>一，数据类型
  </h2>
  <h3>基本数据类型：
  </h3>
  <ul>
    <li>
      <p>整数类型：byte(1 字节)、short（2 字节）、int（4 字节）、long（8 字节）
      </p>
    </li>
    <li>
      <p>浮点类型: float（4 字节）、double（8 字节）
      </p>
    </li>
    <li>
      <p>布尔类型：boolean
      </p>
    </li>
    <li>
      <p>字符类型：char（2 字节）
      </p>
    </li>
  </ul>
  <h3>引用数据类型：
  </h3>
  <ul>
    <li>引用数据类型： 类，接口
    </li>
  </ul>
  <h2>二，数组与集合
  </h2>
  <p id="iy4vz">数组的特点有固定大小，只能存储同类型元素等，在开发中很少使用，一般使用集合来代替。
  </p>
  <h3>主要集合接口
  </h3>
  <h4>Collection 接口
  </h4>
  <p id="iho2a">这是集合框架的根接口，代表一组对象的集合，它主要有两个子接口，list 和 set。
  </p>
  <h4>list 接口
  </h4>
  <p id="ihhet">代表一个有序的集合，可以包含重复的元素，实现类有 ArrayList 等。
  </p>
  <h4>Set 接口
  </h4>
  <p id="ijywl">代表一个不包含重复元素的集合，常见的实现类有，HashSet 等。
  </p>
  <h4>Map 接口
  </h4>
  <p id="iisyn">代表一个键值对的集合，用于存储键值映射关系，常见的实现类有，HashMap 等。可以通过键来获取对应值。
  </p>
  <h3>常见集合类
  </h3>
  <h4>ArrayList
  </h4>
  <p id="iwikg">基于动态数组实现，有序集合。
  </p>
  <h4>HashSet
  </h4>
  <p id="ioreg">使用哈希表实现，无序集合，并且拥有唯一元素特性。
  </p>
  <h4>HashMap
  </h4>
  <p id="iht7k">使用哈希表实现，提供快速的键值查找，无需集合
  </p>
  <h2>三，面向对象
  </h2>
  <p id="iun7z">面向对象编程（OOP）是一种编程范式，Java 是一种纯粹的面向对象语言。面向对象编程的核心概念包括封装、继承、多态。
  </p>
  <h3>方法
  </h3>
  <p id="ij5y3">方法包含参数，返回值，方法名，方法体。
  </p>
  <h3>重载
  </h3>
  <p id="ieiyo">一个类中有多个方法具有相同的名字，但参数列表不同，编译器会根据参数的类型和数量来决定调用哪个方法。
  </p>
  <h3>封装
  </h3>
  <p id="i2k41">将数据和操作数据的方法都封装在一个类中，通过访问修饰符来控制对数据的访问权限
  </p>
  <h3>继承
  </h3>
  <p id="iga9w">允许一个类继承另一个类的属性和方法，子类可以扩展父类的功能，也可以重写父类的方法。使用场景在 Saas 的租户等功能，通常会有一个基类定义公共属性，实体类去继承基类。
  </p>
  <h3>多态
  </h3>
  <p id="ioh8r">多态是指同一个行为有多种不同的表现形式，通过方法重写或重载以及父类引用指向子类来实现。
  </p>
  <h3>抽象类(abstract)
  </h3>
  <p id="ib49k">抽象类不能被实例化，它可以包含抽象方法(没有方法体的方法)和具体方法，抽象类的目的是为了给子类提供一个通用模板。
  </p>
  <h3>接口
  </h3>
  <p id="i63kw">接口是一种完全抽象的类型，它只包含方法签名和常量，用于定义行为规范，一个类可以实现多个接口。
  </p>
  <h3>枚举
  </h3>
  <p id="ick44">枚举是一种特殊的类，用于定义一组有限的常量。枚举可以有属性和方法。
  </p>
  <h3>泛型
  </h3>
  <p id="ia5e3">泛型允许在定义类，接口，和方法时使用类型参数，使代码通用和类型安全。
  </p>
  <h3>注解
  </h3>
  <p id="ihgg9h">注解可以在不改变代码结构和不影响运行逻辑的基础上，增加额外的功能，例如注入容器，日志记录，接口鉴权等。
  </p>
  <h3>异常处理
  </h3>
  <p id="ioqgkd">可以捕获程序运行期间出现的异常，异常可以被捕获和处理。
  </p>
  <h3>多线程
  </h3>
  <h4>1，线程的状态
  </h4>
  <p id="ieanz4">关于线程的执行状态有：
  </p>
  <ul>
    <li>新建状态
    </li>
    <li>就绪状态
    </li>
    <li>运行状态
    </li>
    <li>阻塞状态
    </li>
    <li>死亡状态
    </li>
  </ul>
  <h4>2，创建线程的方式
  </h4>
  <p id="ijwdej">线程实现一共有两种方式
  </p>
  <p id="ij49ub">第一种继承 java.lang.Thread,重写 run 方法,然后通过 start()方法启动线程。
  </p>
  <p id="ibmals">第二种方法是通过实现 Runnable 接口，但是最后还是需要 new Thread, 并且调用 Thread 的 start()启动线程。
  </p>
  <p id="iprqa4">所以本质意义来说，创建线程只有一种方式，通过 Thread 的 start 方法，其他的方法都是在花式调用它。
  </p>
  <h4>3，线程的同步
  </h4>
  <p id="ikzuvc">在多线程业务场景下，可能会导致多个线程同时访问共享资源，会导致读取脏数据等并发问题。
  </p>
  <p id="i57ar6">在这种情况下可以使用同步锁来保证同一时间只能有一个线程访问资源。
  </p>
  <h4>4，线程的通讯
  </h4>
  <p id="ip5ieh">java 的 Object 类中有 wait、notify、notifyAll 方法可以实现线程中间的通讯，一个线程在等待某个条件满足时，可以调用 wait 方法进入等待状态。另一个线程在条件满足时，可以调用 notyfy 或 notifyAll 方法通知等待的线程。
  </p>
  <h4>5，线程池
  </h4>
  <p id="iml1yv">通过线程池可以管理线程，可以重复利用已经创建的线程，减少线程的创建和销毁，提高性能。
  </p>
  <p id="i2vh0c">java 提供了
    <code>java.util.concurrent.Executors</code>工厂类来创建不同的线程池。
  </p>
  <h4>6，反射
  </h4>
  <p id="i2h3ka">反射是一种在运行时动态获取类的信息、访问类的成员变量、方法和构造函数，并调用它们的机制。反射提供了一种强大的方式来实现动态编程，使得程序可以在运行时根据不同的条件执行不同的操作。
  </p>
  </div>
</body>

<style>
* {
  box-sizing: border-box;
}
body {
  margin: 0;
}
#inqd {
    padding: 30px;
    background: linear-gradient(to bottom left, #f1f1f1, white);
}
#i4yd{
  text-align:center;
}
#iy4vz{
  margin:0px 0px 0px 40px;
}
#iho2a{
  margin:0 0 0 40px;
}
#ihhet{
  margin:0 0 0 40px;
}
#ijywl{
  margin:0 0 0 40px;
}
#iisyn{
  margin:0 0 0 40px;
}
#iwikg{
  margin:0 0 0 40px;
}
#ioreg{
  margin:0 0 0 40px;
}
#iht7k{
  margin:0 0 0 40px;
}
#iun7z{
  margin:0 0 0 40px;
}
#ij5y3{
  margin:0 0 0 40px;
}
#ieiyo{
  margin:0 0 0 40px;
}
#i2k41{
  margin:0 0 0 40px;
}
#iga9w{
  margin:0 0 0 40px;
}
#ioh8r{
  margin:0 0 0 40px;
}
#ib49k{
  margin:0 0 0 40px;
}
#i63kw{
  margin:0 0 0 40px;
}
#ick44{
  margin:0 0 0 40px;
}
#ia5e3{
  margin:0 0 0 40px;
}
#ihgg9h{
  margin:0 0 0 40px;
}
#ioqgkd{
  margin:0 0 0 40px;
}
#ieanz4{
  margin:0 0 0 40px;
}
#ijwdej{
  margin:0px 0px 20px 40px;
}
#ij49ub{
  margin:0px 0px 20px 40px;
}
#ibmals{
  margin:0px 0px 20px 40px;
}
#iprqa4{
  margin:0 0 0 40px;
}
#ikzuvc{
  margin:0px 0px 20px 40px;
}
#i57ar6{
  margin:0 0 0 40px;
}
#ip5ieh{
  margin:0 0 0 40px;
}
#iml1yv{
  margin:0 0 0 40px;
}
#i2vh0c{
  padding:0 0 0 40px;
}
#i2h3ka{
  padding:0 0 0 40px;
}


</style>`;
