import Carousel from "./ServicesCard"

const ServicesData =[
    {
        id:1,
        img:"https://printify.com/pfh/assets/legacy/custom-products.png",
        title:"CREATE",
        title2:" fulfilment",
        description:" Easily add your designs to a wide range of products using our free tools.",
        aosDelay:"0",
    },
    {
        id:2,
        img:"https://printify.com/pfh/assets/legacy/your-products.png",
        title:"SELL",
        title2:" fulfilment",
        description:"You choose the products, sale price, and where to sell",
        aosDelay:"200",
    },
    {
        id:3,
        img:"https://printify.com/pfh/assets/legacy/fullfillment.png",
        title:"WE HANDLE",
        title2:" fulfilment",
        description:" Once an order is placed, we automatically handle all the printing and delivery logistics ",
        aosDelay:"400",
    },
]

export default function Services() {
  return (
    <div>
        <div className="container">
        <Carousel items= {ServicesData}/>
        </div>
    </div>

  )
}
