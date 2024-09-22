export interface blogsHome {
  /**
   * 主键
   */
  id: string | number;

  /**
   * github
   */
  github: string;
  /**
   * gitee
   */
  gitee: string;

  /**
   * email
   */
  email: string;

  /**
   * wechat
   */
  wechat: string;

  /**
   * 主页介绍
   */
  mainText: string;
  /**
   * 项目集合
   */
  projectList: Array<project>;
}

export interface project {
[x: string]: PropertyKey | undefined /**
 * 主键
 */;
  /**
   * 主键
   */
  id: string | number;
  /**
   * 项目标题
   */
  title: string;
  /**
   * 项目介绍
   */
  text: string;

  /**
   * 项目跳转链接
   */
  url: string;

  /**
   * 项目类型
   */
  projectType: string | number;
}
