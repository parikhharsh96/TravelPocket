import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "../ui/textarea"
import { Phone, Mail, MessageCircle } from "lucide-react"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select-footer"
import { NewsletterSection } from "../home/news-letter"
import { HelpCenterSection } from "../home/helpcenter"
import WhatsAppBanner from "./whatsapp-banner"
import { aboutTravelPocketLinks, destinations, packageTours } from "@/data/footer"
import { FooterAccordion } from "../ui/footer-accordion"
import Link from "next/link"

type FooterProps = {
    showSections?: {
        whatsapp?: boolean;
        helpCenter?: boolean;
        newsletter?: boolean;
    };
};

export function Footer({ showSections = {} }: FooterProps) {
    return (
        <section>
            {showSections.whatsapp && <WhatsAppBanner />}
            {showSections.helpCenter && <HelpCenterSection />}
            {showSections.newsletter && <NewsletterSection />}
            {/* <WhatsAppBanner />
            <HelpCenterSection />
            <NewsletterSection /> */}
            <footer className="bg-[#E9FBFF] pt-16 pb-8">
                <div className="max-w-[1920px] mx-auto px-4 pb-[25px] sm:px-6 md:px-8 lg:px-[50px]"> {/**container mx-auto px-4 */}
                    {/* Main Footer Content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                        {/* About TravelPocket */}
                        <div className="space-y-4 hidden md:block ">
                            <h3 className="text-[#1A2F46] font-['Figtree'] text-[18px] font-semibold leading-normal mb-4">About TravelPocket</h3>
                            <div className="space-y-2">
                                {aboutTravelPocketLinks.map((item) => (
                                    <div key={item.label}>
                                        <Link href={item.href} className="text-[#4D4D4D] font-['Figtree'] text-[14px] font-normal leading-[30px] transition-transform hover:font-semibold">
                                            {item.label}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* About TravelPocket Mobile Accordion */}
                        <div className="space-y-4 block md:hidden">
                            <FooterAccordion title="About TravelPocket" links={aboutTravelPocketLinks} />
                        </div>

                        {/* Destinations */}
                        <div className="space-y-4 hidden md:block">
                            <h3 className="text-[#1A2F46] font-['Figtree'] text-[18px] font-semibold leading-normal mb-4">Destinations</h3>
                            <div className="space-y-2">
                                {destinations.map((destination) => (
                                    <div key={destination.label}>
                                        <Link href={destination.href} className="text-[#4D4D4D] font-['Figtree'] text-[14px] font-normal leading-[30px] transition-transform hover:font-semibold">
                                            {destination.label}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Destinations Mobile Accordion */}
                        <div className="space-y-4 block md:hidden">
                            <FooterAccordion title="Destinations" links={destinations} />
                        </div>

                        {/* Most Searched */}
                        <div className="space-y-4 hidden md:block">
                            <h3 className="text-[#1A2F46] font-['Figtree'] text-[18px] font-semibold leading-normal mb-4">Most Searched</h3>
                            <div className="space-y-2">
                                {packageTours.map((search) => (
                                    <div key={search.label}>
                                        <Link href={search.href} className="text-[#4D4D4D] font-['Figtree'] text-[14px] font-normal leading-[30px] transition-transform hover:font-semibold">
                                            {search.label}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Most Searched Mobile Accordion */}
                        <div className="space-y-4 block md:hidden">
                            <FooterAccordion title="Most Searched" links={packageTours} />
                        </div>

                        {/* Get in Touch */}
                        <div className="space-y-4 hidden md:block">
                            <h3 className="text-[#1A2F46] font-['Figtree'] text-[18px] font-semibold leading-normal mb-4">Get in Touch</h3>
                            <div className="space-y-3">
                                <div>
                                    <p className="text-[#4D4D4D] font-['Figtree'] text-[14px] font-semibold leading-normal">Travelpocket Exploration Pvt. Ltd.</p>
                                    <div className="flex items-baseline gap-3">
                                        <img
                                            src="/images/footer/location_on.svg"
                                            alt="Location"
                                            width="14px"
                                            height="14px"
                                            className="relative top-[4px]"
                                        />
                                         {/**cursor-pointer transition-transform hover:scale-140 */}
                                        <p className="text-[#4D4D4D] font-['Figtree'] text-[14px] font-medium leading-[20px] mt-1">
                                            302, 3rd floor Wing - Plot No. A - 34 - Kunj Tower, Near HDFC Bank Saroopganj Road, Ahinaiya Circle,
                                            Ahinaiya Vikas Yojana, Jodhpur Rajasthan 342003
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    {/* <Phone className="h-4 w-4 text-muted-foreground" /> */}
                                    <img
                                        src="/images/footer/Path-11.svg"
                                        alt="Phone"
                                        width="14px"
                                        height="14px"
                                        // className="cursor-pointer transition-transform hover:scale-140"
                                    />
                                    <span className="text-[#4D4D4D] font-['Figtree'] text-[14px] font-medium leading-normal">+91 78270-33801</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    {/* <Mail className="h-4 w-4 text-muted-foreground" /> */}
                                    <img
                                        src="/images/footer/Vector-Smart-Object.svg"
                                        alt="Mail"
                                        width="14px"
                                        height="14px"
                                        // className="cursor-pointer transition-transform hover:scale-140"
                                    />
                                    <span className="text-[#4D4D4D] font-['Figtree'] text-[14px] font-medium leading-normal">info@travelpocket.in</span>
                                </div>

                                <div className="pt-2">
                                    <div className="flex items-center gap-[15px]">
                                        {/* <MessageCircle className="h-4 w-4" /> */}
                                        <div>
                                            <p className="text-[#1A2F46] font-['Figtree'] text-[10px] font-medium leading-normal uppercase">CHAT WITH US ON</p>
                                            <span className="text-[#1A2F46] font-['Figtree'] text-[30px] font-light leading-normal capitalize">WhatsApp</span>
                                        </div>
                                        <div className="relative top-[15px]">{/** cursor-pointer transition-transform hover:scale-110 */}
                                            <img
                                                src="/images/footer/Ellipse-6284.svg"
                                                alt="Instagram"
                                                width="50px"
                                                height="50px"
                                                className=""
                                            />
                                            <img
                                                src="/images/footer/whatsapp-(2)-1.svg"
                                                alt="Instagram"
                                                width="26px"
                                                height="26px"
                                                className="relative bottom-[38px] left-[12px]"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-2">
                                    <div className="flex items-center gap-[24px]">
                                        {/* <Instagram className="h-4 w-4" /> */}
                                        <div>
                                            <p className="text-[#1A2F46] font-['Figtree'] text-[10px] font-medium leading-normal uppercase">FOLLOW US ON</p>
                                            <span className="text-[#1A2F46] font-['Figtree'] text-[30px] font-light leading-normal capitalize">Instagram</span>
                                        </div>
                                        <img
                                            src="/images/footer/Component-384–3.svg"
                                            alt="Instagram"
                                            width="50px"
                                            height="50px"
                                            className="relative top-[-1px]"
                                        />
                                        {/**transition-transform hover:scale-110 cursor-pointer */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Get in Touch Mobile Accordion */}
                        <div className="space-y-4 block md:hidden">
                            <FooterAccordion title="Get in Touch" showCustomContent>
                                {/* <h3 className="text-[#1A2F46] font-['Figtree'] text-[18px] font-semibold leading-normal mb-4">Get in Touch</h3> */}
                                <div className="space-y-3">
                                    <div>
                                        <p className="text-[#4D4D4D] font-['Figtree'] text-[14px] font-semibold leading-normal">Travelpocket Exploration Pvt. Ltd.</p>
                                        <div className="flex items-baseline gap-3">
                                            <img
                                                src="/images/footer/location_on.svg"
                                                alt="Location"
                                                width="14px"
                                                height="14px"
                                                className="relative top-[4px]"
                                            />
                                             {/**cursor-pointer transition-transform hover:scale-140 */}
                                            <p className="text-[#4D4D4D] font-['Figtree'] text-[14px] font-medium leading-[20px] mt-1">
                                                302, 3rd floor Wing - Plot No. A - 34 - Kunj Tower, Near HDFC Bank Saroopganj Road, Ahinaiya Circle,
                                                Ahinaiya Vikas Yojana, Jodhpur Rajasthan 342003
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        {/* <Phone className="h-4 w-4 text-muted-foreground" /> */}
                                        <img
                                            src="/images/footer/Path-11.svg"
                                            alt="Phone"
                                            width="14px"
                                            height="14px"
                                            // className="cursor-pointer transition-transform hover:scale-140"
                                        />
                                        <span className="text-[#4D4D4D] font-['Figtree'] text-[14px] font-medium leading-normal">+91 78270-33801</span>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        {/* <Mail className="h-4 w-4 text-muted-foreground" /> */}
                                        <img
                                            src="/images/footer/Vector-Smart-Object.svg"
                                            alt="Mail"
                                            width="14px"
                                            height="14px"
                                            // className="cursor-pointer transition-transform hover:scale-140"
                                        />
                                        <span className="text-[#4D4D4D] font-['Figtree'] text-[14px] font-medium leading-normal">info@travelpocket.in</span>
                                    </div>

                                    <div className="pt-2">
                                        <div className="flex items-center gap-[15px]">
                                            {/* <MessageCircle className="h-4 w-4" /> */}
                                            <div>
                                                <p className="text-[#1A2F46] font-['Figtree'] text-[10px] font-medium leading-normal uppercase">CHAT WITH US ON</p>
                                                <span className="text-[#1A2F46] font-['Figtree'] text-[30px] font-light leading-normal capitalize">WhatsApp</span>
                                            </div>
                                            <div className="relative top-[15px]">{/**cursor-pointer transition-transform hover:scale-110 */}
                                                <img
                                                    src="/images/footer/Ellipse-6284.svg"
                                                    alt="Instagram"
                                                    width="50px"
                                                    height="50px"
                                                    className=""
                                                />
                                                <img
                                                    src="/images/footer/whatsapp-(2)-1.svg"
                                                    alt="Instagram"
                                                    width="26px"
                                                    height="26px"
                                                    className="relative bottom-[38px] left-[12px]"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-2">
                                        <div className="flex items-center gap-[24px]">
                                            {/* <Instagram className="h-4 w-4" /> */}
                                            <div>
                                                <p className="text-[#1A2F46] font-['Figtree'] text-[10px] font-medium leading-normal uppercase">FOLLOW US ON</p>
                                                <span className="text-[#1A2F46] font-['Figtree'] text-[30px] font-light leading-normal capitalize">Instagram</span>
                                            </div>
                                            <img
                                                src="/images/footer/Component-384–3.svg"
                                                alt="Instagram"
                                                width="50px"
                                                height="50px"
                                                className="relative top-[-1px]"
                                            />
                                            {/**transition-transform hover:scale-110 cursor-pointer */}
                                        </div>
                                    </div>
                                </div>
                            </FooterAccordion>
                        </div>

                        {/* Drop your Request */}
                        <div className="space-y-4">
                            <h3 className="text-[#1A2F46] font-['Figtree'] text-[18px] font-semibold leading-normal mb-4 px-1">Drop your Request</h3>
                            <div className="space-y-3 px-1 flex flex-col gap-1">
                                <Input placeholder="Name*" className="placeholder:text-muted-foreground h-[40px] rounded-[6px] border border-[#9FCADC] bg-white text-[#5A5A5A] font-['Figtree'] text-[14px] font-normal leading-normal" />
                                <Input placeholder="Phone No.*" className="h-[40px] rounded-[6px] border border-[#9FCADC] bg-white text-[#5A5A5A] font-['Figtree'] text-[14px] font-normal leading-normal" />
                                <Input placeholder="No. of Travellers*" className="h-[40px] rounded-[6px] border border-[#9FCADC] bg-white text-[#5A5A5A] font-['Figtree'] text-[14px] font-normal leading-normal" />
                                {/* <select className="flex h-[40px] w-full px-3 py-2 rounded-[6px] border border-[#9FCADC] bg-white text-[#5A5A5A] font-['Figtree'] text-[14px] font-normal leading-normal">
                                <option value="" className="bg-white text-[#5A5A5A] font-['Figtree'] text-[14px] font-normal leading-normal">Choose Package*</option>
                                <option value="kailash" className="bg-white text-[#5A5A5A] font-['Figtree'] text-[14px] font-normal leading-normal">Kailash Mansarovar</option>
                                <option value="chardham" className="bg-white text-[#5A5A5A] font-['Figtree'] text-[14px] font-normal leading-normal">Char Dham</option>
                                <option value="kedarnath" className="bg-white text-[#5A5A5A] font-['Figtree'] text-[14px] font-normal leading-normal">Kedarnath</option>
                                <option value="custom" className="bg-white text-[#5A5A5A] font-['Figtree'] text-[14px] font-normal leading-normal">Custom Package</option>
                            </select> */}

                                <Select>
                                    <SelectTrigger className="bg-white w-full rounded-[6px] border border-[#9FCADC]">
                                        <SelectValue placeholder="" className="px-3 py-2 text-[#5A5A5A] font-['Figtree'] text-[14px] font-normal leading-normal" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-white">
                                        <SelectItem value="kailash-mansarovar" className="text-[#5A5A5A] font-['Figtree'] text-[14px] font-normal leading-normal">Kailash Mansarovar</SelectItem>
                                        <SelectItem value="char-dham" className="text-[#5A5A5A] font-['Figtree'] text-[14px] font-normal leading-normal">Char Dham</SelectItem>
                                        <SelectItem value="kedarnath" className="text-[#5A5A5A] font-['Figtree'] text-[14px] font-normal leading-normal">Kedarnath</SelectItem>
                                        <SelectItem value="custom-package" className="text-[#5A5A5A] font-['Figtree'] text-[14px] font-normal leading-normal">Custom Package</SelectItem>
                                    </SelectContent>
                                </Select>
                                <Textarea placeholder="Your Message" className="rounded-[6px] border border-[#9FCADC] bg-white text-[#5A5A5A] font-['Figtree'] text-[14px] font-normal leading-normal min-h-[80px]" />
                                <Button className="w-[35%] self-center md:self-start rounded-[6px] bg-[#1A2F46] cursor-pointer text-white
                    bg-[linear-gradient(90deg,_#E97737_0%,_#E97737_50%,_transparent_50%)] 
             bg-[length:200%_100%] bg-[position:100%_0] 
             transition-[background-position] duration-300 ease-out
             hover:bg-[position:0_0]">SUBMIT</Button>
                            </div>
                        </div>
                    </div>

                    {/* Trust Indicators */}
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 py-8 border-t border-border border-[#D8E6EE]">
                        <div className="flex items-start gap-3">
                            <div className="flex items-center justify-center flex-shrink-0">
                                <img src="/images/footer/reliability_1.svg"
                                    alt="Reliable" height="46px" width="46px" />
                            </div>
                            <div>
                                <h4 className="text-[#29A4C1] font-['Figtree'] text-[18px] font-semibold leading-normal">Reliable</h4>
                                <p className="text-[#323232] font-['Inter'] text-[12px] font-normal leading-[16px] mt-1">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <div className="flex items-center justify-center flex-shrink-0">
                                <img src="/images/footer/padlock_1.svg"
                                    alt="Reliable" height="46px" width="46px" />
                            </div>
                            <div>
                                <h4 className="text-[#29A4C1] font-['Figtree'] text-[18px] font-semibold leading-normal">Secure</h4>
                                <p className="text-[#323232] font-['Inter'] text-[12px] font-normal leading-[16px] mt-1">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <div className="flex items-center justify-center flex-shrink-0">
                                <img src="/images/footer/wallet_1.svg"
                                    alt="Reliable" height="44px" width="44px" />
                            </div>
                            <div>
                                <h4 className="text-[#29A4C1] font-['Figtree'] text-[18px] font-semibold leading-normal">Affordable</h4>
                                <p className="text-[#323232] font-['Inter'] text-[12px] font-normal leading-[16px] mt-1">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <div className="flex items-center justify-center flex-shrink-0">
                                <img src="/images/footer/noun-support-7881942_1.svg"
                                    alt="Reliable" height="46px" width="49px" />
                            </div>
                            <div>
                                <h4 className="text-[#29A4C1] font-['Figtree'] text-[18px] font-semibold leading-normal">End-to-End Support</h4>
                                <p className="text-[#323232] font-['Inter'] text-[12px] font-normal leading-[16px] mt-1">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <div className="flex items-center justify-center flex-shrink-0">
                                <img src="/images/footer/noun-rating-4464624_1.svg"
                                    alt="Reliable" height="46px" width="46px" />
                            </div>
                            <div>
                                <h4 className="text-[#29A4C1] font-['Figtree'] text-[18px] font-semibold leading-normal">Customer-Approved</h4>
                                <p className="text-[#323232] font-['Inter'] text-[12px] font-normal leading-[16px] mt-1">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="hidden md:flex flex-col md:flex-row justify-between pt-8 border-t border-border border-[#D8E6EE]">
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex flex-col items-start gap-4">
                                <img src="/images/footer/logo_design_travel_pocket.svg"
                                    alt="Reliable" className="w-[260px] h-[70px] shrink-0 aspect-[26/7]" />
                                <div className="flex gap-2">
                                    <p className="text-black font-['Figtree'] text-[12px] font-medium leading-[22px]">© Copyright 2025 TravelPocket | All Rights Reserved.</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex flex-col items-start gap-4">
                                <p className="text-black text-center font-['Figtree'] text-[14px] font-medium leading-normal">Travel with Certified Assurance</p>
                                <div className="flex gap-2">
                                    <div className="flex items-center justify-center">
                                        <img src="/images/footer/ISO_1.png" width="90px" height="90px"
                                            alt="Reliable" className="aspect-square" />
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <img src="/images/footer/ISO_2.png" width="90px" height="90px"
                                            alt="Reliable" className="aspect-square" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row  gap-6">
                            <div className="flex flex-col items-start gap-4">
                                <p className="text-black font-['Figtree'] text-[14px] font-medium leading-normal">Follow us on</p>
                                <div className="flex gap-[20px]">
                                    <div className="flex items-center justify-center">
                                        <img src="/images/footer/Fb.svg"
                                            alt="Facebook" className="aspect-square w-[14.972px] h-[27.95px] cursor-pointer transition-transform hover:scale-140" />
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <img src="/images/footer/In.svg" width="28px" height="28px"
                                            alt="Linkedin" className="aspect-square cursor-pointer transition-transform hover:scale-140" />
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <img src="/images/footer/logo_51.svg" width="23px" height="24px"
                                            alt="Twitter" className="aspect-[23/24] cursor-pointer transition-transform hover:scale-140" />
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <img src="/images/footer/Insta.svg" width="28px" height="28px"
                                            alt="Insta" className="aspect-square cursor-pointer transition-transform hover:scale-140" />
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <img src="/images/footer/YT.svg" width="40px" height="28px"
                                            alt="Youtube" className="aspect-square cursor-pointer transition-transform hover:scale-140" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section mobile */}
                    <div className="flex flex-col justify-center items-center gap-6 md:hidden mt-4 pb-[65px]">
                        <div className="flex flex-col  gap-6">
                            <div className="flex flex-col justify-center items-center gap-4">
                                <p className="text-black font-['Figtree'] text-[14px] font-medium leading-normal">Follow us on</p>
                                <div className="flex gap-[20px]">
                                    <div className="flex items-center justify-center">
                                        <img src="/images/footer/Fb.svg"
                                            alt="Facebook" className="aspect-square w-[14.972px] h-[27.95px] cursor-pointer transition-transform hover:scale-140" />
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <img src="/images/footer/In.svg" width="28px" height="28px"
                                            alt="Linkedin" className="aspect-square cursor-pointer transition-transform hover:scale-140" />
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <img src="/images/footer/logo_51.svg" width="23px" height="24px"
                                            alt="Twitter" className="aspect-[23/24] cursor-pointer transition-transform hover:scale-140" />
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <img src="/images/footer/Insta.svg" width="28px" height="28px"
                                            alt="Insta" className="aspect-square cursor-pointer transition-transform hover:scale-140" />
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <img src="/images/footer/YT.svg" width="40px" height="28px"
                                            alt="Youtube" className="aspect-square cursor-pointer transition-transform hover:scale-140" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-6 mt-2">
                            <div className="flex flex-col justify-center items-center gap-4">
                                <p className="text-black text-center font-['Figtree'] text-[14px] font-medium leading-normal">Travel with Certified Assurance</p>
                                <div className="flex gap-2">
                                    <div className="flex items-center justify-center">
                                        <img src="/images/footer/ISO_1.png" width="90px" height="90px"
                                            alt="Reliable" className="aspect-square" />
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <img src="/images/footer/ISO_2.png" width="90px" height="90px"
                                            alt="Reliable" className="aspect-square" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-6 mt-2">
                            <div className="flex flex-col justify-center items-center gap-4">
                                <img src="/images/footer/logo_design_travel_pocket.svg"
                                    alt="Reliable" className="w-[260px] h-[70px] shrink-0 aspect-[26/7]" />
                                <div className="flex gap-2">
                                    <p className="text-black font-['Figtree'] text-[12px] font-medium leading-[22px]">© Copyright 2025 TravelPocket | All Rights Reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Bottom Section mobile ends here */}
                </div>
            </footer>
        </section>
    )
}