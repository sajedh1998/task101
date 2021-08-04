import React from 'react';
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as ImIcons from "react-icons/im";
import * as MdIcons from "react-icons/md";
import * as GrIcons from "react-icons/gr";

export const SidebarData =[
    {
        title:'Home',
        path:'/',
        icon:<AiIcons.AiFillHome />,
        cName:'nav-text'
    },
    {
        title:'Find Jobs',
        path:'/jobs',
        icon:<MdIcons.MdWork />,
        cName:'nav-text'
    },
    {
        title:'Create Your CV',
        path:'/CV',
        icon:<IoIcons.IoIosCreate />,
        cName:'nav-text'
    },
    {
        title:'Blogs',
        path:'/blogs',
        icon:<ImIcons.ImBlog />,
        cName:'nav-text'
    },
    {
        title:'CV Services',
        path:'/services',
        icon:<GrIcons.GrServices />,
        cName:'nav-text'
    },
]