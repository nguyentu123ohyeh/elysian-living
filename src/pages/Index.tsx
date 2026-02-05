 import { Link } from "react-router-dom";
 import { ArrowRight, Star, Truck, Shield, Headphones } from "lucide-react";
 import { Button } from "@/components/ui/button";
 import { Layout } from "@/components/Layout";
 import { ProductCard } from "@/components/ProductCard";
 import { products } from "@/data/products";
 import heroImage from "@/assets/hero-living-room.jpg";
 
 const features = [
   {
     icon: Star,
     title: "Curated Selection",
     description: "Every piece is hand-selected for exceptional quality and timeless design.",
   },
   {
     icon: Truck,
     title: "White Glove Delivery",
     description: "Complimentary premium delivery and installation on all orders.",
   },
   {
     icon: Shield,
     title: "5-Year Warranty",
     description: "Peace of mind with our comprehensive warranty coverage.",
   },
   {
     icon: Headphones,
     title: "Design Consultation",
     description: "Free consultation with our expert interior design team.",
   },
 ];
 
 const Index = () => {
   const featuredProducts = products.slice(0, 4);
 
   return (
     <Layout>
       {/* Hero Section */}
       <section className="relative min-h-[90vh] flex items-center">
         {/* Background Image */}
         <div className="absolute inset-0">
           <img
             src={heroImage}
             alt="Luxury Living Room"
             className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
           <div className="absolute inset-0 grid-pattern" />
         </div>
 
         {/* Content */}
         <div className="container mx-auto px-4 lg:px-8 relative z-10">
           <div className="max-w-2xl animate-slide-up">
             <span className="inline-block text-primary font-medium tracking-widest text-sm uppercase mb-6">
               Luxury Home Collection
             </span>
             <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-semibold leading-tight mb-6">
               Curating Elegance for{" "}
               <span className="text-gradient-gold">Modern Living</span>{" "}
               Spaces
             </h1>
             <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
               Exquisite furniture and decor pieces designed for comfort and timeless style. 
               Transform your home into a sanctuary of refined taste.
             </p>
             <div className="flex flex-wrap gap-4">
               <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                 <Link to="/products">
                   Explore Collection
                   <ArrowRight className="ml-2 h-5 w-5" />
                 </Link>
               </Button>
               <Button asChild variant="outline" size="lg" className="border-foreground/20 hover:bg-foreground/5">
                 <Link to="/about">
                   View Lookbook
                 </Link>
               </Button>
             </div>
           </div>
         </div>
 
         {/* Scroll Indicator */}
         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
           <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
           <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
         </div>
       </section>
 
       {/* Features */}
       <section className="py-20 bg-secondary">
         <div className="container mx-auto px-4 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {features.map((feature, index) => (
               <div
                 key={feature.title}
                 className="text-center p-6 animate-fade-in"
                 style={{ animationDelay: `${index * 100}ms` }}
               >
                 <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                   <feature.icon className="h-6 w-6 text-primary" />
                 </div>
                 <h3 className="font-display text-lg font-semibold mb-2">{feature.title}</h3>
                 <p className="text-sm text-muted-foreground">{feature.description}</p>
               </div>
             ))}
           </div>
         </div>
       </section>
 
       {/* Featured Products */}
       <section className="py-24">
         <div className="container mx-auto px-4 lg:px-8">
           <div className="text-center mb-16">
             <span className="text-primary font-medium tracking-widest text-sm uppercase">
               Our Collection
             </span>
             <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold mt-4 mb-6">
               Featured Pieces
             </h2>
             <p className="text-muted-foreground max-w-2xl mx-auto">
               Discover our most beloved furniture and decor, each piece a testament to 
               exceptional craftsmanship and timeless design.
             </p>
           </div>
 
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
             {featuredProducts.map((product, index) => (
               <div
                 key={product.id}
                 className="animate-slide-up"
                 style={{ animationDelay: `${index * 100}ms` }}
               >
                 <ProductCard product={product} />
               </div>
             ))}
           </div>
 
           <div className="text-center mt-12">
             <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
               <Link to="/products">
                 View All Products
                 <ArrowRight className="ml-2 h-5 w-5" />
               </Link>
             </Button>
           </div>
         </div>
       </section>
 
       {/* CTA Section */}
       <section className="py-24 bg-secondary">
         <div className="container mx-auto px-4 lg:px-8">
           <div className="max-w-4xl mx-auto text-center">
             <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold mb-6">
               Ready to Transform Your Space?
             </h2>
             <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
               Our design consultants are here to help you create the living space of your dreams. 
               Schedule a complimentary consultation today.
             </p>
             <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-12">
               <Link to="/contact">
                 Get in Touch
               </Link>
             </Button>
           </div>
         </div>
       </section>
     </Layout>
   );
 };
 
 export default Index;
