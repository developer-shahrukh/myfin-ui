import { AccountBox, CategoryRounded, ClassOutlined, Dashboard,  Settings, VerifiedUser } from "@mui/icons-material";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const menuItems = [
    {
        title: "Menu",
        items:[
            {
                icon: <Dashboard/>,
                label: "Dashboard",
                href: "/home",
            },
      
            {
                icon: <AccountBox/>,
                label: "Account",
                href: "/account",
            },
            {
                icon: <VerifiedUser/>,
                label: "User",
                href: "/user",
            },
            {
                icon: <CategoryRounded/>,
                label: "Category",
                href: "/category",
            },
            {
                icon: <ClassOutlined/>,
                label: "Sub category",
                href: "/subcategory",
            },
            
        ],
    },
    {
        title: "Others",
        items:[
            {
                icon: <Settings/>,
                label: "Settings",
                href:"/settings"
            },
            {
                icon: <AccountBox/>,
                label: "Profile",
                href: "/profile"
            },
        ],
    },
];

const Menu = () => {
    return (
 
        <div className="mt-4 text-sm">
          {menuItems.map((i) => (
            <div className="flex flex-col gap-2" key={i.title}>
              <span className="hidden lg:block text-gray-400 font-light my-4">
                {i.title}
              </span>
              {i.items.map((item) => {
                
                  return (
                    <Link
                      href={item.href}
                      key={item.label}
                      className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-smSkyLight"
                    >
                    {item.icon}
                      <span className="hidden lg:block">{item.label}</span>
                    </Link>
                  );
                
              })}
            </div>
          ))}
        </div>
        
      );
};

export default Menu;
