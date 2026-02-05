 import { useState, useEffect } from "react";
 import { useSearchParams } from "react-router-dom";
 import { Layout } from "@/components/Layout";
 import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
 import { Separator } from "@/components/ui/separator";
 
 const Policies = () => {
   const [searchParams, setSearchParams] = useSearchParams();
   const [activeTab, setActiveTab] = useState(searchParams.get("tab") || "privacy");
 
   useEffect(() => {
     const tab = searchParams.get("tab");
     if (tab && ["privacy", "terms", "shipping"].includes(tab)) {
       setActiveTab(tab);
     }
   }, [searchParams]);
 
   const handleTabChange = (value: string) => {
     setActiveTab(value);
     setSearchParams({ tab: value });
   };
 
   return (
     <Layout>
       <div className="py-20 lg:py-32">
         <div className="container mx-auto px-4 lg:px-8">
           {/* Header */}
           <div className="text-center mb-12">
             <span className="text-primary font-medium tracking-widest text-sm uppercase">
               Legal
             </span>
             <h1 className="text-4xl md:text-5xl font-display font-semibold mt-4 mb-6">
               Policies & Terms
             </h1>
             <p className="text-muted-foreground max-w-2xl mx-auto">
               Please review our policies carefully. Your continued use of our services 
               constitutes acceptance of these terms.
             </p>
           </div>
 
           <div className="max-w-4xl mx-auto">
             <Tabs value={activeTab} onValueChange={handleTabChange}>
               <TabsList className="w-full grid grid-cols-3 bg-secondary mb-8">
                 <TabsTrigger value="privacy" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                   Privacy Policy
                 </TabsTrigger>
                 <TabsTrigger value="terms" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                   Terms of Service
                 </TabsTrigger>
                 <TabsTrigger value="shipping" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                   Shipping & Returns
                 </TabsTrigger>
               </TabsList>
 
               {/* Privacy Policy */}
               <TabsContent value="privacy" className="bg-secondary rounded-lg border border-border p-8">
                 <h2 className="text-2xl font-display font-semibold mb-6">Privacy Policy</h2>
                 <p className="text-sm text-muted-foreground mb-8">Last updated: February 1, 2024</p>
 
                 <div className="space-y-8 text-muted-foreground">
                   <section>
                     <h3 className="text-lg font-semibold text-foreground mb-4">1. Introduction</h3>
                     <p className="mb-4">
                       CATALFU CHELSEA ("we," "our," or "us") respects your privacy and is committed to protecting 
                       your personal data. This privacy policy explains how we collect, use, disclose, and safeguard 
                       your information when you visit our website or make a purchase.
                     </p>
                     <p>
                       This policy applies to all information collected through our website, as well as any related 
                       services, sales, marketing, or events. Please read this privacy policy carefully.
                     </p>
                   </section>
 
                   <Separator />
 
                   <section>
                     <h3 className="text-lg font-semibold text-foreground mb-4">2. Information We Collect</h3>
                     <p className="mb-4">We collect information that you provide directly to us, including:</p>
                     <ul className="list-disc pl-6 space-y-2 mb-4">
                       <li><strong>Personal Identification Information:</strong> Name, email address, phone number, billing and shipping addresses.</li>
                       <li><strong>Payment Information:</strong> Credit card numbers, banking information, and billing details (processed securely through our payment processors).</li>
                       <li><strong>Communication Data:</strong> Records of your correspondence with us, including customer service inquiries.</li>
                       <li><strong>Account Information:</strong> Username, password, purchase history, and preferences.</li>
                       <li><strong>Survey and Feedback Data:</strong> Information you provide in response to surveys or feedback requests.</li>
                     </ul>
                     <p className="mb-4">We automatically collect certain information when you visit our website:</p>
                     <ul className="list-disc pl-6 space-y-2">
                       <li><strong>Device Information:</strong> IP address, browser type, operating system, device identifiers.</li>
                       <li><strong>Usage Data:</strong> Pages viewed, time spent on pages, navigation paths, referral sources.</li>
                       <li><strong>Location Data:</strong> General geographic location based on IP address.</li>
                       <li><strong>Cookies and Tracking Technologies:</strong> Information collected through cookies, pixels, and similar technologies.</li>
                     </ul>
                   </section>
 
                   <Separator />
 
                   <section>
                     <h3 className="text-lg font-semibold text-foreground mb-4">3. How We Use Your Information</h3>
                     <p className="mb-4">We use the information we collect for the following purposes:</p>
                     <ul className="list-disc pl-6 space-y-2">
                       <li><strong>Order Processing:</strong> To process and fulfill your orders, including shipping and payment processing.</li>
                       <li><strong>Customer Service:</strong> To respond to your inquiries and provide customer support.</li>
                       <li><strong>Account Management:</strong> To create and manage your account, including order history and preferences.</li>
                       <li><strong>Marketing Communications:</strong> To send promotional materials, newsletters, and special offers (with your consent).</li>
                       <li><strong>Website Improvement:</strong> To analyze usage patterns and improve our website functionality and user experience.</li>
                       <li><strong>Fraud Prevention:</strong> To detect and prevent fraudulent transactions and protect our customers.</li>
                       <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and legal processes.</li>
                     </ul>
                   </section>
 
                   <Separator />
 
                   <section>
                     <h3 className="text-lg font-semibold text-foreground mb-4">4. Your Rights Under GDPR</h3>
                     <p className="mb-4">
                       If you are a resident of the European Economic Area (EEA), you have certain data protection rights 
                       under the General Data Protection Regulation (GDPR):
                     </p>
                     <ul className="list-disc pl-6 space-y-2">
                       <li><strong>Right of Access:</strong> You have the right to request copies of your personal data.</li>
                       <li><strong>Right to Rectification:</strong> You have the right to request correction of inaccurate personal data.</li>
                       <li><strong>Right to Erasure:</strong> You have the right to request deletion of your personal data under certain conditions.</li>
                       <li><strong>Right to Restrict Processing:</strong> You have the right to request that we limit the processing of your personal data.</li>
                       <li><strong>Right to Data Portability:</strong> You have the right to request transfer of your data to another organization.</li>
                       <li><strong>Right to Object:</strong> You have the right to object to our processing of your personal data.</li>
                       <li><strong>Right to Withdraw Consent:</strong> You have the right to withdraw consent at any time.</li>
                     </ul>
                   </section>
 
                   <Separator />
 
                   <section>
                     <h3 className="text-lg font-semibold text-foreground mb-4">5. Data Security</h3>
                     <p className="mb-4">
                       We implement appropriate technical and organizational security measures to protect your personal 
                       data against unauthorized access, alteration, disclosure, or destruction. These measures include:
                     </p>
                     <ul className="list-disc pl-6 space-y-2">
                       <li>SSL/TLS encryption for all data transmission</li>
                       <li>PCI DSS compliant payment processing</li>
                       <li>Regular security audits and vulnerability assessments</li>
                       <li>Access controls and employee training on data protection</li>
                       <li>Secure data storage with encryption at rest</li>
                     </ul>
                   </section>
 
                   <Separator />
 
                   <section>
                     <h3 className="text-lg font-semibold text-foreground mb-4">6. Contact Us</h3>
                     <p>
                       If you have questions about this privacy policy or our data practices, please contact our 
                       Data Protection Officer at: <strong>pepplevugteveen8475@hotmail.com</strong> or write to us at: 
                       CATALFU CHELSEA, 560 WAYNE ST APT B, CORRY, Pennsylvania, 16407.
                     </p>
                   </section>
                 </div>
               </TabsContent>
 
               {/* Terms of Service */}
               <TabsContent value="terms" className="bg-secondary rounded-lg border border-border p-8">
                 <h2 className="text-2xl font-display font-semibold mb-6">Terms of Service</h2>
                 <p className="text-sm text-muted-foreground mb-8">Last updated: February 1, 2024</p>
 
                 <div className="space-y-8 text-muted-foreground">
                   <section>
                     <h3 className="text-lg font-semibold text-foreground mb-4">1. Agreement to Terms</h3>
                     <p className="mb-4">
                       By accessing or using the CATALFU CHELSEA Living website (the "Site"), you agree to be bound by these 
                       Terms of Service ("Terms"). If you do not agree to all the terms and conditions of this 
                       agreement, you may not access the Site or use any of our services.
                     </p>
                     <p>
                       These Terms apply to all visitors, users, and others who access or use the Site. We reserve 
                       the right to modify these Terms at any time. Your continued use of the Site following the 
                       posting of revised Terms means you accept and agree to the changes.
                     </p>
                   </section>
 
                   <Separator />
 
                   <section>
                     <h3 className="text-lg font-semibold text-foreground mb-4">2. Use of the Site</h3>
                     <p className="mb-4">You agree to use the Site only for lawful purposes and in accordance with these Terms. You agree not to:</p>
                     <ul className="list-disc pl-6 space-y-2">
                       <li>Use the Site in any way that violates any applicable federal, state, local, or international law.</li>
                       <li>Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Site.</li>
                       <li>Use the Site to transmit any advertising or promotional material without our prior consent.</li>
                       <li>Impersonate or attempt to impersonate the Company, an employee, another user, or any other person.</li>
                       <li>Introduce any viruses, trojan horses, worms, or other material that is malicious or technologically harmful.</li>
                       <li>Attempt to gain unauthorized access to any parts of the Site or any server, computer, or database connected to the Site.</li>
                     </ul>
                   </section>
 
                   <Separator />
 
                   <section>
                     <h3 className="text-lg font-semibold text-foreground mb-4">3. Products and Pricing</h3>
                     <p className="mb-4">
                       All products displayed on the Site are subject to availability. We reserve the right to 
                       discontinue any product at any time. Prices for our products are subject to change without notice.
                     </p>
                     <p className="mb-4">
                       We have made every effort to display the colors and images of our products that appear on the 
                       Site as accurately as possible. However, we cannot guarantee that your computer monitor's display 
                       of any color will be accurate.
                     </p>
                     <p>
                       We reserve the right to refuse any order placed with us. We may, in our sole discretion, limit 
                       or cancel quantities purchased per person, per household, or per order.
                     </p>
                   </section>
 
                   <Separator />
 
                   <section>
                     <h3 className="text-lg font-semibold text-foreground mb-4">4. Intellectual Property</h3>
                     <p className="mb-4">
                       The Site and its entire contents, features, and functionality (including but not limited to all 
                       information, software, text, displays, images, video, and audio, and the design, selection, and 
                       arrangement thereof) are owned by CATALFU CHELSEA, its licensors, or other providers of such 
                       material and are protected by United States and international copyright, trademark, patent, 
                       trade secret, and other intellectual property or proprietary rights laws.
                     </p>
                     <p>
                       You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly 
                       perform, republish, download, store, or transmit any of the material on our Site without our 
                       prior written consent.
                     </p>
                   </section>
 
                   <Separator />
 
                   <section>
                     <h3 className="text-lg font-semibold text-foreground mb-4">5. Limitation of Liability</h3>
                     <p className="mb-4">
                       IN NO EVENT WILL CATALFU CHELSEA, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, 
                       EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL 
                       THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE SITE, ANY 
                       WEBSITES LINKED TO IT, ANY CONTENT ON THE SITE OR SUCH OTHER WEBSITES, INCLUDING ANY DIRECT, 
                       INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.
                     </p>
                     <p>
                       The foregoing does not affect any liability that cannot be excluded or limited under applicable law.
                     </p>
                   </section>
 
                   <Separator />
 
                   <section>
                     <h3 className="text-lg font-semibold text-foreground mb-4">6. Governing Law</h3>
                     <p>
                       These Terms shall be governed by and construed in accordance with the laws of the State of New York, 
                       without regard to its conflict of law provisions. Any legal suit, action, or proceeding arising out 
                       of these Terms or your use of the Site shall be instituted exclusively in the federal courts of the 
                       United States or the courts of the State of New York, in each case located in the City of New York.
                     </p>
                   </section>
                 </div>
               </TabsContent>
 
               {/* Shipping & Returns */}
               <TabsContent value="shipping" className="bg-secondary rounded-lg border border-border p-8">
                 <h2 className="text-2xl font-display font-semibold mb-6">Shipping & Returns</h2>
                 <p className="text-sm text-muted-foreground mb-8">Last updated: February 1, 2024</p>
 
                 <div className="space-y-8 text-muted-foreground">
                   <section>
                     <h3 className="text-lg font-semibold text-foreground mb-4">Shipping Information</h3>
                     <p className="mb-6">
                       We offer complimentary white glove delivery on all orders over $500. Our delivery team will 
                       bring your furniture inside, unpack it, and place it in your room of choice.
                     </p>
                     
                     <div className="overflow-x-auto">
                       <table className="w-full border-collapse">
                         <thead>
                           <tr className="border-b border-border">
                             <th className="text-left py-3 pr-4 font-semibold text-foreground">Shipping Method</th>
                             <th className="text-left py-3 pr-4 font-semibold text-foreground">Delivery Time</th>
                             <th className="text-left py-3 font-semibold text-foreground">Cost</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr className="border-b border-border">
                             <td className="py-3 pr-4">Standard Delivery</td>
                             <td className="py-3 pr-4">10-14 business days</td>
                             <td className="py-3">Free (orders over $500)</td>
                           </tr>
                           <tr className="border-b border-border">
                             <td className="py-3 pr-4">White Glove Delivery</td>
                             <td className="py-3 pr-4">10-14 business days</td>
                             <td className="py-3">Free (orders over $500)</td>
                           </tr>
                           <tr className="border-b border-border">
                             <td className="py-3 pr-4">Express Delivery</td>
                             <td className="py-3 pr-4">5-7 business days</td>
                             <td className="py-3">$150</td>
                           </tr>
                           <tr className="border-b border-border">
                             <td className="py-3 pr-4">Small Items (UPS/FedEx)</td>
                             <td className="py-3 pr-4">3-5 business days</td>
                             <td className="py-3">$25</td>
                           </tr>
                           <tr>
                             <td className="py-3 pr-4">International Shipping</td>
                             <td className="py-3 pr-4">14-21 business days</td>
                             <td className="py-3">Calculated at checkout</td>
                           </tr>
                         </tbody>
                       </table>
                     </div>
                   </section>
 
                   <Separator />
 
                   <section>
                     <h3 className="text-lg font-semibold text-foreground mb-4">Return Policy</h3>
                     <p className="mb-4">
                       We want you to be completely satisfied with your purchase. If for any reason you are not, we 
                       accept returns within 30 days of delivery for most items in their original condition.
                     </p>
                     
                     <div className="overflow-x-auto">
                       <table className="w-full border-collapse mb-6">
                         <thead>
                           <tr className="border-b border-border">
                             <th className="text-left py-3 pr-4 font-semibold text-foreground">Item Category</th>
                             <th className="text-left py-3 pr-4 font-semibold text-foreground">Return Window</th>
                             <th className="text-left py-3 font-semibold text-foreground">Restocking Fee</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr className="border-b border-border">
                             <td className="py-3 pr-4">Furniture</td>
                             <td className="py-3 pr-4">30 days</td>
                             <td className="py-3">None</td>
                           </tr>
                           <tr className="border-b border-border">
                             <td className="py-3 pr-4">Lighting</td>
                             <td className="py-3 pr-4">30 days</td>
                             <td className="py-3">None</td>
                           </tr>
                           <tr className="border-b border-border">
                             <td className="py-3 pr-4">Decor & Accessories</td>
                             <td className="py-3 pr-4">30 days</td>
                             <td className="py-3">None</td>
                           </tr>
                           <tr className="border-b border-border">
                             <td className="py-3 pr-4">Textiles</td>
                             <td className="py-3 pr-4">30 days (unopened)</td>
                             <td className="py-3">None</td>
                           </tr>
                           <tr>
                             <td className="py-3 pr-4">Custom/Made-to-Order</td>
                             <td className="py-3 pr-4">Non-returnable</td>
                             <td className="py-3">N/A</td>
                           </tr>
                         </tbody>
                       </table>
                     </div>
                   </section>
 
                   <Separator />
 
                   <section>
                     <h3 className="text-lg font-semibold text-foreground mb-4">Return Conditions</h3>
                     <p className="mb-4">To be eligible for a return, your item must be:</p>
                     <ul className="list-disc pl-6 space-y-2 mb-4">
                       <li>In the same condition that you received it</li>
                       <li>In the original packaging (when possible)</li>
                       <li>Accompanied by the original receipt or proof of purchase</li>
                       <li>Free from damage, stains, or signs of use</li>
                     </ul>
                     <p>
                       To initiate a return, please contact our customer service team at <strong>pepplevugteveen8475@hotmail.com</strong> 
                       or call us at <strong>+1 (716) 5737232</strong>. We will provide you with a prepaid shipping label 
                       for domestic returns, or coordinate pickup for large furniture items.
                     </p>
                   </section>
 
                   <Separator />
 
                   <section>
                     <h3 className="text-lg font-semibold text-foreground mb-4">Damaged or Defective Items</h3>
                     <p className="mb-4">
                       If you receive a damaged or defective item, please contact us immediately at 
                       <strong> support@maison-living.com</strong> with photos of the damage. We will arrange for 
                       a replacement or full refund at no additional cost to you.
                     </p>
                     <p>
                       All items are covered by our 5-year warranty against manufacturing defects. This warranty 
                       does not cover normal wear and tear, damage caused by misuse, or damage from accidents.
                     </p>
                   </section>
                 </div>
               </TabsContent>
             </Tabs>
           </div>
         </div>
       </div>
     </Layout>
   );
 };
 
 export default Policies;