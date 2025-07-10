import rank from "../../assets/rank.png"
import charge from "../../assets/charge.png"
import customer from "../../assets/customer.png"
import cart from "../../assets/cart.png"

export const salesData = [
    {
        id:1,
        icon:rank ,
        count:'$5K',
        title:'Total Sales',
        desc:"+10% from yesterday",
        color:"#FEB95A"
    },
    {
        id:2,
        icon:charge ,
        count:500,
        title:'Total Order',
        desc:"+8% from yesterday",
        color:"#A9DFD8"
    },
    {
        id:3,
        icon:cart ,
        count:9,
        title:'Product Sold',
        desc:"+2% from yesterday",
        color:"#F2C8ED"
    },
    {
        id:4,
        icon:customer ,
        count:'12',
        title:'New Customer',
        desc:"+3% from yesterday",
        color:"#20AEF3"
    },
]

export const TopProductsData = [
    {
        id:1,
        name:'Home Decor Range',
        priority: 90,
        color:'#FEB95A'
    },
    {
        id:2,
        name:'Disney Princess Dress',
        priority: 80,
        color:'#A9dfd8'
    },
    {
        id:3,
        name:'Bathroom Essenials',
        priority: 60,
        color:'#28aeF3'
    },
    {
        id:4,
        name:'Apple Smartwatch',
        priority: 40,
        color:'#F2c8ed'
    },
]