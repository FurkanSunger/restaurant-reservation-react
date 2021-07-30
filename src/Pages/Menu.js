import React from 'react'
import { Categories, CategoryItem, MenuPrice, MenuTitle } from '../components/Menu/Menu.element'
import Navbar from '../components/Navbar'

const MenuPage = () => {
    return (
        <>
            <div className="primary-bg color-light pt-5 border-top">
                <div className="container">
                    <Navbar background="primary" />
                </div>
            </div>
            <div className="container py-4">
                <Categories>
                    <CategoryItem className="transparent-bg color-primary fs-4 fw-bold">All</CategoryItem>
                    <CategoryItem className="transparent-bg color-primary fs-4 fw-bold">Main</CategoryItem>
                    <CategoryItem className="transparent-bg color-primary fs-4 fw-bold">Lunch</CategoryItem>
                    <CategoryItem className="transparent-bg color-primary fs-4 fw-bold">Dessert</CategoryItem>
                    <CategoryItem className="transparent-bg color-primary fs-4 fw-bold">Salad</CategoryItem>
                    <CategoryItem className="transparent-bg color-primary fs-4 fw-bold">Drink</CategoryItem>
                </Categories>
                <hr />
                <div className="row row-cols-lg-4 row-cols-md-4 row-cols-sm-2 row-cols-1 g-4">
                    <div className="col border rounded p-0 text-center">
                        <img className="img-fluid rounded mb-3" src="https://cdn.pixabay.com/photo/2017/07/28/14/29/macarons-2548827_960_720.jpg" alt="menu-item-img" />
                        <MenuTitle>Food Name</MenuTitle>
                        <MenuPrice>$15</MenuPrice>
                    </div>
                    <div className="col border rounded p-0 text-center">
                        <img className="img-fluid rounded mb-3" src="https://cdn.pixabay.com/photo/2017/07/28/14/29/macarons-2548827_960_720.jpg" alt="menu-item-img" />
                        <MenuTitle>Food Name</MenuTitle>
                        <MenuPrice >$15</MenuPrice>
                    </div>
                    <div className="col border rounded p-0 text-center">
                        <img className="img-fluid rounded mb-3" src="https://cdn.pixabay.com/photo/2017/07/28/14/29/macarons-2548827_960_720.jpg" alt="menu-item-img" />
                        <MenuTitle>Food Name</MenuTitle>
                        <MenuPrice>$15</MenuPrice>
                    </div>
                    <div className="col border rounded p-0 text-center">
                        <img className="img-fluid rounded mb-3" src="https://cdn.pixabay.com/photo/2017/07/28/14/29/macarons-2548827_960_720.jpg" alt="menu-item-img" />
                        <MenuTitle>Food Name</MenuTitle>
                        <MenuPrice>$15</MenuPrice>
                    </div>
                    <div className="col border rounded p-0 text-center">
                        <img className="img-fluid rounded mb-3" src="https://cdn.pixabay.com/photo/2017/07/28/14/29/macarons-2548827_960_720.jpg" alt="menu-item-img" />
                        <MenuTitle>Food Name</MenuTitle>
                        <MenuPrice>$15</MenuPrice>
                    </div>
                    <div className="col border rounded p-0 text-center">
                        <img className="img-fluid rounded mb-3" src="https://cdn.pixabay.com/photo/2017/07/28/14/29/macarons-2548827_960_720.jpg" alt="menu-item-img" />
                        <MenuTitle>Food Name</MenuTitle>
                        <MenuPrice>$15</MenuPrice>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MenuPage
