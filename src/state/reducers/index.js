import dataReducer from "./data"
import verticalMenuReducer from './verticalMenu'
import menusReducer from './menus'
import activeDataReducer from "./activeData";
export default ({data, verticalMenu, menus, activeData}, action) => ({
    data: dataReducer(data, action),
    verticalMenu: verticalMenuReducer(verticalMenu, action),
    menus: menusReducer(menus, action),
    activeData: activeDataReducer(activeData, action)
})