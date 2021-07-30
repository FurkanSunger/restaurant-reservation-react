import React from 'react'
import { LinkButton, SectionTitle } from '../CommonElements'
import { Categories, CategoryItem, MenuItem, MenuItems, MenuPrice, MenuTitle, MenuWrapper } from './Menu.element'

const Menu = () => {
    return (
        <MenuWrapper className="white-bg" id="menu">
            <div className="container primary-bg p-5">
                <div className="row">
                    <div className="col-lg-7">
                        <SectionTitle className="secondary-font color-danger text-center">Let's Discover</SectionTitle>
                        <SectionTitle className="color-light text-center">OUR MENU</SectionTitle>
                        <Categories>
                            <CategoryItem className="transparent-bg color-white">Main</CategoryItem>
                            <CategoryItem className="transparent-bg color-white">Lunch</CategoryItem>
                            <CategoryItem className="transparent-bg color-white">Dessert</CategoryItem>
                            <CategoryItem className="transparent-bg color-white">Salad</CategoryItem>
                            <CategoryItem className="transparent-bg color-white">Drink</CategoryItem>
                        </Categories>
                        <hr className="color-light" />
                        <MenuItems className="color-light">
                            <MenuItem>
                                <MenuTitle>Food Name</MenuTitle>
                                <MenuPrice className="secondary-bg">$15</MenuPrice>
                            </MenuItem>
                            <MenuItem>
                                <MenuTitle>Food Name</MenuTitle>
                                <MenuPrice className="secondary-bg">$15</MenuPrice>
                            </MenuItem>
                            <MenuItem>
                                <MenuTitle>Food Name</MenuTitle>
                                <MenuPrice className="secondary-bg">$15</MenuPrice>
                            </MenuItem>
                            <MenuItem>
                                <MenuTitle>Food Name</MenuTitle>
                                <MenuPrice className="secondary-bg">$15</MenuPrice>
                            </MenuItem>
                        </MenuItems>
                        <LinkButton to="/menu" className="danger-bg color-light">View More</LinkButton>
                    </div>
                    <div className="col-lg-5 d-flex justify-content-center align-items-center">
                        <div className="row row-cols-lg-3 row-cols-md-3 row-cols-sm-3 row-cols-3 g-2">
                            <img className="img-fluid" src="https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467_960_720.jpg" alt="menu-img" />
                            <img className="img-fluid" src="https://cdn.pixabay.com/photo/2017/07/28/14/29/macarons-2548827_960_720.jpg" alt="menu-img" />
                            <img className="img-fluid" src="https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg" alt="menu-img" />
                            <img className="img-fluid" src="https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_960_720.jpg" alt="menu-img" />
                            <img className="img-fluid" src="https://cdn.pixabay.com/photo/2017/06/02/18/24/watermelon-2367029_960_720.jpg" alt="menu-img" />
                            <img className="img-fluid" src="https://cdn.pixabay.com/photo/2016/11/06/23/31/breakfast-1804457_960_720.jpg" alt="menu-img" />
                            <img className="img-fluid" src="https://cdn.pixabay.com/photo/2017/01/16/17/45/pancake-1984716_960_720.jpg" alt="menu-img" />
                            <img className="img-fluid" src="https://cdn.pixabay.com/photo/2017/03/23/19/57/asparagus-2169305_960_720.jpg" alt="menu-img" />
                            <img className="img-fluid" src="https://cdn.pixabay.com/photo/2014/12/11/02/55/cereals-563796_960_720.jpg" alt="menu-img" />
                            <img className="img-fluid" src="https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971552_960_720.jpg" alt="menu-img" />
                            <img className="img-fluid" src="https://cdn.pixabay.com/photo/2017/01/26/02/06/platter-2009590_960_720.jpg" alt="menu-img" />
                            <img className="img-fluid" src="https://cdn.pixabay.com/photo/2018/01/31/09/57/coffee-3120750_960_720.jpg" alt="menu-img" />
                        </div>
                    </div>
                </div>
            </div>
        </MenuWrapper>
    )
}

export default Menu
