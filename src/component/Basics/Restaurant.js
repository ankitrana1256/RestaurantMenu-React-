import React from 'react';
import Menu from "./menuApi";
import MenuCard from "./menucard";
import Navbar from './Navbar';

const uniqueList = [
    ...new Set(Menu.map((curElem) => {
    return curElem.category;
}))]
console.log(uniqueList);

const Restaurant = () => {

    const [menuData, setMenuData] = React.useState(Menu);
    const [menuList, setMenuList] = React.useState(uniqueList);

    const filterItem = (category) => {
        const updatedList = Menu.filter((curElem)=>{
            return curElem.category == category;
        });
        setMenuData(updatedList);
    };

    return (
        <>

        <Navbar filterItem={filterItem}  menuList= {menuList} />
        <br /><br />
        <MenuCard menuData={menuData} />
        </>
    )
}

export default Restaurant