export interface UserInfo {
    userId: string | number;
    username: string;
    realName: string;
    desc?: string;
  }
  
  export interface BeforeMiniState {
    menuCollapsed?: boolean;
    menuSplit?: boolean;
    // menuMode?: MenuModeEnum; 菜单信息
    // menuType?: MenuTypeEnum;
  }
  