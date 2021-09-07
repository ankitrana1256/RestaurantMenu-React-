import React from 'react';
import Menu from "./menuApi";
import MenuCard from "./menucard"

const Restaurant = () => {
    const [menuData, setMenuData] = React.useState(Menu);
    const filterItem = (category) => {
        const updatedList = Menu.filter((curElem)=>{
            return curElem.category == category;
        });
        setMenuData(updatedList);
    };

    return (
        <>
        <nav className="navbar">
            <div className="btn-group">
                <button className="btn-group__item" onClick={() => setMenuData(Menu)}>All</button>
                <button className="btn-group__item" onClick={() => filterItem("breakfast")}>Breakfast</button>
                <button className="btn-group__item" onClick={() => filterItem("lunch")}>Lunch</button>
                <button className="btn-group__item" onClick={() => filterItem("evening")}>Evening</button>
                <button className="btn-group__item" onClick={() => filterItem("dinner")}>Dinner</button>

            </div>
        </nav>
        <br />
        <MenuCard menuData={menuData} />
        </>
    )
}

export default Restaurant