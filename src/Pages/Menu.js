import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  Categories,
  CategoryItem,
  MenuPrice,
  MenuTitle,
} from "../components/Menu/Menu.element";
import Navbar from "../components/Navbar";
import { fetchMenu } from "../redux/actions/menuActions";
import { fetchRestaurantInfos } from "../redux/actions/restaurantActions";
import Fade from "react-reveal/Fade";
import LazyLoad from "react-lazyload";

const MenuPage = (props) => {
  useEffect(() => {
    props.actions.getRestaurant();
    props.actions.getMenu();
  }, []);

  const filterMenuItems = (e) => {
    e.preventDefault();
    const category = e.target.textContent.toLowerCase();

    if (category === "all") {
      props.actions.getMenu();
      return;
    }

    props.actions.getMenu(category);
  };

  return (
    <>
      <div className="primary-bg color-light pt-5 border-top">
        <div className="container">
          <Navbar background="primary" />
        </div>
      </div>
      <LazyLoad once={true} overflow={true}>
        <Fade bottom>
          <div className="container py-4">
            <Categories className="flex-wrap">
              <CategoryItem
                className="transparent-bg color-primary fs-5 fw-bold"
                onClick={filterMenuItems}
              >
                All
              </CategoryItem>
              {props.restaurant.map((item) =>
                item.categories.map((category) => (
                  <CategoryItem
                    key={category.id}
                    onClick={filterMenuItems}
                    className="transparent-bg color-primary fs-5 fw-bold"
                  >
                    {category.name.toUpperCase()}
                  </CategoryItem>
                ))
              )}
            </Categories>
            <hr />
            <div className="row row-cols-lg-4 row-cols-md-4 row-cols-sm-2 row-cols-1 g-3">
              {props.menu.map((item) => (
                <Fade key={item.id}>
                  <div className="col border rounded p-0 text-center">
                    <img
                      className="img-fluid rounded mb-3"
                      src={item.image}
                      alt="menu-item-img"
                    />
                    <MenuTitle>{item.name}</MenuTitle>
                    <MenuPrice>${item.price}</MenuPrice>
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        </Fade>
      </LazyLoad>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    restaurant: state.restaurantReducers,
    menu: state.menuReducers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      getRestaurant: bindActionCreators(fetchRestaurantInfos, dispatch),
      getMenu: bindActionCreators(fetchMenu, dispatch),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuPage);
