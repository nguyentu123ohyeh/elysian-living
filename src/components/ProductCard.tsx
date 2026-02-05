 import { useState } from "react";
 import { Link } from "react-router-dom";
 import { Eye, Heart } from "lucide-react";
 import { Button } from "@/components/ui/button";
 import { Product } from "@/data/products";
 
 interface ProductCardProps {
   product: Product;
 }
 
 export function ProductCard({ product }: ProductCardProps) {
   const [isHovered, setIsHovered] = useState(false);
   const [isLiked, setIsLiked] = useState(false);
 
   const formatPrice = (price: number) => {
     return new Intl.NumberFormat("en-US", {
       style: "currency",
       currency: "USD",
       minimumFractionDigits: 0,
     }).format(price);
   };
 
   const truncateName = (name: string, maxLength: number = 50) => {
     if (name.length <= maxLength) return name;
     return name.substring(0, maxLength).trim() + "...";
   };
 
   return (
     <div
       className="group relative"
       onMouseEnter={() => setIsHovered(true)}
       onMouseLeave={() => setIsHovered(false)}
     >
       <Link to={`/products/${product.id}`} className="block">
         {/* Image Container */}
         <div className="relative aspect-square overflow-hidden rounded-lg bg-secondary">
           <img
             src={product.images[0]}
             alt={product.name}
             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
           />
           
           {/* Overlay on hover */}
           <div className={`absolute inset-0 bg-background/40 transition-opacity duration-300 ${
             isHovered ? "opacity-100" : "opacity-0"
           }`} />
 
           {/* Quick View Button */}
           <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
             isHovered ? "opacity-100" : "opacity-0"
           }`}>
             <Button
               variant="secondary"
               className="bg-background/90 hover:bg-background text-foreground backdrop-blur-sm"
             >
               <Eye className="h-4 w-4 mr-2" />
               Quick View
             </Button>
           </div>
 
           {/* Wishlist Button */}
           <button
             onClick={(e) => {
               e.preventDefault();
               setIsLiked(!isLiked);
             }}
             className={`absolute top-4 right-4 p-2 rounded-full transition-all duration-300 ${
               isLiked 
                 ? "bg-primary text-primary-foreground" 
                 : "bg-background/80 text-foreground hover:bg-primary hover:text-primary-foreground"
             } ${isHovered ? "opacity-100" : "opacity-0"}`}
           >
             <Heart className={`h-4 w-4 ${isLiked ? "fill-current" : ""}`} />
           </button>
 
           {/* Stock Badge */}
           {product.inStock && (
             <div className="absolute top-4 left-4">
               <span className="inline-block px-3 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-full">
                 In Stock
               </span>
             </div>
           )}
         </div>
 
         {/* Product Info */}
         <div className="mt-4 space-y-2">
           <h3 className="font-medium text-foreground line-clamp-2 leading-snug min-h-[2.75rem]">
             {truncateName(product.name, 60)}
           </h3>
           <p className="text-primary font-semibold">
             {formatPrice(product.price)}
           </p>
         </div>
       </Link>
     </div>
   );
 }