import Socials from "./Socials"

const ServicesData =[
    {
        id:1,
        img:"https://printify.com/wp-content/uploads/2019/01/instagram-icon.svg", 
    },
    {
        id:2,
        img:"https://printify.com/wp-content/uploads/2019/01/linkedin-icon.svg",
    },
    {
        id:3,
        img:"https://printify.com/wp-content/uploads/2019/01/reddit-icon.svg",
    },
    {
        id:4,
        img:"https://printify.com/wp-content/uploads/2019/01/youtube-icon.svg",
    },
    {
        id:5,
        img:"https://printify.com/wp-content/uploads/2023/02/Tiktok-1.svg",
    },
    {
        id:6,
        img:"https://printify.com/wp-content/uploads/2023/09/X-Logo-Green.svg",
    },
]

export default function SocialsCard() {
  return (
    <div>
        <div className="container">
        <Socials data= {ServicesData}/>
        </div>
    </div>

  )
}
