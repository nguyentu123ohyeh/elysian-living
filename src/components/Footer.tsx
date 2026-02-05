 import { Link } from "react-router-dom";
 import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";
 
 export function Footer() {
   return (
     <footer className="bg-secondary border-t border-border">
       <div className="container mx-auto px-4 lg:px-8 py-16">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
           {/* Brand */}
           <div className="space-y-6">
             <Link to="/" className="inline-block">
               <span className="text-3xl font-display font-semibold text-gradient-gold">
                 CATALFU CHELSEA
               </span>
             </Link>
             <p className="text-muted-foreground text-sm leading-relaxed">
               Curating exceptional furniture and decor for discerning homes since 2025. 
               Every piece in our collection is carefully selected for quality, design, and timeless appeal.
             </p>
             <div className="flex gap-4">
               <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                 <Instagram className="h-5 w-5" />
               </a>
               <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                 <Facebook className="h-5 w-5" />
               </a>
               <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                 <Linkedin className="h-5 w-5" />
               </a>
             </div>
           </div>
 
           {/* Quick Links */}
           <div className="space-y-6">
             <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
               Quick Links
             </h4>
             <nav className="flex flex-col gap-3">
               <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                 All Products
               </Link>
               <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                 About Us
               </Link>
               <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                 Contact
               </Link>
               <Link to="/verify" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                 Verify Business
               </Link>
             </nav>
           </div>
 
           {/* Policies */}
           <div className="space-y-6">
             <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
               Policies
             </h4>
             <nav className="flex flex-col gap-3">
               <Link to="/policies?tab=privacy" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                 Privacy Policy
               </Link>
               <Link to="/policies?tab=terms" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                 Terms of Service
               </Link>
               <Link to="/policies?tab=shipping" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                 Shipping & Returns
               </Link>
             </nav>
           </div>
 
           {/* Contact */}
           <div className="space-y-6">
             <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
               Contact Us
             </h4>
             <div className="flex flex-col gap-4">
               <a href="mailto:pepplevugteveen8475@hotmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm">
                 <Mail className="h-4 w-4" />
                 pepplevugteveen8475@hotmail.com
               </a>
               <a href="+1 7165737232" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm">
                 <Phone className="h-4 w-4" />
                 +1 (716) 5737232
               </a>
               <div className="flex items-start gap-3 text-muted-foreground text-sm">
                 <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                 <span>
                   560 WAYNE ST APT B CORRY<br />
                    Pennsylvania, 16407, USA
                 </span>
               </div>
             </div>
           </div>
         </div>
 
         <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
           <p className="text-muted-foreground text-sm">
             © 2024 CATALFU CHELSEA Living. All rights reserved.
           </p>
           <p className="text-muted-foreground text-sm">
             Designed with passion for beautiful living.
           </p>
         </div>
       </div>
     </footer>
   );
 }