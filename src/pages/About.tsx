 import { Layout } from "@/components/Layout";
 import { Award, Users, Globe, Heart } from "lucide-react";
 
 const stats = [
   { number: "2025", label: "Founded" },
   { number: "5,000+", label: "Happy Homes" },
   { number: "50+", label: "Artisan Partners" },
   { number: "12", label: "Countries Served" },
 ];
 
 const values = [
   {
     icon: Award,
     title: "Uncompromising Quality",
     description: "Every piece in our collection undergoes rigorous quality testing to ensure it meets our exacting standards for materials, construction, and finish.",
   },
   {
     icon: Users,
     title: "Artisan Partnerships",
     description: "We work directly with skilled craftspeople around the world, preserving traditional techniques while supporting fair labor practices.",
   },
   {
     icon: Globe,
     title: "Sustainable Sourcing",
     description: "From responsibly harvested woods to eco-friendly textiles, we prioritize materials that minimize environmental impact.",
   },
   {
     icon: Heart,
     title: "Design for Life",
     description: "We believe beautiful objects should be functional and durable. Our pieces are designed to be loved and used for generations.",
   },
 ];
 
 const About = () => {
   return (
     <Layout>
       {/* Hero */}
       <section className="py-20 lg:py-32">
         <div className="container mx-auto px-4 lg:px-8">
           <div className="max-w-4xl mx-auto text-center">
             <span className="text-primary font-medium tracking-widest text-sm uppercase">
               Our Story
             </span>
             <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold mt-4 mb-8">
               Crafting Spaces That{" "}
               <span className="text-gradient-gold">Inspire</span>
             </h1>
             <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
               CATALFU CHELSEA Living was born from a simple belief: that everyone deserves to live surrounded 
               by beauty. We curate exceptional furniture and decor from the world's finest artisans, 
               bringing timeless elegance to modern homes.
             </p>
           </div>
         </div>
       </section>
 
       {/* Stats */}
       <section className="py-16 bg-secondary">
         <div className="container mx-auto px-4 lg:px-8">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
             {stats.map((stat) => (
               <div key={stat.label} className="text-center">
                 <div className="text-4xl lg:text-5xl font-display font-semibold text-primary mb-2">
                   {stat.number}
                 </div>
                 <p className="text-muted-foreground">{stat.label}</p>
               </div>
             ))}
           </div>
         </div>
       </section>
 
       {/* Story */}
       <section className="py-24">
         <div className="container mx-auto px-4 lg:px-8">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div>
               <span className="text-primary font-medium tracking-widest text-sm uppercase">
                 The Beginning
               </span>
               <h2 className="text-3xl md:text-4xl font-display font-semibold mt-4 mb-6">
                 A Passion for Beautiful Living
               </h2>
               <div className="space-y-4 text-muted-foreground">
                 <p>
                   CATALFU CHELSEA Living began in 2025 when our founders, frustrated by the sea of mass-produced 
                   furniture, set out to create something different. They envisioned a company that would 
                   champion exceptional craftsmanship and bring museum-quality design to everyday homes.
                 </p>
                 <p>
                   Today, we work with over 50 artisan partners across 12 countries, each selected for 
                   their mastery of traditional techniques and their commitment to sustainable practices. 
                   From hand-carved furniture in Italy to hand-thrown ceramics in Japan, every piece in 
                   our collection tells a story.
                 </p>
                 <p>
                   Our team of design consultants is passionate about helping clients create spaces that 
                   reflect their unique style. Whether you're furnishing a new home or adding a statement 
                   piece to an existing space, we're here to guide you every step of the way.
                 </p>
               </div>
             </div>
             <div className="relative">
               <div className="aspect-[4/5] rounded-lg bg-secondary overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                 <div className="absolute inset-0 flex items-center justify-center">
                   <div className="text-center p-8">
                     <div className="text-6xl font-display font-semibold text-gradient-gold mb-4">M</div>
                     <p className="text-sm text-muted-foreground uppercase tracking-widest">Est. 2025</p>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>
 
       {/* Values */}
       <section className="py-24 bg-secondary">
         <div className="container mx-auto px-4 lg:px-8">
           <div className="text-center mb-16">
             <span className="text-primary font-medium tracking-widest text-sm uppercase">
               Our Values
             </span>
             <h2 className="text-3xl md:text-4xl font-display font-semibold mt-4">
               What We Stand For
             </h2>
           </div>
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
             {values.map((value) => (
               <div key={value.title} className="bg-card rounded-lg p-8 border border-border">
                 <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-6">
                   <value.icon className="h-6 w-6 text-primary" />
                 </div>
                 <h3 className="font-display text-lg font-semibold mb-3">{value.title}</h3>
                 <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
               </div>
             ))}
           </div>
         </div>
       </section>
     </Layout>
   );
 };
 
 export default About;