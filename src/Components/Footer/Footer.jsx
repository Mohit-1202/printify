import FooterCard from "./FooterCard"

const integration = [
    "Shopify",
    "Etsy",
    "eBay",
    "Amazon",
    "TikTok Shop",
    "PrestaShop",
    "BigCommerce",
    "Wix",
    "WooCommerce",
    "Squarespace",
    "Printify API",
    "Printify Pop-Up Store",
    "Shutterstock"
  ];
  const Discover=[
    'Blog',
    "Guides",
    'Products',
    'Etsy print-on-demand',
    'Shopify print-on-demand',
    "Woocommerce print-on-demand",
    "Wix print-on-demand",
    "Squarespace print-on-demand",
    "Make Your Own Shirt",
   " Brands",
    "Pricing",
   "Shipping Rates",
    "Mockup Generator"

  ]
  const startSelling = [
    "Custom T-shirts",
    "Custom Hoodies",
    "Custom Mugs",
    "Custom Socks",
    "Custom Backpacks",
    "Custom Branding",
    "Sell on Etsy",
    "Sell on Social Media",
    "Free T-shirt Designs",
    "Custom Products",
    "Custom All-Over-Print Hoodies",
    "Start a Clothing Line",
    "Start POD Business",
    "Bulk Orders",
    "Transferring To Printify"
  ];
  const Printify = [
    "Print on Demand",
    "Print Providers",
    "Experts Program",
    "Printify Express Delivery",
    "Become a Partner",
    "About",
    "Printify Quality Promise",
    "Jobs",
    "Webinars",
    "Printing Profits Podcast",
    "Contact Us",
    "Affiliate",
    "Contact Sales",
    "POD Glossary",
    "Network Fulfillment Status",
    "Merchant Protection",
    "Security",
    "Sitemap",
  ];
  

export default function Footer() {
  return (
    <div>
        <div className="container">
        <FooterCard integration= {integration} Discover={Discover} startSelling={startSelling} Printify={Printify} />
        </div>
    </div>

  )
}
