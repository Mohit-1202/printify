import Featurescard from "./Featurescard"

const FeatuersData =[
    {
        id:1,
        img:"https://printify.com/pfh/assets/legacy/higher-profits.svg",
        title:"Higher Profits",
        description:"We offer some of the lowest prices in the industry because print providers continuously compete to win your business.",
        aosDelay:"0",
    },
    {
        id:2,
        img:"https://printify.com/pfh/assets/legacy/robust-scaling.svg",
        title:"Robust Scaling",
        description:"Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality",
        aosDelay:"200",
    },
    {
        id:3,
        img:"https://printify.com/pfh/assets/legacy/best-selection.svg",
        title:"Best Selection",
        description:"With 900+ products and top quality brands, you can choose the best products for your business",
        aosDelay:"400",
    },
]

export default function Feature() {
  return (
    <div>
        <div className="container">
        <Featurescard data= {FeatuersData}/>
        </div>
    </div>

  )
}
