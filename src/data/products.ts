import img1 from "@/assets/img/1.jpg";
import img1_1 from "@/assets/img/1.1.jpg";
import img1_2 from "@/assets/img/1.2.jpg";
import img1_3 from "@/assets/img/1.3.jpg";
import img2 from "@/assets/img/2.jpg";
import img2_1 from "@/assets/img/2.1.jpg";
import img2_2 from "@/assets/img/2.2.jpg";
import img2_3 from "@/assets/img/2.3.jpg";
import img3 from "@/assets/img/3.jpg";
import img3_1 from "@/assets/img/3.1.jpg";
import img3_2 from "@/assets/img/3.2.jpg";
import img3_3 from "@/assets/img/3.3.jpg";
import img4 from "@/assets/img/4.jpg";
import img4_1 from "@/assets/img/4.1.jpg";
import img4_2 from "@/assets/img/4.2.jpg";
import img4_3 from "@/assets/img/4.3.jpg";
import img5 from "@/assets/img/5.jpg";
import img5_1 from "@/assets/img/5.1.jpg";
import img5_2 from "@/assets/img/5.2.jpg";
import img5_3 from "@/assets/img/5.3.jpg";

import img6 from "@/assets/img/6.jpg";
import img6_1 from "@/assets/img/6.1.jpg";
import img6_2 from "@/assets/img/6.2.jpg";
import img6_3 from "@/assets/img/6.3.jpg";

import img7 from "@/assets/img/7.jpg";
import img7_1 from "@/assets/img/7.1.jpg";
import img7_2 from "@/assets/img/7.2.jpg";
import img7_3 from "@/assets/img/7.3.jpg";

import img8 from "@/assets/img/8.jpg";
import img8_1 from "@/assets/img/8.1.jpg";
import img8_2 from "@/assets/img/8.2.jpg";
import img8_3 from "@/assets/img/8.3.jpg";

import img9 from "@/assets/img/9.jpg";
import img9_1 from "@/assets/img/9.1.jpg";
import img9_2 from "@/assets/img/9.2.jpg";
import img9_3 from "@/assets/img/9.3.jpg";

import img10 from "@/assets/img/10.jpg";
import img10_1 from "@/assets/img/10.1.jpg";
import img10_2 from "@/assets/img/10.2.jpg";
import img10_3 from "@/assets/img/10.3.jpg";

import img11 from "@/assets/img/11.jpg";
import img11_1 from "@/assets/img/11.1.jpg";
import img11_2 from "@/assets/img/11.2.jpg";
import img11_3 from "@/assets/img/11.3.jpg";

import img12 from "@/assets/img/12.jpg";
import img12_1 from "@/assets/img/12.1.jpg";
import img12_2 from "@/assets/img/12.2.jpg";
import img12_3 from "@/assets/img/12.3.jpg";

import img13 from "@/assets/img/13.jpg";
import img13_1 from "@/assets/img/13.1.jpg";
import img13_2 from "@/assets/img/13.2.jpg";
import img13_3 from "@/assets/img/13.3.jpg";

import img14 from "@/assets/img/14.jpg";
import img14_1 from "@/assets/img/14.1.jpg";
import img14_2 from "@/assets/img/14.2.jpg";
import img14_3 from "@/assets/img/14.3.jpg";

import img15 from "@/assets/img/15.jpg";
import img15_1 from "@/assets/img/15.1.jpg";
import img15_2 from "@/assets/img/15.2.jpg";
import img15_3 from "@/assets/img/15.3.jpg";

import img16 from "@/assets/img/16.jpg";
import img16_1 from "@/assets/img/16.1.jpg";
import img16_2 from "@/assets/img/16.2.jpg";
import img16_3 from "@/assets/img/16.3.jpg";

import img17 from "@/assets/img/17.jpg";
import img17_1 from "@/assets/img/17.1.jpg";
import img17_2 from "@/assets/img/17.2.jpg";
import img17_3 from "@/assets/img/17.3.jpg";

