 import { Layout } from "@/components/Layout";
 import { Badge } from "@/components/ui/badge";
 import { Separator } from "@/components/ui/separator";
 import {
   Building2,
   Mail,
   Phone,
   MapPin,
   CheckCircle2,
   Shield,
   FileCheck,
   Globe,
   Award,
 } from "lucide-react";
 
 const verificationItems = [
   {
     icon: Shield,
     title: "Verified Entity",
     description: "CATALFU CHELSEA is a legally registered business entity in the State of New York.",
     status: "verified",
   },
   {
     icon: FileCheck,
     title: "Authentic Sourcing",
     description: "All products are sourced directly from verified artisan partners with documented provenance.",
     status: "verified",
   },
   {
     icon: Award,
     title: "Transparent Practices",
     description: "Full transparency in pricing, sourcing, and business operations with no hidden fees.",
     status: "verified",
   },
   {
     icon: Globe,
     title: "International Compliance",
     description: "Compliant with international trade regulations and consumer protection laws.",
     status: "verified",
   },
 ];
 
 const VerifyBusiness = () => {
   return (
     <Layout>
       <div className="py-20 lg:py-32">
         <div className="container mx-auto px-4 lg:px-8">
           {/* Header */}
           <div className="text-center mb-16">
             <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/20 mb-6">
               <Shield className="h-10 w-10 text-accent" />
             </div>
             <span className="text-primary font-medium tracking-widest text-sm uppercase block mb-4">
               Trust Center
             </span>
             <h1 className="text-4xl md:text-5xl font-display font-semibold mb-6">
               Business Verification
             </h1>
             <p className="text-muted-foreground max-w-2xl mx-auto">
               We believe in complete transparency. Below you'll find our verified business 
               information and compliance certifications.
             </p>
           </div>
 
           <div className="max-w-4xl mx-auto">
             {/* Business Information */}
             <div className="bg-secondary rounded-lg border border-border p-8 mb-8">
               <h2 className="text-2xl font-display font-semibold mb-6 flex items-center gap-3">
                 <Building2 className="h-6 w-6 text-primary" />
                 CATALFU CHELSEA
               </h2>
               <div className="grid md:grid-cols-2 gap-6">
                 <div className="space-y-4">
                   <div>
                     <p className="text-sm text-muted-foreground mb-1">Registered Business Name</p>
                     <p className="font-semibold">CATALFU CHELSEA</p>
                   </div>
                    <div className="flex items-start gap-3">
                     <Mail className="h-5 w-5 text-primary mt-0.5" />
                     <div>
                       <p className="text-sm text-muted-foreground mb-1">Official Email</p>
                       <p className="font-semibold">pepplevugteveen8475@hotmail.com</p>
                     </div>
                   </div>
                 </div>
                 <div className="space-y-4">
                   <div className="flex items-start gap-3">
                     <Phone className="h-5 w-5 text-primary mt-0.5" />
                     <div>
                       <p className="text-sm text-muted-foreground mb-1">Official Phone</p>
                       <p className="font-semibold">+1 (716) 5737232</p>
                     </div>
                   </div>
                   <div className="flex items-start gap-3">
                     <MapPin className="h-5 w-5 text-primary mt-0.5" />
                     <div>
                       <p className="text-sm text-muted-foreground mb-1">Registered Address</p>
                       <p className="font-semibold">
                         560 WAYNE ST APT B CORRY<br />
                         Pennsylvania, 16407, USA
                       </p>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
 
             {/* Verification Checklist */}
             <div className="bg-secondary rounded-lg border border-border p-8">
               <h2 className="text-2xl font-display font-semibold mb-6 flex items-center gap-3">
                 <CheckCircle2 className="h-6 w-6 text-accent" />
                 Verification Compliance
               </h2>
               <p className="text-muted-foreground mb-8">
                 The following compliance checks have been verified and are regularly audited 
                 to ensure ongoing adherence to our standards.
               </p>
               <div className="space-y-6">
                 {verificationItems.map((item, index) => (
                   <div key={item.title}>
                     <div className="flex items-start gap-4">
                       <div className="p-3 rounded-full bg-accent/10">
                         <item.icon className="h-5 w-5 text-accent" />
                       </div>
                       <div className="flex-1">
                         <div className="flex items-center gap-3 mb-2">
                           <h3 className="font-semibold">{item.title}</h3>
                           <Badge variant="secondary" className="bg-accent/20 text-accent border-0">
                             <CheckCircle2 className="h-3 w-3 mr-1" />
                             Verified
                           </Badge>
                         </div>
                         <p className="text-muted-foreground text-sm">{item.description}</p>
                       </div>
                     </div>
                     {index < verificationItems.length - 1 && (
                       <Separator className="mt-6" />
                     )}
                   </div>
                 ))}
               </div>
             </div>
 
             {/* Last Updated */}
             <p className="text-center text-sm text-muted-foreground mt-8">
               Last verified: February 1, 2024 • Next audit: August 1, 2024
             </p>
           </div>
         </div>
       </div>
     </Layout>
   );
 };
 
 export default VerifyBusiness;