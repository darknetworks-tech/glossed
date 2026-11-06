import { benefitIcon1,
         benefitIcon3,
         benefitIcon4,
         benefitIcon5,
         benefitIcon6,
         benefitCard1,
         benefitCard2,
         benefitCard3,
         benefitCard4,
         benefitCard5,
         benefitCard6,
        benefitImage,
        clear,
        HotPink,
        Lipliner,
        Pink1,
        Pink2,
        Red,
        Unpigmented,
        Brown,
        instagram,
        snapchat,
        twitter,



 } from "../assets";



export const navigation = [
    {
        id: "0",
        title: 'Features',
        url:'#features',
    },
    {
        id: "1",
        title: 'Pricing',
        url:'#pricing',

    },
    {
        id: "2",
        title: 'Shop',
        url:'#shop',
    },
    {
        id:"3",
        title: 'How-to-use',
        url:'#how-to-use',
    },
    {
        id: "4",
        title: 'New account',
        url:'#signup',
        onlyMobile:true,
    },
    {
        id: "5",
        title: 'Sign in',
        url:'#login',
        onlyMobile:true,
    },
];

export const benefits= [
    {
        id:"0",
        title:"Gloss that Lasts",
        text:"Smooth,non sticky shine that keeps your lips radiant for hours",
        backgroundUrl:benefitCard1,
        iconUrl:benefitIcon5,
        imageUrl:benefitImage,

        
    },
     {
        id:"1",
        title:"Premium ingredients",
        text:"Nourishing ingredients that keep your lips soft, hydrated,and healthy",
        backgroundUrl:benefitCard2,
        iconUrl:benefitIcon4,
        imageUrl:benefitImage,
        light:true,
        
    },
     {
        id:"2",
        title:"Shades for Everyone",
        text:"From subtle nudes to bold statements, there's a shade for every you",
        backgroundUrl:benefitCard3,
        iconUrl:benefitIcon3,
        imageUrl:benefitImage,
        
    },
     {
        id:"3",
        title:"Luminous Finish",
        text:"Achieve a high shine,glass like glow that enhances your natural color without any sticky residue.",
        backgroundUrl:benefitCard4,
        iconUrl:benefitIcon1,
        imageUrl:benefitImage,
        light:true,
        
    },
     {
        id:"4",
        title:"Long-Lasting Wear",
        text:"Designed to stay vibrant, flawless,and comfortable from your morning coffee to your evening out.",
        backgroundUrl:benefitCard5,
        iconUrl:benefitIcon5,
        imageUrl:benefitImage,
        
    },
     {
        id:"5",
        title:"Deep Hydration",
        text:"Formulated with nourishing,active ingredients to lock in moisture and keep your lips hydrated all day.",
        backgroundUrl:benefitCard6,
        iconUrl:benefitIcon6,
        imageUrl:benefitImage,

        
    },
]

export const glossedServices=[
    "The Lip Gloss: The High-Shine Glaze",
    "The Lip Oil: The Hydration Halo",
    "The Lip Liner: The Sculpting Velvet",
    "The Gift Sets"
]

export const products = [
    {
        id:"0",
        title:"Clear Gloss",
        text:"Lip Gloss",
        price:"₦4000",
        image: clear


    },
    {
        id:"1",
        title:"Hot Pink Gloss",
        text:"Lip Gloss",
        price:"₦4000",
        image: HotPink,

    },
    {
        id:"2",
        title:"Baby Pink Gloss",
        text:"Lip Gloss",
        price:"₦4000",
        image:Pink1,

    },
    {
        id:"3",
        title:"Fuschia Pink Gloss",
        text:"Lip Gloss",
        price:"₦4000",
        image:Pink2,

    },
    {
        id:"5",
        title:"Brown Gloss",
        text:"Lip Gloss",
        price:"₦4000",
        image:Brown,

    },
    {
        id:"6",
        title:"Nude Gloss",
        text:"Lip Gloss",
        price:"₦4000",
        image:clear,

    },
    {
        id:"7",
        title:"Red Gloss",
        text:"Lip Gloss",
        price:"₦4000",
        image:Red,

    },
    {
        id:"8",
        title:"Unpigmented Pink Gloss",
        text:"Lip Gloss",
        price:"₦4000",
        image:Unpigmented,

    },
    {
        id:"9",
        title:"Liquid Gas",
        text:"Lip Oil",
        price:"₦4000",
        image:Lipliner

    },
    {
        id:"10",
        title:"Roll Up Liner-Brown",
        text:"Lip Liner",
        price:"₦4000",
        image:Lipliner

    },
    {
        id:"11",
        title:"Roll Up Liner-Wine",
        text:"Lip Liner",
        price:"₦4000",
        image:Lipliner

    },
]

export const pricing = [

    {
        id:"0",
        title:"Sun Kissed Collection",
        text:"You deserve soft lips, glossy shine, and all the confidence in the world.",
        price:"18,000",
        features:[
            "A universally flattering, warm caramel nude with a non-sticky glass finish.",
            "A limited-run, multi-dimensional berry gloss infused with ultra-fine rose gold pearl.",
            "Your go-to high-shine clear topper, packed with nourishing vitamin E"
            
        ],

    },
]

export const socials= [
    {
    id: "1",
    title: "X",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id:"4",
    title:"Snapchat",
    iconUrl:snapchat,
    url:"#",
  }
]