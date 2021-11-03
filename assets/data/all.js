const allData = [
    {
        id: 1,
        category: "shoe",
        name: "Adidas F2",
        price: 90.00,
        description: "No description",
        image: require("../images/shoe/adidas.png")
    },
    {
        id: 2,
        name: "Mountain Bike T-Shirt",
        category: "shirt",
        price: 45.00,
        description: "Fits close to the body for fitted, slim silhouette. Smooth and comfortable lightweight jersey fabric.",
        image: require("../images/shirt/shirt(3).png")
    },
    {
        id: 3,
        name: "Nike",
        category: "shoe",
        price: 110.00,
        description: "Men's Fashion Sneakers with Traditional Lace-up Closure design ,tongue and heel pull tab helps with easy on and off, adjustable shoe width freely.",
        image: require("../images/shoe/nike.png")
    },
    {
        id: 4,
        name: "ServisHero T-Shirt",
        category: "shirt",
        price: 48.00,
        description: "Regular Fit,simple and casual, men basic t-shirt, undershirt for men.",
        image: require("../images/shirt/shirt(5).png")
    },
    {
        id: 5,
        name: "Vans",
        category: "shoe",
        price: 75.00,
        description: "These men's Low-top sneakers outsole specially equipped with anti-slip lines Grooves, which Strengthen the Shoes Ability of Anti-Skid and durability.",
        image: require("../images/shoe/vans2.png")
    },
    {
        id: 6,
        name: "High Heel",
        category: "shoe",
        price: 80.00,
        description: "Ladies high heel for that special occasion.",
        image: require("../images/shoe/fancy.png")
    },
    {
        id: 7,
        name: "RX Sunglass",
        category: "glasses",
        price: 45.00,
        description: "Casual frame design keeps you looking professional and stylish while working or taking a stroll on the beach.",
        image: require("../images/glasses/glass(4).png")
    },
    {
        id: 8,
        name: "Vans",
        category: "shoe",
        price: 85.00,
        description: "These men's Low-top sneakers outsole specially equipped with anti-slip lines Grooves, which Strengthen the Shoes Ability of Anti-Skid and durability.",
        image: require("../images/shoe/vans3.png")
    },
    {
        id: 9,
        name: "High Heel",
        category: "shoe",
        price: 70.00,
        description: "Ladies high heel for that special occasion.",
        image: require("../images/shoe/fancy2.png")
    },
    {
        id: 10,
        name: "Pyne S2",
        category: "shoe",
        price: 60.00,
        description: "Provide strong support and anti-reversal function make it safe for you to perform various movements.",
        image: require("../images/shoe/pyne2.png")
    },
    {
        id: 11,
        name: "Calvin Long Sleeve",
        category: "shirt",
        price: 55.00,
        description: "Soft cotton provides ultimate comfort. The fabric is on the medium-to-thin thickness level, not see through.",
        image: require("../images/shirt/shirt(6).png")
    },
    {
        id: 12,
        name: "Nike",
        category: "shoe",
        price: 90.00,
        description: "Men's Fashion Sneakers with Traditional Lace-up Closure design ,tongue and heel pull tab helps with easy on and off, adjustable shoe width freely.",
        image: require("../images/shoe/nike2.png")
    },
    {
        id: 13,
        name: "BALEAF Long Sleeve",
        category: "shirt",
        price: 38.00,
        description: "Thumbholes prevent sleeves from riding up and keep warm during cold weather activities.",
        image: require("../images/shirt/shirt(8).png")
    },
    {
        id: 14,
        name: "Vans",
        category: "shoe",
        price: 80.00,
        description: "These men's Low-top sneakers outsole specially equipped with anti-slip lines Grooves, which Strengthen the Shoes Ability of Anti-Skid and durability.",
        image: require("../images/shoe/vans.png")
    },
    {
        id: 15,
        name: "Pyne",
        category: "shoe",
        price: 70.00,
        description: "Provide strong support and anti-reversal function make it safe for you to perform various movements.",
        image: require("../images/shoe/pyne.png")
    },
    {
        id: 16,
        name: "Gildan T-Shirt",
        category: "shirt",
        price: 40.00,
        description: "Shoulder to shoulder covered seam for durability. Tubular rib collar for better stretch and recovery. Pull On Closure.",
        image: require("../images/shirt/shirt(4).png")
    },
    {
        id: 17,
        name: "Goodthreads Long Sleeve",
        category: "shirt",
        price: 34.00,
        description: "This weekend-perfect casual button-front shirt in plaid poplin features a special wash for a soft feel and maximum comfort.",
        image: require("../images/shirt/shirt(1).png")
    },
    {
        id: 18,
        name: "New York Yankees",
        category: "cap",
        price: 14.99,
        description: "Premium New York Yankee brand cap. Excellent fit on the head and air holes to allow your hair to breath.",
        image: require("../images/cap/cap(4).png"),
        color: "gray"
    },
    {
        id: 19,
        name: "New York Yankees",
        category: "cap",
        price: 14.99,
        description: "Premium New York Yankee brand cap. Excellent fit on the head and a nice way to up your lifestyle.",
        image: require("../images/cap/cap(5).png"),
        color: "#1e6a75"
    },
    {
        id: 20,
        name: "LifeArt Glasses",
        category: "glasses",
        price: 35.00,
        description: "Reflect and filter blue light, prevent color distortion, 7-layer anti-reflective coating to reflect and filter blue light, reduce eyestrain and sleep better.",
        image: require("../images/glasses/glass(10).png")
    },
    {
        id: 21,
        name: "Fashion Positive",
        category: "cap",
        price: 6.99,
        description: "Premium cap with adjustable strap for both men and women. Comfortable, , nice and neat stitches to compliment your everyday outfit.",
        image: require("../images/cap/cap(1).png"),
        color: "#bd1ad6"
    },
    {
        id: 22,
        name: "Obey",
        category: "cap",
        price: 9.99,
        description: "Premium Obey brand cap to suit your lifestyle. Up your game to the next level with Obey.",
        image: require("../images/cap/cap(2).png"),
        color: "black"
    },
    {
        id: 23,
        name: "Female Long Sleeve",
        category: "shirt",
        price: 30.00,
        description: "Boasts a slim cutting for a flattering silhouette, detail with figure contouring lines.",
        image: require("../images/shirt/shirt(7).png")
    },
    {
        id: 24,
        name: "Sports Men Capital",
        category: "cap",
        price: 8.99,
        description: "Men's sports cap with air holes and adjustable straps. Excellent option for a game on the field on a sunny day.",
        image: require("../images/cap/cap(7).png"),
        color: "gray"
    },
    {
        id: 25,
        name: "Nautica Long Sleeve",
        category: "shirt",
        price: 45.00,
        description: "Long sleeve performance oxford shirt with button down closure. Breathable moisture-wicking performance fabric.",
        image: require("../images/shirt/shirt(9).png")
    },
    {
        id: 26,
        name: "DAL Fashion",
        category: "cap",
        price: 7.99,
        description: "Strap type DAL brand cap. Comfortable on the head and nice looking too.",
        image: require("../images/cap/cap(3).png"),
        color: "black"
    },
    {
        id: 27,
        name: "BB Brand",
        category: "cap",
        price: 9.99,
        description: "High class fashion wear with adjustable straps. Brings the best look out of you.",
        image: require("../images/cap/cap(6).png"),
        color: "white"
    },
    {
        id: 28,
        name: "PFG",
        category: "cap",
        price: 9.99,
        description: "Premium Luke Combs sports cap. USA original. Perfect for a baseball game on a sunny thursday.",
        image: require("../images/cap/cap(8).png"),
        color: "red"
    },
    {
        id: 29,
        name: "Rights Brand",
        category: "cap",
        price: 9.99,
        description: "Put on a Trans Right cap and show support for the trans people. Everyone has rights.",
        image: require("../images/cap/cap(9).png"),
        color: "black"
    },
    {
        id: 30,
        name: "Cil Long Sleeve",
        category: "shirt",
        price: 28.00,
        description: "Made in our Signature Tumbled Cotton for a soft, yet sturdy, hand. We utilize a unique Heritage Wash to give our garments a custom, lived-in feel right away.",
        image: require("../images/shirt/shirt(2).png")
    },
    {
        id: 31,
        name: "HNY T-Shirt",
        category: "shirt",
        price: 25.00,
        description: "UA Tech fabric is quick-drying, ultra-soft & has a more natural feel. Material wicks sweat & dries really fast.",
        image: require("../images/shirt/shirt(10).png")
    },
    {
        id: 32,
        name: "Reebok",
        category: "cap",
        price: 9.99,
        description: "Premium Reebok sports wear to style up your life. Get Reebok, start looking good.",
        image: require("../images/cap/cap(10).png"),
        color: "#233d5c"
    },
    {
        id: 33,
        name: "LifeArt Blue Light Blocking Glasses",
        category: "glasses",
        price: 30.00,
        description: "Reflect and filter blue light, prevent color distortion, 7-layer anti-reflective coating to reflect and filter blue light, reduce eyestrain and sleep better.",
        image: require("../images/glasses/glass(1).png")
    },
    {
        id: 34,
        name: "LifeArt Blue Light Blocking Glasses",
        category: "glasses",
        price: 25.00,
        description: "35% ANTI-BLUE LIGHT.Can effectively block harmful blue light from TV, mobile phone, computer, etc. Beneficial blue light can pass through.",
        image: require("../images/glasses/glass(2).png")
    },
    {
        id: 35,
        name: "Reading Glasses",
        category: "glasses",
        price: 45.00,
        description: "Classic shape fashion frame reading glasses updated with a fun and colorful design for a fresh look. Universal size fits most face shapes.",
        image: require("../images/glasses/glass(3).png")
    },
    {
        id: 36,
        name: "Safety Goggles",
        category: "glasses",
        price: 30.00,
        description: "Smartly aligned ventilation slots, which are covered by the lens, ensure good airflow and prevent flying particles from entering the inside of the goggles.",
        image: require("../images/glasses/glass(5).png")
    },
    {
        id: 37,
        name: "Reading Glasses",
        category: "glasses",
        price: 45.00,
        description: "Classic shape fashion frame reading glasses updated with a fun and colorful design for a fresh look. Universal size fits most face shapes.",
        image: require("../images/glasses/glass(6).png")
    },
    {
        id: 38,
        name: "FM23 Sunglass",
        category: "glasses",
        price: 25.00,
        description: "Casual frame design keeps you looking professional and stylish while working or taking a stroll on the beach.",
        image: require("../images/glasses/glass(7).png")
    },
    {
        id: 39,
        name: "Light Blocking Glasses",
        category: "glasses",
        price: 30.00,
        description: "Blue blockers can filter blue light which emitted from PC, laptop and phone screens. Blue lens works perfectly on reflecting blue ray & harmful radiation waves including UV400 and that is human eyes protector.",
        image: require("../images/glasses/glass(8).png")
    },
    {
        id: 40,
        name: "Idov M3 Sunglass",
        category: "glasses",
        price: 45.00,
        description: "Classic square frame design, ultra-lightweight, universal size fits most face shapes.",
        image: require("../images/glasses/glass(9).png")
    },
]

export default allData;