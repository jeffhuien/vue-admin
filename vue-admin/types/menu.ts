// import { IconType } from '@icon-park/vue-next/es/all'

interface Menu {
  title?: string;
  icon?: string;
  isClick?: boolean;
  route?: string;
}

export interface IMenu extends Menu {
  children?: Menu[];
}
