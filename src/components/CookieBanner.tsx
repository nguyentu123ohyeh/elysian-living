 import { useState, useEffect } from "react";
 import { X, Cookie, Settings } from "lucide-react";
 import { Button } from "@/components/ui/button";
 import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogHeader,
   DialogTitle,
 } from "@/components/ui/dialog";
 import { Switch } from "@/components/ui/switch";
 import { Label } from "@/components/ui/label";
 
 export function CookieBanner() {
   const [isVisible, setIsVisible] = useState(false);
   const [showPreferences, setShowPreferences] = useState(false);
   const [preferences, setPreferences] = useState({
     necessary: true,
     analytics: false,
     marketing: false,
     functional: false,
   });
 
   useEffect(() => {
     const consent = localStorage.getItem("cookieConsent");
     if (!consent) {
       const timer = setTimeout(() => setIsVisible(true), 1500);
       return () => clearTimeout(timer);
     }
   }, []);
 
   const handleAcceptAll = () => {
     localStorage.setItem("cookieConsent", JSON.stringify({
       necessary: true,
       analytics: true,
       marketing: true,
       functional: true,
       timestamp: new Date().toISOString(),
     }));
     setIsVisible(false);
   };
 
   const handleDecline = () => {
     localStorage.setItem("cookieConsent", JSON.stringify({
       necessary: true,
       analytics: false,
       marketing: false,
       functional: false,
       timestamp: new Date().toISOString(),
     }));
     setIsVisible(false);
   };
 
   const handleSavePreferences = () => {
     localStorage.setItem("cookieConsent", JSON.stringify({
       ...preferences,
       timestamp: new Date().toISOString(),
     }));
     setShowPreferences(false);
     setIsVisible(false);
   };
 
   if (!isVisible) return null;
 
   return (
     <>
       <div className="fixed bottom-4 right-4 z-50 max-w-md animate-slide-up">
         <div className="bg-card border border-border rounded-lg shadow-2xl p-6">
           <div className="flex items-start gap-4">
             <div className="p-2 rounded-full bg-primary/10">
               <Cookie className="h-5 w-5 text-primary" />
             </div>
             <div className="flex-1">
               <h3 className="font-semibold text-foreground mb-2">
                 We Value Your Privacy
               </h3>
               <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                 We use cookies to enhance your browsing experience, serve personalized content, 
                 and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
               </p>
               <div className="flex flex-wrap gap-2">
                 <Button onClick={handleAcceptAll} size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                   Accept All
                 </Button>
                 <Button onClick={handleDecline} variant="outline" size="sm">
                   Decline
                 </Button>
                 <Button 
                   onClick={() => setShowPreferences(true)} 
                   variant="ghost" 
                   size="sm"
                   className="text-muted-foreground"
                 >
                   <Settings className="h-4 w-4 mr-2" />
                   Preferences
                 </Button>
               </div>
             </div>
             <Button
               variant="ghost"
               size="icon"
               className="h-8 w-8 -mt-2 -mr-2"
               onClick={handleDecline}
             >
               <X className="h-4 w-4" />
             </Button>
           </div>
         </div>
       </div>
 
       <Dialog open={showPreferences} onOpenChange={setShowPreferences}>
         <DialogContent className="bg-card border-border max-w-lg">
           <DialogHeader>
             <DialogTitle className="font-display text-xl">Cookie Preferences</DialogTitle>
             <DialogDescription>
               Customize your cookie settings. Some cookies are necessary for the website to function properly.
             </DialogDescription>
           </DialogHeader>
           <div className="space-y-6 py-4">
             <div className="flex items-center justify-between">
               <div className="space-y-1">
                 <Label className="font-medium">Necessary Cookies</Label>
                 <p className="text-sm text-muted-foreground">
                   Essential for the website to function. Cannot be disabled.
                 </p>
               </div>
               <Switch checked disabled />
             </div>
             <div className="flex items-center justify-between">
               <div className="space-y-1">
                 <Label className="font-medium">Analytics Cookies</Label>
                 <p className="text-sm text-muted-foreground">
                   Help us understand how visitors interact with our website.
                 </p>
               </div>
               <Switch
                 checked={preferences.analytics}
                 onCheckedChange={(checked) => setPreferences({ ...preferences, analytics: checked })}
               />
             </div>
             <div className="flex items-center justify-between">
               <div className="space-y-1">
                 <Label className="font-medium">Marketing Cookies</Label>
                 <p className="text-sm text-muted-foreground">
                   Used to deliver personalized advertisements.
                 </p>
               </div>
               <Switch
                 checked={preferences.marketing}
                 onCheckedChange={(checked) => setPreferences({ ...preferences, marketing: checked })}
               />
             </div>
             <div className="flex items-center justify-between">
               <div className="space-y-1">
                 <Label className="font-medium">Functional Cookies</Label>
                 <p className="text-sm text-muted-foreground">
                   Enable enhanced functionality and personalization.
                 </p>
               </div>
               <Switch
                 checked={preferences.functional}
                 onCheckedChange={(checked) => setPreferences({ ...preferences, functional: checked })}
               />
             </div>
           </div>
           <div className="flex justify-end gap-2 pt-4 border-t border-border">
             <Button variant="outline" onClick={() => setShowPreferences(false)}>
               Cancel
             </Button>
             <Button onClick={handleSavePreferences} className="bg-primary hover:bg-primary/90 text-primary-foreground">
               Save Preferences
             </Button>
           </div>
         </DialogContent>
       </Dialog>
     </>
   );
 }