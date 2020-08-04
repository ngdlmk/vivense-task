import React, { useEffect, useState } from "react"
import { View, StatusBar, ActivityIndicator, SafeAreaView } from "react-native"
import Header from "../components/Header"
import VerticalMenu from "../components/VerticalMenu"
import ProductList from "../components/ProductList";
import { getState } from "../state/AppContext"

const Home = props => {
    const [{}, dispatch] = getState()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetch('https://5f1ef14157e3290016863f9a.mockapi.io/mobile/api/v1/templates').then(res => res.json()).then(res => {
            console.log("data", res)
            setLoading(true)
            const titles = []
            res.map(item => {
                const title = {id: item.id, name: item.title, type: item.type}
                if(item.published)
                    titles.push(title)
            })
            dispatch({
                type: "SET_MENUS",
                payload: titles
            })
            dispatch({
                type: "SET_MENU",
                payload: {menuId: titles[0].id, name: titles[0].name}
            })
            dispatch({
                type: "SET_DATA",
                payload: res
            })
            dispatch({
                type: 'SET_ACTIVE_DATA',
                payload: res[0]
            });
        })
    }, [])
    return (
        <SafeAreaView style={{
            backgroundColor: '#573753',
            flex: 1
        }}
        >
                <StatusBar backgroundColor="purple" />
                <Header
                    title="Vivense"
                />
                <View style={{
                    flex: 1,
                    flexDirection: 'row'
                }}>
                    <VerticalMenu />
                    <View style={{
                        flex: 1,
                        backgroundColor: '#684b64',
                        borderTopLeftRadius: 40,
                        flexDirection: 'row'
                    }}>

                        {
                        loading ? 
                        <ProductList />
                         : 
                         <View style={{height: '100%', width: '100%', justifyContent: 'center'}}>
                             <ActivityIndicator size={50} color='white'/>
                        </View>}
                    </View>
                </View>
        </SafeAreaView>
    )
}

export default Home