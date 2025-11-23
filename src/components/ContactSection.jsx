

import { Mail, Phone, MapPin, Linkedin, Send, MessageCircle } from "lucide-react";
import { cn } from "../lib/utils";

// const [isSubmitting, setIsSubmitting] = useState(false);

// export const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setTimeout(() => {
//         setIsSubmitting(false);
//     }, 1500)
// }

export const ContactSection = () => {
    return (
<section
    id="contact"
    className="py-24 px-4 relative bg-secondary/30">

    <div className="max-w-lg mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Get in <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-forground mb-12 max-w-xl mx-auto">
            I look forward to hearing from you. Please reach out via the information below.
        </p>

        {/* first col : Contact Information */}
        <div className="grid grid-cols-1 gap-8">
            {/* First column: Contact Information List */}
            <div className="space-y-8 ">
                <h3 className="text-2xl font-bold text-center">Contact Information</h3>

                {/*  Added w-fit mx-auto to center the content block  */}
                <div className="space-y-6 w-fit mx-auto"> 

                    {/* 📧 START of Mail Contact Block */}
                    {/* FIX: Removed justify-center to allow the block to be centered by the parent */}
                    <div className="flex items-start gap-4 pb-2">
                        <div className="p-3 rounded-full bg-primary/10 shrink-0">
                            <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h4 className="font-medium text-left pl-8">Email</h4>
                            <a
                                href="mailto:eslamgomaah@gmail.com"
                                className="text-muted-forground hover:text-primary transition-colors duration-300 break-all">
                                eslamgomaah@gmail.com
                            </a>
                        </div>
                    </div>
                    {/* END of Mail Contact Block */}

                    {/* 📞 START of Phone Contact Block */}
                    {/*  Removed justify-center */}
                    <div className="flex items-start gap-4 pb-2">
                        <div className="p-3 rounded-full bg-primary/10 shrink-0">
                            <Phone className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h4 className="font-medium text-left pl-8">Phone</h4>
                            <a
                                href="tel:+201005463058"
                                className="text-muted-forground hover:text-primary transition-colors duration-300">
                                +201005463058</a>
                        </div>
                    </div>
                    {/* END of Phone Contact Block */}

                    {/* 💬 START of WhatsApp Contact Block */}
                    {/* Removed justify-center */}
                    <div className="flex items-start gap-4 pb-2">
                        <div className="p-3 rounded-full bg-primary/10 shrink-0">
                            <MessageCircle className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h4 className="font-medium text-left pl-8">WhatsApp</h4>
                            <a
                                href="https://wa.me/201005463058"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-forground hover:text-primary transition-colors duration-300">
                                +201005463058</a>
                        </div>
                    </div>
                    {/* END of WhatsApp Contact Block */}

                    {/* 📍 START of Location Contact Block */}
                    {/* FIX: Removed justify-center */}
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10 shrink-0">
                            <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h4 className="font-medium text-left pl-8">Location</h4>
                            <a
                                className="text-muted-forground hover:text-primary transition-colors duration-300">
                                Egypt, Alexandria
                            </a>
                        </div>
                    </div>
                    {/* END of Location Contact Block */}
                </div>
                
                {/* Connect With Me */}
                <div className="pt-8 text-center">
                    <h3 className="font-medium mb-4">Connect With Me</h3>
                    
                    <div className="flex space-x-4 justify-center">
                        <a href="https://www.linkedin.com/in/eslam-gomaa-hamed-b8035188/" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="h-6 w-6 text-primary" />
                        </a>
                    </div>
                </div>
            </div>
            {/* second col : Contact Form (commented out) */}
        </div>
    </div>
</section>
    )
}

