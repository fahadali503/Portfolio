import React from 'react';



const style = {
    container: `relative top-1/4 w-full text-center mt-8`,
    item: `text-3xl text-gray-400 cursor-pointer hover:text-white`,
    menu: {
        open: `h-full w-full `,
        close: `w-0 h-full`,
        default: `overflow-x-hidden md:overflow-hidden transition-all duration-700 fixed z-10 top-0 left-0 bg-black`,
    },
};


interface IProps {
    open: boolean;
}

export const Menu: React.FC<IProps> = ({ open, children }) => {
    return (
        <div
            className={`${style.menu.default} 
       ${open ? style.menu.open : style.menu.close}`}
        >
            {children}
        </div>
    );
};


export const MenuContainer: React.FC = ({ children }) => {
    return <div className={style.container}>{children}</div>;
}

// export const MenuItem: React.FC<{ href: string }> = ({ children, href }) => {
//     return (
//         <div className="p-2">
//             <a className={style.item}>
//                 {children}
//             </a>
//         </div>
//     );
// }