import img18 from "@/assets/img/18.jpg";
import img18_1 from "@/assets/img/18.1.jpg";
import img18_2 from "@/assets/img/18.2.jpg";
import img18_3 from "@/assets/img/18.3.jpg";
 
 export interface Product {
   id: string;
   name: string;
   price: number;
   description: string;
   category: string;
   inStock: boolean;
   images: string[];
   features: string[];
   specifications: {
     material: string;
     dimensions: string;
     origin: string;
     weight?: string;
     color?: string;
   };
 }
 
 export const products: Product[] = [
   {
     id: "1",
     name: "Aria Marble Coffee Table with Champagne Gold Base",
     price: 135.25,
     description: "A stunning centerpiece for any living room, the Aria Coffee Table features a polished Calacatta marble top paired with a sculptural champagne gold base. The organic veining of the marble ensures each piece is unique, while the warm metallic finish adds a touch of modern luxury.",
     category: "Tables",
     inStock: true,
     images: [img1, img1_1, img1_2, img1_3],
     features: [
       "Hand-selected Calacatta marble with unique veining",
       "Champagne gold powder-coated steel base",
       "Protective felt pads included",
       "Easy assembly with included tools",
       "Suitable for both residential and commercial spaces"
     ],
     specifications: {
       material: "Calacatta Marble, Powder-coated Steel",
       dimensions: "42\"W x 42\"D x 16\"H",
       origin: "Italy / USA",
       weight: "95 lbs",
       color: "White Marble / Champagne Gold"
     }
   },
   {
     id: "2",
     name: "Luxe Brass Floor Lamp with Linen Shade",
     price: 129.95,
     description: "Illuminate your space with understated elegance. The Luxe Floor Lamp combines a solid brass stem with a natural linen drum shade, creating warm ambient lighting that transforms any room into a sophisticated retreat.",
     category: "Lighting",
     inStock: true,
     images: [img2, img2_1, img2_2, img2_3],
     features: [
       "Solid brass construction with aged finish",
       "Premium linen shade diffuses light beautifully",
       "Adjustable height mechanism",
       "Compatible with smart bulbs",
       "UL listed for safety"
     ],
     specifications: {
       material: "Solid Brass, Natural Linen",
       dimensions: "18\"W x 18\"D x 62\"H",
       origin: "Portugal",
       weight: "18 lbs",
       color: "Aged Brass / Natural Linen"
     }
   },
   {
    id: "3",
    name: "Tall Corner Floor Lamps with Pull Chain Switch",
    price: 86.90,
    description: "Elevate your room's ambiance with this elegant corner floor lamp. Designed to fit perfectly in tight spaces, it features a warm, diffused glow that creates an inviting atmosphere. The classic pull-chain switch adds a touch of vintage charm while providing modern functionality for your daily lighting needs.",
    category: "Lighting",
    inStock: true,
    images: [img3, img3_1, img3_2, img3_3],
    features: [
        "Space-saving corner design for optimal room placement",
        "Dual-layered fabric shade for soft, eye-friendly illumination",
        "Classic metallic pull-chain switch for easy accessibility",
        "Sturdy weighted base to prevent tipping and ensure safety",
        "Compatible with smart LED bulbs and dimmers"
    ],
    specifications: {
        material: "Polished Steel, Premium Fabric Linen",
        dimensions: "10\"W x 10\"D x 65\"H",
        origin: "USA / Portugal",
        weight: "12 lbs",
        color: "Brushed Nickel / Soft White"
     }
   },
   {
     id: "4",
     name: "Emerald Velvet Accent Chair with Gold Legs",
     price: 369.95,
     description: "Sink into luxury with this sumptuous velvet accent chair. The deep emerald green upholstery adds a jewel-toned accent to your space, while the sculptural gold legs provide a stunning contrast that elevates any room.",
     category: "Seating",
     inStock: true,
     images: [img4, img4_1, img4_2, img4_3],
     features: [
       "High-density foam cushioning",
       "Stain-resistant velvet fabric",
       "Solid brass-finished legs",
       "Ergonomic lumbar support",
       "Weight capacity: 300 lbs"
     ],
     specifications: {
       material: "Velvet Upholstery, Brass-finished Steel",
       dimensions: "30\"W x 32\"D x 34\"H",
       origin: "Denmark",
       weight: "45 lbs",
       color: "Emerald Green / Gold"
     }
   },
   {
     id: "5",
     name: "Premium Cashmere Throw Blanket with Fringe",
     price: 208.89,
     description: "Experience unparalleled luxury with this 100% Grade A Cashmere throw. Exceptionally soft and lightweight, this blanket features traditional hand-finished fringes, adding a touch of timeless elegance to your sofa or bed.",
     category: "Textiles",
     inStock: true,
     images: [img5, img5_1, img5_2, img5_3],
     features: [
       "Made from 100% pure premium cashmere",
       "Hand-finished fringe detailing for a classic look",
       "Naturally hypoallergenic and temperature-regulating",
       "Lightweight yet incredibly warm for all seasons",
       "Includes a breathable storage bag"
     ],
     specifications: {
       material: "100% Mongolian Cashmere",
       dimensions: "50\"W x 60\"L",
       origin: "Scotland / Mongolia",
       weight: "1.5 lbs",
       color: "Natural Ivory / Champagne"
     }
   },
   {
     id: "6",
     name: "European-Style Damask Throws with Fringes Trim",
     price: 68.99,
     description: "Elevate your decor with this intricate European-inspired Damask throw. Featuring a rich jacquard weave and ornate fringe trim, it brings an air of royal sophistication and classical beauty to any interior setting.",
     category: "Textiles",
     inStock: true,
     images: [img6, img6_1, img6_2, img6_3],
     features: [
       "Ornate jacquard-woven damask pattern",
       "Luxurious fringe trim along the borders",
       "Durable fabric that maintains texture over time",
       "Classical European design aesthetic",
       "Machine washable on delicate cycle"
     ],
     specifications: {
       material: "Chenille Blend, Cotton",
       dimensions: "51\"W x 70\"L",
       origin: "Portugal",
       weight: "2.8 lbs",
       color: "Vintage Gold / Beige"
     }
   },
   {
     id: "7",
     name: "Modern Comfy Velvet Round Barrel Chair",
     price: 183.99,
     description: "Add a modern touch to your seating area with this stylish round barrel chair. Upholstered in premium velvet with high-density foam, it offers a cozy 'hug' feel while its sleek silhouette fits perfectly in contemporary spaces.",
     category: "Seating",
     inStock: true,
     images: [img7, img7_1, img7_2, img7_3],
     features: [
       "Ergonomic barrel design for maximum comfort",
       "Soft-touch, stain-resistant velvet upholstery",
       "Solid wood frame with reinforced metal legs",
       "Compact size perfect for corners or reading nooks",
       "Easy assembly within 15 minutes"
     ],
     specifications: {
       material: "Velvet, High-Density Foam, Pine Wood",
       dimensions: "28\"W x 26\"D x 30\"H",
       origin: "Vietnam / Denmark",
       weight: "32 lbs",
       color: "Emerald Green / Gold Legs"
     }
   },
   {
     id: "8",
     name: "Soft Fluffy Velvet Sofa Blanket with Decorative Vintage Pattern",
     price: 20.35,
     description: "This ultra-soft velvet blanket features a unique vintage-pressed pattern that adds texture and visual interest to your living room. Designed for all-season use, it provides warmth without being overly heavy.",
     category: "Textiles",
     inStock: true,
     images: [img8, img8_1, img8_2, img8_3],
     features: [
       "Double-sided soft velvet texture",
       "Unique vintage embossed decorative pattern",
       "Breathable fabric suitable for year-round comfort",
       "Anti-pilling and fade-resistant material",
       "Versatile use for couch, bed, or travel"
     ],
     specifications: {
       material: "100% Microfiber Velvet",
       dimensions: "50\"W x 60\"L",
       origin: "China",
       weight: "2.0 lbs",
       color: "Smoky Grey / Vintage Navy"
     }
   },
   {
     id: "9",
     name: "Lightweight Breathable Soft Throws Plush Fluffy Chevron Design",
     price: 28.16,
     description: "A modern classic, this plush throw features a stylish chevron weave that adds a pop of texture to your home. Its lightweight, breathable design makes it the perfect companion for cool summer evenings or cozy winter layering.",
     category: "Textiles",
     inStock: true,
     images: [img9, img9_1, img9_2, img9_3],
     features: [
       "Trendy chevron textured design",
       "Plush and fluffy finish for extra comfort",
       "Highly breathable lightweight construction",
       "Reinforced stitching for long-lasting durability",
       "Hypoallergenic synthetic fibers"
     ],
     specifications: {
       material: "Polyester Plush Blend",
       dimensions: "60\"W x 80\"L",
       origin: "China",
       weight: "1.8 lbs",
       color: "Cloud White / Mist Blue"
     }
   },
   {
     id: "10",
     name: "Gold and White Pillow Covers (Set of 2)",
     price: 26.56,
     description: "Instantly refresh your sofa with these high-end pillow covers. The elegant combination of crisp white fabric and metallic gold accents creates a luxurious look that complements any modern decor style.",
     category: "Decor",
     inStock: true,
     images: [img10, img10_1, img10_2, img10_3],
     features: [
       "Set of two matching decorative covers",
       "Hidden zipper design for a seamless finish",
       "High-quality fabric with gold foil detailing",
       "Reinforced seams for everyday use",
       "Easy to change and machine washable"
     ],
     specifications: {
       material: "Cotton Canvas, Metallic Foil",
       dimensions: "18\"W x 18\"H",
       origin: "Turkey",
       weight: "0.5 lbs",
       color: "Arctic White / Bright Gold"
     }
   },
   {
     id: "11",
     name: "Gold Sofa Couch Throw Pillows Covers Cases",
     price: 26.48,
     description: "Bold and beautiful, these gold pillow covers are designed to be the statement piece of your living room. The rich texture and metallic sheen add a layer of warmth and luxury to your seating arrangement.",
     category: "Decor",
     inStock: true,
     images: [img11, img11_1, img11_2, img11_3],
     features: [
       "Lustrous metallic gold finish",
       "Soft interior lining for comfort",
       "Durable zipper closure for easy insertion",
       "Ideal for living rooms, bedrooms, or offices",
       "Fade-resistant and long-lasting fabric"
     ],
     specifications: {
       material: "Synthetic Silk, Polyester",
       dimensions: "20\"W x 20\"H",
       origin: "India",
       weight: "0.6 lbs",
       color: "Solid Metallic Gold"
     }
   },
   {
     id: "12",
     name: "Coffee Table Faux Marble Nesting Table",
     price: 78.69,
     description: "Maximize your space with this versatile nesting table set. Featuring a realistic faux marble top and a gold-finished frame, these tables can be used together for a layered look or separately for added functionality.",
     category: "Tables",
     inStock: true,
     images: [img12, img12_1, img12_2, img12_3],
     features: [
       "Space-saving nesting design",
       "Waterproof and scratch-resistant faux marble",
       "Sturdy metal frame with non-slip foot pads",
       "Lightweight and easy to move",
       "Contemporary geometric aesthetic"
     ],
     specifications: {
       material: "MDF with Marble Laminate, Steel",
       dimensions: "Large: 24\"D, Small: 18\"D",
       origin: "China / USA",
       weight: "22 lbs",
       color: "White Faux Marble / Gold"
     }
   },
   {
     id: "13",
     name: "Clear Glass Top and White Marble Round Coffee Table",
     price: 156.99,
     description: "A masterpiece of modern design, this coffee table combines the airy feel of a clear glass top with the solid elegance of a white marble base. The dual-layered look provides extra shelf space while maintaining a minimalist footprint.",
     category: "Tables",
     inStock: true,
     images: [img13, img13_1, img13_2, img13_3],
     features: [
       "Tempered glass top for safety and durability",
       "Integrated lower marble shelf for storage",
       "Sleek round design prevents accidental bumps",
       "Easy to clean surfaces",
       "Minimalist aesthetic that complements any rug"
     ],
     specifications: {
       material: "Tempered Glass, Carrara Marble, Chrome",
       dimensions: "36\"W x 36\"D x 18\"H",
       origin: "Italy",
       weight: "58 lbs",
       color: "Clear / White Marble"
     }
   },
   {
     id: "14",
     name: "3 Lights Arc Floor Lamps",
     price: 89.99,
     description: "A dramatic addition to any large living area, this 3-light arc lamp features sweeping arms that distribute light evenly over a sectional sofa or dining table. Its modern silhouette provides both overhead illumination and a sophisticated sculptural element.",
     category: "Lighting",
     inStock: true,
     images: [img14, img14_1, img14_2, img14_3],
     features: [
       "Triple-arc design for wide-reaching illumination",
       "Adjustable lamp heads for precision lighting",
       "Heavy marble base for maximum stability",
       "Rotary switch with multi-light settings",
       "Contemporary brushed metal finish"
     ],
     specifications: {
       material: "Brushed Steel, Marble Base",
       dimensions: "45\"W x 45\"D x 84\"H",
       origin: "USA",
       weight: "35 lbs",
       color: "Satin Nickel / Black Marble"
     }
   },
   {
     id: "15",
     name: "Mid Century Floor Lamp with White Fabric Shade",
     price: 76.69,
     description: "Channel vintage aesthetics with this Mid-Century modern floor lamp. Featuring a tripod wood-look base and a crisp white linen drum shade, it offers a warm, nostalgic glow that perfectly complements retro and contemporary interiors alike.",
     category: "Lighting",
     inStock: true,
     images: [img15, img15_1, img15_2, img15_3],
     features: [
       "Classic tripod base inspired by 1950s design",
       "Natural linen drum shade for soft diffusion",
       "Sturdy construction with a minimalist footprint",
       "Foot-pedal power switch for convenience",
       "Warm wood-grain finish on metal legs"
     ],
     specifications: {
       material: "Metal with Wood Grain Finish, Linen",
       dimensions: "18\"W x 18\"D x 60\"H",
       origin: "China / Portugal",
       weight: "14 lbs",
       color: "Walnut / White"
     }
   },
   {
     id: "16",
     name: "Resin Farmhouse Floor Lamp with Adjustable Color Temperatures",
     price: 98.99,
     description: "Combining rustic charm with modern tech, this farmhouse-style lamp is crafted from textured resin to mimic aged wood. The integrated smart LED system allows you to cycle through three color temperatures to match the time of day.",
     category: "Lighting",
     inStock: true,
     images: [img16, img16_1, img16_2, img16_3],
     features: [
       "Three color temperature modes (Warm, Neutral, Daylight)",
       "Artisan-crafted resin base with farmhouse texture",
       "Energy-efficient LED bulb included",
       "Adjustable brightness settings",
       "Timeless spindle design"
     ],
     specifications: {
       material: "Hand-painted Resin, Fabric Shade",
       dimensions: "15\"W x 15\"D x 63\"H",
       origin: "USA / Vietnam",
       weight: "16 lbs",
       color: "Antique White / Distressed Wood"
     }
   },
   {
     id: "17",
     name: "Century Modern Chair with Pillow Linen Fabric Upholstered",
     price: 169.99,
     description: "Relax in style with this lounge chair featuring extra-plush pillow cushioning. Upholstered in breathable linen fabric and supported by an angled wooden frame, it's the ultimate spot for reading or unwinding after a long day.",
     category: "Seating",
     inStock: true,
     images: [img17, img17_1, img17_2, img17_3],
     features: [
       "Overstuffed pillow cushions for superior comfort",
       "Breathable and durable linen upholstery",
       "Mid-Century angled solid wood frame",
       "Ergonomic back support",
       "Includes matching lumbar pillow"
     ],
     specifications: {
       material: "Solid Oak, Linen, High-Density Foam",
       dimensions: "30\"W x 34\"D x 32\"H",
       origin: "Denmark",
       weight: "40 lbs",
       color: "Light Grey / Natural Oak"
     }
   },
   {
     id: "18",
     name: "Tufted Upholstered Lounge Chair",
     price: 154.69,
     description: "This elegant lounge chair features classic button-tufting and a high back for a sophisticated, executive look. The deep-seated design and velvet-touch fabric offer a luxurious feel that anchors any living room or home office corner.",
     category: "Seating",
     inStock: true,
     images: [img18, img18_1, img18_2, img18_3],
     features: [
       "Elegant diamond button-tufted backrest",
       "Sophisticated rolled arms for a classic look",
       "Premium upholstery with high-resilience foam",
       "Dark-stained solid wood legs",
       "Stain-resistant fabric for easy maintenance"
     ],
     specifications: {
       material: "Soft Velvet-Blend, Birch Wood",
       dimensions: "32\"W x 30\"D x 36\"H",
       origin: "Vietnam / France",
       weight: "38 lbs",
       color: "Charcoal Blue / Espresso Legs"
     }
   }
 ];
 
 export const getProductById = (id: string): Product | undefined => {
   return products.find(product => product.id === id);
 };
 
 export const getProductsByCategory = (category: string): Product[] => {
   return products.filter(product => product.category === category);
 };
 
 export const categories = [...new Set(products.map(p => p.category))];