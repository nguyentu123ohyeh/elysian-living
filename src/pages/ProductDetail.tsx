 import { useParams, Link } from "react-router-dom";
 import { ArrowLeft, Check, Truck, Shield, RotateCcw } from "lucide-react";
 import { Layout } from "@/components/Layout";
 import { Button } from "@/components/ui/button";
 import { Badge } from "@/components/ui/badge";
 import { Separator } from "@/components/ui/separator";
 import { getProductById } from "@/data/products";
 import { useState } from "react";
 
 const ProductDetail = () => {
   const { id } = useParams<{ id: string }>();
   const product = getProductById(id || "");
   const [selectedImage, setSelectedImage] = useState(0);
 
   const formatPrice = (price: number) => {
     return new Intl.NumberFormat("en-US", {
       style: "currency",
       currency: "USD",
       minimumFractionDigits: 0,
     }).format(price);
   };
 
   if (!product) {
     return (
       <Layout>
         <div className="container mx-auto px-4 lg:px-8 py-20">
           <div className="text-center">
             <h1 className="text-2xl font-display font-semibold mb-4">Product Not Found</h1>
             <p className="text-muted-foreground mb-8">
               The product you're looking for doesn't exist or has been removed.
             </p>
             <Button asChild>
               <Link to="/products">
                 <ArrowLeft className="mr-2 h-4 w-4" />
                 Back to Products
               </Link>
             </Button>
           </div>
         </div>
       </Layout>
     );
   }
 
   return (
     <Layout>
       <div className="py-8 lg:py-16">
         <div className="container mx-auto px-4 lg:px-8">
           {/* Breadcrumb */}
           <nav className="mb-8">
             <ol className="flex items-center gap-2 text-sm text-muted-foreground">
               <li>
                 <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
               </li>
               <li>/</li>
               <li>
                 <Link to="/products" className="hover:text-foreground transition-colors">Products</Link>
               </li>
               <li>/</li>
               <li className="text-foreground">{product.category}</li>
             </ol>
           </nav>
 
           {/* Product Layout */}
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
             {/* Left Column - Images */}
             <div className="space-y-4">
               {/* Main Image */}
               <div className="aspect-square rounded-lg overflow-hidden bg-secondary">
                 <img
                   src={product.images[selectedImage]}
                   alt={product.name}
                   className="w-full h-full object-cover"
                 />
               </div>
 
               {/* Thumbnails */}
               <div className="grid grid-cols-4 gap-4">
                 {product.images.map((image, index) => (
                   <button
                     key={index}
                     onClick={() => setSelectedImage(index)}
                     className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                       selectedImage === index
                         ? "border-primary"
                         : "border-transparent hover:border-border"
                     }`}
                   >
                     <img
                       src={image}
                       alt={`${product.name} view ${index + 1}`}
                       className="w-full h-full object-cover"
                     />
                   </button>
                 ))}
               </div>
             </div>
 
             {/* Right Column - Info */}
             <div className="space-y-8">
               <div>
                 <Badge variant="secondary" className="mb-4 bg-accent text-accent-foreground">
                   {product.inStock ? "In Stock" : "Out of Stock"}
                 </Badge>
                 <h1 className="text-3xl lg:text-4xl font-display font-semibold mb-4">
                   {product.name}
                 </h1>
                 <p className="text-3xl font-semibold text-primary">
                   {formatPrice(product.price)}
                 </p>
               </div>
 
               <p className="text-muted-foreground leading-relaxed">
                 {product.description}
               </p>
 
               {/* Action Buttons */}
               <div className="flex flex-col sm:flex-row gap-4">
                 <Button asChild size="lg" className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
                   <Link to="/contact">
                     Contact Us
                   </Link>
                 </Button>
                 <Button asChild variant="outline" size="lg" className="flex-1">
                   <Link to="/products">
                     <ArrowLeft className="mr-2 h-4 w-4" />
                     Back to Products
                   </Link>
                 </Button>
               </div>
 
               {/* Benefits */}
               <div className="grid grid-cols-3 gap-4 py-6 border-y border-border">
                 <div className="text-center">
                   <Truck className="h-6 w-6 mx-auto mb-2 text-primary" />
                   <p className="text-xs text-muted-foreground">Free Delivery</p>
                 </div>
                 <div className="text-center">
                   <Shield className="h-6 w-6 mx-auto mb-2 text-primary" />
                   <p className="text-xs text-muted-foreground">5-Year Warranty</p>
                 </div>
                 <div className="text-center">
                   <RotateCcw className="h-6 w-6 mx-auto mb-2 text-primary" />
                   <p className="text-xs text-muted-foreground">30-Day Returns</p>
                 </div>
               </div>
 
               {/* Design Features */}
               <div>
                 <h3 className="text-lg font-display font-semibold mb-4">Design Features</h3>
                 <ul className="space-y-3">
                   {product.features.map((feature, index) => (
                     <li key={index} className="flex items-start gap-3">
                       <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                       <span className="text-muted-foreground">{feature}</span>
                     </li>
                   ))}
                 </ul>
               </div>
 
               <Separator />
 
               {/* Specifications */}
               <div>
                 <h3 className="text-lg font-display font-semibold mb-4">Specifications</h3>
                 <table className="w-full">
                   <tbody className="divide-y divide-border">
                     <tr>
                       <td className="py-3 text-muted-foreground">Material</td>
                       <td className="py-3 text-right font-medium">{product.specifications.material}</td>
                     </tr>
                     <tr>
                       <td className="py-3 text-muted-foreground">Dimensions</td>
                       <td className="py-3 text-right font-medium">{product.specifications.dimensions}</td>
                     </tr>
                     <tr>
                       <td className="py-3 text-muted-foreground">Origin</td>
                       <td className="py-3 text-right font-medium">{product.specifications.origin}</td>
                     </tr>
                     {product.specifications.weight && (
                       <tr>
                         <td className="py-3 text-muted-foreground">Weight</td>
                         <td className="py-3 text-right font-medium">{product.specifications.weight}</td>
                       </tr>
                     )}
                     {product.specifications.color && (
                       <tr>
                         <td className="py-3 text-muted-foreground">Color</td>
                         <td className="py-3 text-right font-medium">{product.specifications.color}</td>
                       </tr>
                     )}
                   </tbody>
                 </table>
               </div>
             </div>
           </div>
         </div>
       </div>
     </Layout>
   );
 };
 
 export default ProductDetail;