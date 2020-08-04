import React from "react"
import { View, Text, Image } from "react-native"
import CardBase from "./CardBase"

export const SliderCard = ({ cardColor, imgSource}) => {
    return (
        <CardBase 
            width="80%"
            height={150}
            cardColor={cardColor}
        >
            <View style={{flex: 1}}>
                <Image 
                    source={{uri: imgSource}}
                    style={{
                        width: '100%',
                        height: '100%'
                    }}
                    resizeMode='cover'
                />
            </View>
        </CardBase>
    )
}

export const ProductCard = ({headerText, priceText, cardColor, imgSource}) => {
    return (
        <CardBase 
            width="80%"
            height={150}
            cardColor={cardColor}
        >
            <View style={{flex: 1}}>
            <View style={{width: '100%', height: "100%", position: 'absolute', opacity: 0.35}}>
                    <Image 
                        source={{uri: imgSource}}
                        style={{
                            width: '100%',
                            height: '100%'
                        }}
                        resizeMode='cover'
                    />
                </View>
                <View style={{flex: 0.3, width: '100%', justifyContent: 'center', flexDirection: 'row'}}>
                    <View style={{flex: 1, justifyContent: 'center'}}>
                        <Text 
                            style={{
                                fontWeight: 'bold', 
                                color: '#573753', 
                                fontSize: 20,
                                marginLeft: 20,
                                width: '84%',
                            }}>
                            {headerText}
                        </Text>
                    </View>
                </View>
                <View style={{flex: 0.2}}>
                    <Text 
                        style={{
                            fontWeight: '900', 
                            color: '#ff6b2e', 
                            fontSize: 18,
                            marginLeft: 20,
                            width: '84%',
                        }}>
                        {priceText}
                    </Text>
                </View>
            </View>
        </CardBase>
    )
}

export const BlogCard = ({headerText, contentText, cardColor, imgSource}) => {
    return (
        <CardBase 
            width="80%"
            height={250}
            cardColor={cardColor}
        >
            <View style={{flex: 1}}>
                <View style={{height: 100}}>
                    <Image 
                        source={{uri: imgSource}}
                        style={{
                            width: '100%',
                            height: '100%'
                        }}
                        resizeMode='cover'
                    />
                </View>
                <View style={{minHeight: 50, width: '100%'}}>
                    <View style={{flex: 1, marginTop: 8}}>
                        <Text 
                            style={{
                                fontWeight: 'bold', 
                                color: '#573753', 
                                fontSize: 16,
                                marginLeft: 20,
                                width: '84%',
                            }}>
                            {headerText}
                        </Text>
                    </View>
                </View>
                <View style={{flex: 1}}>
                <Text 
                    style={{
                        color: '#573753', 
                        fontSize: 14,
                        marginLeft: 20,
                        fontWeight: '600',
                        width: '84%',
                    }}>
                    {contentText}
                </Text>
                </View>
            </View>
        </CardBase>
    )
}