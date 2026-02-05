 import { useState } from "react";
 import { Layout } from "@/components/Layout";
 import { ProductCard } from "@/components/ProductCard";
 import { products, categories } from "@/data/products";
 import { Button } from "@/components/ui/button";
 
 const Products = () => {
   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
 
   const filteredProducts = selectedCategory
     ? products.filter((p) => p.category === selectedCategory)
     : products;
 
   return (
     <Layout>
       <div className="py-12 lg:py-20">
         <div className="container mx-auto px-4 lg:px-8">
           {/* Header */}
           <div className="text-center mb-12">
             <span className="text-primary font-medium tracking-widest text-sm uppercase">
               Shop
             </span>
             <h1 className="text-4xl md:text-5xl font-display font-semibold mt-4 mb-6">
               Our Collection
             </h1>
             <p className="text-muted-foreground max-w-2xl mx-auto">
               Browse our carefully curated selection of luxury furniture and home decor. 
               Each piece is chosen for its exceptional quality and timeless appeal.
             </p>
           </div>
 
           {/* Category Filter */}
           <div className="flex flex-wrap justify-center gap-3 mb-12">
             <Button
               variant={selectedCategory === null ? "default" : "outline"}
               onClick={() => setSelectedCategory(null)}
               className={selectedCategory === null ? "bg-primary text-primary-foreground" : ""}
             >
               All
             </Button>
             {categories.map((category) => (
               <Button
                 key={category}
                 variant={selectedCategory === category ? "default" : "outline"}
                 onClick={() => setSelectedCategory(category)}
                 className={selectedCategory === category ? "bg-primary text-primary-foreground" : ""}
               >
                 {category}
               </Button>
             ))}
           </div>
 
           {/* Products Grid */}
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
             {filteredProducts.map((product, index) => (
               <div
                 key={product.id}
                 className="animate-slide-up"
                 style={{ animationDelay: `${index * 50}ms` }}
               >
                 <ProductCard product={product} />
               </div>
             ))}
           </div>
 
           {filteredProducts.length === 0 && (
             <div className="text-center py-16">
               <p className="text-muted-foreground">No products found in this category.</p>
             </div>
           )}
         </div>
       </div>
     </Layout>
   );
 };
 
 export default Products;