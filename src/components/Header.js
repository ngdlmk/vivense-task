import React from "react"
import { View, Text, TouchableOpacity } from "react-native"

const Header = ({title, backIcon = false, onPress}) => {
    return (
        <View style={{height: 60, flexDirection: 'row', width: '100%', alignItems: 'center'}}>
            {
                backIcon ? <TouchableOpacity onPress={onPress}><Icon name="arrow-left" style={{ fontSize: 28, color: "#ffffff", marginLeft: 20 }} /></TouchableOpacity> : null
            }
            <Text style={{fontSize: 40, color: '#ffffff', fontWeight: '800', marginLeft: 20}}>{title}</Text>
        </View>
    )
}

export default Header