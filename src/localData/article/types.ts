export interface article {
    /**
     * 主键
     */
    id: string | number;
  
    /**
     * 文章正文
     */
    main: string;
  
    /**
     * 文章名称
     */
    articleName: string;

    /**
     * 导航项id
     */
    navId: string | number;
  }

  export interface articleTree {
    /**
     * 主键
     */
    id: string | number;
  
    /**
     * 文章正文
     */
    main: string;
  
    /**
     * 文章名称
     */
    articleName: string;

    /**
     * 导航项id
     */
    navId: string | number;
    /**
     * 树标签
     */
    label: string;
  }
  