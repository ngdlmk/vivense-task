import React from "react"
import { View, TouchableOpacity, Text } from "react-native"
import { getState } from "../state/AppContext"

const Menu = ({name, menuId, type}) => {
    const [{verticalMenu, data}, dispatch] = getState()
    console.log(data)
    const setMenu = (menuId, name, type) => {
        dispatch({
            type: 'SET_MENU',
            payload: {menuId, name, type}
        });
        data.forEach(item => {
            if(item.type === type) {
                dispatch({
                    type: 'SET_ACTIVE_DATA',
                    payload: item
                });
            }
        })
    }
    return (
        <TouchableOpacity onPress={() => setMenu(menuId, name, type)} style={{width: 100, height: 150, flexDirection: 'row'}}>
            <View style={{ flex: 0.8, justifyContent: 'center'}}>
            <Text style={{color: '#ffffff', textAlign: 'center', width: 120, fontSize: 16, transform: [{ rotate: '270deg'}] }}>{name}</Text>
            </View>
            <View style={{ flex: 0.2, alignItems: 'flex-start', justifyContent: 'center' }}>
                {
                    menuId === verticalMenu.menuId ?
                    <View style={{width: 8, height: 8, borderRadius: 4, backgroundColor: '#ffc431'}} /> : null
                }
            </View>
        </TouchableOpacity>
    )
}

const VerticalMenu = () => {
    const [{menus}] = getState()
    const menusList = menus.map(menu => {
        return (
            <Menu 
                key={menu.id}
                name={menu.name}
                menuId={menu.id}
                type={menu.type}
            />
        )
    })
    return (
        <View style={{
            width: 100,
            flexDirection: 'column-reverse'
        }}>
            <View style={{width: 100, height: 50}}></View>
            {menusList}
        </View>
    )
}

export default VerticalMenu