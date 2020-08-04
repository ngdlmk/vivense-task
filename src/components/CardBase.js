import React from "react"
import { View, TouchableOpacity } from "react-native"

const CardBase = ({onPress, width, children, cardColor, height}) => {
    return(
        <TouchableOpacity
            activeOpacity={0.95}
            onPress={onPress}
            style={{
                backgroundColor: '#ffffff',
                width: width,
                height: height,
                borderRadius: 30,
                marginBottom: 10,
                marginTop: 10,
                overflow: 'hidden',
                flexDirection: 'row',
                alignSelf: 'center'
            }}
        >
            <View style={{
                height: height,
                width: 16,
                backgroundColor: cardColor,
                borderTopLeftRadius: 30,
                borderBottomLeftRadius: 30,
            }}></View>
            <View style={{flex: 1}}>
                {children}
            </View>
        </TouchableOpacity>
    )
}

export default CardBase