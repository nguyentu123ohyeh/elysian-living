 import { useState } from "react";
 import { Link, useLocation } from "react-router-dom";
 import { Search, Heart, Globe, Menu, X } from "lucide-react";
 import { Button } from "@/components/ui/button";
 import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
 
 const navLinks = [
   { name: "Home", path: "/" },
   { name: "Products", path: "/products" },
   { name: "About", path: "/about" },
   { name: "Contact", path: "/contact" },
   { name: "Verify Business", path: "/verify" },
   { name: "Policies", path: "/policies" },
 ];
 
 export function Header() {
   const location = useLocation();
   const [isOpen, setIsOpen] = useState(false);
 
   const isActive = (path: string) => location.pathname === path;
 
   return (
     <header className="fixed top-0 left-0 right-0 z-50 bg-glass-dark border-b border-border">
       <div className="container mx-auto px-4 lg:px-8">
         <div className="flex items-center justify-between h-16 lg:h-20">
           {/* Logo */}
           <Link to="/" className="flex items-center gap-2">
             <span className="text-2xl lg:text-3xl font-display font-semibold text-gradient-gold">
               CATALFU CHELSEA
             </span>
           </Link>
 
           {/* Desktop Navigation */}
           <nav className="hidden lg:flex items-center gap-8">
             {navLinks.map((link) => (
               <Link
                 key={link.path}
                 to={link.path}
                 className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                   isActive(link.path)
                     ? "text-primary"
                     : "text-muted-foreground hover:text-foreground"
                 }`}
               >
                 {link.name}
               </Link>
             ))}
           </nav>
 
           {/* Icons */}
           <div className="flex items-center gap-2 lg:gap-4">
             <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
               <Search className="h-5 w-5" />
             </Button>
             <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
               <Heart className="h-5 w-5" />
             </Button>
             <Button variant="ghost" size="icon" className="hidden md:flex text-muted-foreground hover:text-primary">
               <Globe className="h-5 w-5" />
             </Button>
 
             {/* Mobile Menu */}
             <Sheet open={isOpen} onOpenChange={setIsOpen}>
               <SheetTrigger asChild className="lg:hidden">
                 <Button variant="ghost" size="icon">
                   <Menu className="h-6 w-6" />
                 </Button>
               </SheetTrigger>
               <SheetContent side="right" className="w-80 bg-background border-border">
                 <div className="flex flex-col gap-6 mt-8">
                   <Link to="/" className="flex items-center gap-2 mb-4">
                     <span className="text-2xl font-display font-semibold text-gradient-gold">
                       CATALFU CHELSEA
                     </span>
                   </Link>
                   <nav className="flex flex-col gap-4">
                     {navLinks.map((link) => (
                       <Link
                         key={link.path}
                         to={link.path}
                         onClick={() => setIsOpen(false)}
                         className={`text-lg font-medium tracking-wide transition-colors duration-300 py-2 ${
                           isActive(link.path)
                             ? "text-primary"
                             : "text-muted-foreground hover:text-foreground"
                         }`}
                       >
                         {link.name}
                       </Link>
                     ))}
                   </nav>
                 </div>
               </SheetContent>
             </Sheet>
           </div>
         </div>
       </div>
     </header>
   );
 }