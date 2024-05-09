import { NavItemType } from "shared/Navigation/NavigationItem";
import ncNanoId from "utils/ncNanoId";

export const NAVIGATION_DEMO: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/",
    name: "Trang chủ",
    protected: false,
    // type: "dropdown",
  },
  {
    id: ncNanoId(),
    href: "/services",
    name: "Dịch vụ",
    // type: "dropdown",
    // children: demoChildMenus,
    // isNew: true,
    protected: false,

  },
  {
    id: ncNanoId(),
    href: "/trainers",
    name: "Huấn luyện viên",
    protected: false,
    // type: "megaMenu",
    // megaMenu: megaMenuDemo,
  },
  {
    id: ncNanoId(),
    href: "/booking",
    name: "Lịch sử đặt lịch",
    protected: true,
  },
  {
    id: ncNanoId(),
    href: "/practice",
    name: "Tập luyện",
    protected: true,
    // type: "dropdown",
    // children: templatesChildrenMenus,
  },
];
