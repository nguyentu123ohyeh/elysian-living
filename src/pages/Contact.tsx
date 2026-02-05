 import { useState } from "react";
 import { Layout } from "@/components/Layout";
 import { Button } from "@/components/ui/button";
 import { Input } from "@/components/ui/input";
 import { Textarea } from "@/components/ui/textarea";
 import { Label } from "@/components/ui/label";
 import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
 import { useToast } from "@/hooks/use-toast";
 
 const Contact = () => {
   const { toast } = useToast();
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [formData, setFormData] = useState({
     name: "",
     email: "",
     phone: "",
     subject: "",
     message: "",
   });
 
   const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
     setIsSubmitting(true);
 
     // Simulate form submission
     await new Promise((resolve) => setTimeout(resolve, 1000));
 
     toast({
       title: "Message Sent",
       description: "Thank you for reaching out. We'll get back to you within 24 hours.",
     });
 
     setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
     setIsSubmitting(false);
   };
 
   return (
     <Layout>
       <div className="py-20 lg:py-32">
         <div className="container mx-auto px-4 lg:px-8">
           {/* Header */}
           <div className="text-center mb-16">
             <span className="text-primary font-medium tracking-widest text-sm uppercase">
               Get in Touch
             </span>
             <h1 className="text-4xl md:text-5xl font-display font-semibold mt-4 mb-6">
               We'd Love to Hear From You
             </h1>
             <p className="text-muted-foreground max-w-2xl mx-auto">
               Have a question about our products or need help with your order? 
               Our team is here to assist you.
             </p>
           </div>
 
           <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
             {/* Contact Info */}
             <div className="space-y-8">
               <div className="bg-secondary rounded-lg p-6 border border-border">
                 <div className="flex items-start gap-4">
                   <div className="p-3 rounded-full bg-primary/10">
                     <Mail className="h-5 w-5 text-primary" />
                   </div>
                   <div>
                     <h3 className="font-semibold mb-1">Email</h3>
                     <a href="mailto:pepplevugteveen8475@hotmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                       pepplevugteveen8475@hotmail.com
                     </a>
                   </div>
                 </div>
               </div>
 
               <div className="bg-secondary rounded-lg p-6 border border-border">
                 <div className="flex items-start gap-4">
                   <div className="p-3 rounded-full bg-primary/10">
                     <Phone className="h-5 w-5 text-primary" />
                   </div>
                   <div>
                     <h3 className="font-semibold mb-1">Phone</h3>
                     <a href="tel:+1-555-CATALFU CHELSEA" className="text-muted-foreground hover:text-primary transition-colors">
                       +1 (716) 5737232
                     </a>
                   </div>
                 </div>
               </div>
 
               <div className="bg-secondary rounded-lg p-6 border border-border">
                 <div className="flex items-start gap-4">
                   <div className="p-3 rounded-full bg-primary/10">
                     <MapPin className="h-5 w-5 text-primary" />
                   </div>
                   <div>
                     <h3 className="font-semibold mb-1">Showroom</h3>
                     <p className="text-muted-foreground">
                       560 WAYNE ST APT B CORRY<br />
                        Pennsylvania, 16407, USA
                     </p>
                   </div>
                 </div>
               </div>
 
               <div className="bg-secondary rounded-lg p-6 border border-border">
                 <div className="flex items-start gap-4">
                   <div className="p-3 rounded-full bg-primary/10">
                     <Clock className="h-5 w-5 text-primary" />
                   </div>
                   <div>
                     <h3 className="font-semibold mb-1">Hours</h3>
                     <p className="text-muted-foreground">
                       Mon - Sat: 10AM - 7PM<br />
                       Sunday: 12PM - 5PM
                     </p>
                   </div>
                 </div>
               </div>
             </div>
 
             {/* Contact Form */}
             <div className="lg:col-span-2">
               <form onSubmit={handleSubmit} className="bg-secondary rounded-lg p-8 border border-border">
                 <h2 className="text-2xl font-display font-semibold mb-6">Send Us a Message</h2>
                 <div className="grid sm:grid-cols-2 gap-6 mb-6">
                   <div className="space-y-2">
                     <Label htmlFor="name">Full Name</Label>
                     <Input
                       id="name"
                       value={formData.name}
                       onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                       placeholder="John Smith"
                       required
                       className="bg-background"
                     />
                   </div>
                   <div className="space-y-2">
                     <Label htmlFor="email">Email Address</Label>
                     <Input
                       id="email"
                       type="email"
                       value={formData.email}
                       onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                       placeholder="john@example.com"
                       required
                       className="bg-background"
                     />
                   </div>
                   <div className="space-y-2">
                     <Label htmlFor="phone">Phone Number</Label>
                     <Input
                       id="phone"
                       type="tel"
                       value={formData.phone}
                       onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                       placeholder="+1 (555) 123-4567"
                       className="bg-background"
                     />
                   </div>
                   <div className="space-y-2">
                     <Label htmlFor="subject">Subject</Label>
                     <Input
                       id="subject"
                       value={formData.subject}
                       onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                       placeholder="Product inquiry"
                       required
                       className="bg-background"
                     />
                   </div>
                 </div>
                 <div className="space-y-2 mb-6">
                   <Label htmlFor="message">Message</Label>
                   <Textarea
                     id="message"
                     value={formData.message}
                     onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                     placeholder="Tell us about your project or inquiry..."
                     rows={6}
                     required
                     className="bg-background resize-none"
                   />
                 </div>
                 <Button
                   type="submit"
                   size="lg"
                   disabled={isSubmitting}
                   className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground"
                 >
                   {isSubmitting ? (
                     "Sending..."
                   ) : (
                     <>
                       <Send className="mr-2 h-4 w-4" />
                       Send Message
                     </>
                   )}
                 </Button>
               </form>
             </div>
           </div>
         </div>
       </div>
     </Layout>
   );
 };
 
 export default Contact;