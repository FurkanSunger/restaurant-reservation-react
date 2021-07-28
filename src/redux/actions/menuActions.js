import { ADDTOMENU, DELETEFROMMENU, GETMENU, UPDATEMENU } from "./actionTypes"

export const getMenu = (menuItems) => {
    return {
        type: GETMENU,
        payload: menuItems
    }
}

export const fetchMenu = (category) => {
    return function(dispatch) {
        let url = "http://localhost:3004/menu";

        if (category) {
            url = url + "?category=" + category;
        }

        return fetch(url)
        .then(response => response.json())
        .then(result => dispatch(getMenu(result)));
    }
}

export const addToMenu = (menuItem) => {
    return {
        type: ADDTOMENU,
        payload: menuItem
    }
}

export const updateMenu = (menuItem) => {
    return {
        type: UPDATEMENU,
        payload: menuItem
    }
}

export const deleteFromMenu = (menuItemId) => {
    return {
        type: DELETEFROMMENU,
        payload: menuItemId
    }
}

export const fetchMenuItem = (menuItem) => {
    return fetch("http://localhost:3004/menu" + (menuItem.id || ""), {
        method: menuItem.id ? "PUT" : "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(menuItem)
    })
    .then(response => response.json())
    .catch(error => console.log(error));
}

export const saveMenuItem = (menuItem) => {
    return function(dispatch) {
        return fetchMenuItem(menuItem)
        .then(item => {
            item.id ? dispatch(updateMenu(item))
            : dispatch(addToMenu(item))
        })
        .catch(error => {throw error});
    }
}

export const fetchDeleteItem = (menuItem) => {
    return fetch("http://localhost:3004/menu/" + menuItem.id, {
        method: "DELETE"
    })
    .then(response => response.json())
    .catch(error => console.log(error));
}

export const deleteMenuItem = (menuItem) => {
    return function(dispatch) {
        return fetchDeleteItem(menuItem)
        .then(item => dispatch(deleteFromMenu(item)))
        .catch(error => {throw error});
    }
}