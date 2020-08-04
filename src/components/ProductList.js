import React from "react"
import { FlatList } from "react-native"
import { ProductCard, SliderCard, BlogCard} from "./ProductCards"
import { getState } from "../state/AppContext";
const ProductList = () => {
    const [{ activeData }] = getState()
    return (
        <FlatList
            data={activeData.items}
            keyExtractor={item => item.id}
            renderItem={ (data) => {
                console.log(data)
                if(activeData.type === "slider")
                {
                    return (
                        <SliderCard
                            cardColor="#fe5c19"
                            imgSource={data.item.image}
                        />
                    )
                }
                if(activeData.type === "product-box") {
                    return(
                        <ProductCard
                            headerText={data.item.name}
                            contentText=''
                            priceText={data.item.price + " " + data.item.currency}
                            cardColor="#81d3e1"
                            imgSource={data.item.image}
                        />
                    )
                }
                if(activeData.type === "last-blog-posts") {
                    return(
                        <BlogCard
                            headerText={data.item.title}
                            contentText={data.item.description}
                            cardColor="#ffc431"
                            imgSource={data.item.image}
                        />
                    )
                }
            }}
        />
    )
}

export default ProductList