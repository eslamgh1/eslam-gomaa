

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
            <div className="container mx-auto max-w-5xl ">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get in <span className="text-primary">Touch</span>
                </h2>
                <p className="text-center text-muted-forground mb-12 max-w-xl mx-auto">
                    I look forward to hearing from you. Please reach out via the information below.
                </p>

                {/* first col : Contact Information */}
                <div className="grid grid-cols-1 gap-8">
                    {/* first col : Contact Information */}
                    <div className="space-y-8 ">
                        <h3 className="text-2xl font-bold">Contact Information</h3>
                        <div className="space-y-6">
                            <div className="flex items-center justify-center gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Email</h4>
                                    <a
                                        href="mailto:example@gmail.com"
                                        className="text-muted-forground hover:text-primary transition-colors duration-300">
                                        eslamgomaah@gmail.com</a>
                                </div>

                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="flex items-center justify-center gap-4 ">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Phone</h4>
                                    <a
                                        href="tell:+201005463058"
                                        className="text-muted-forground hover:text-primary transition-colors duration-300">
                                        +201005463058</a>
                                </div>
                            </div>


                            {/* START of NEW WhatsApp Contact Block */}
                            <div className="space-y-6">
                                <div className="flex items-center justify-center gap-4 ">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        {/* Using MessageCircle from lucide-react as the icon */}
                                        <MessageCircle className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium">WhatsApp</h4>
                                        <a
                                            // Re-using your phone number: +201005463058
                                            href="https://wa.me/201005463058"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-muted-forground hover:text-primary transition-colors duration-300">
                                            +201005463058</a>
                                    </div>
                                </div>
                            </div>
                            {/* END of NEW WhatsApp Contact Block */}

                        </div>
                        <div className="space-y-6">
                            <div className="flex items-center justify-center gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Location</h4>
                                    <a
                                        className="text-muted-forground hover:text-primary transition-colors duration-300">
                                        Egypt, Alexandria
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Connect With Me */}
                        <div className="pt-8">
                            <h3 className="font-medium mb-4">Connect With Me</h3>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://www.linkedin.com/in/eslam-gomaa-hamed-b8035188/" target="_blank">
                                    <Linkedin />
                                </a>
                                {/* <a href="#" target="_blank">
                                    <Linkedin />
                                </a>
                                <a href="#" target="_blank">
                                    <Linkedin />
                                </a>
                                <a href="#" target="_blank">
                                    <Linkedin />
                                </a> */}

                            </div>
                        </div>
                    </div>



                    {/* second col : Contact Form */}
                    {/* 

                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                        <form className="space-y-6">
                            <div className="flex flex-col">
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                                <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                required 
                                className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outlined-hidden focus:ring-2 focus:ring-primary" placeholder="Ex: Eslam Gomaa" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                                <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                required 
                                className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outlined-hidden focus:ring-2 focus:ring-primary" placeholder="Ex: example@gmail.com" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                                <textarea 
                                type="text" 
                                id="message" 
                                name="message" 
                                required 
                                className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outlined-hidden focus:ring-2 focus:ring-primary resize-none" placeholder="Type your message here..." />
                            </div>
                            <button 
                            type="submit"
                            disabled={true} // <--
                            // disabled={isSubmitting}
                            className={cn(
                                "cosmic-button w-full flex items-center justify-center gap-2",

                            )}>
                                {/* {isSubmitting ? "Sending..." : "Send Message" } */}
                    {/* Send Message
                    <Send size={16} /> */}
                    {/* </button>
                        </form>
                    </div> */}

                    {/* */}


                </div>

            </div>


        </section>
    )
}

