"use client";

import DetailPackage from "@/components/detailPage/detail-package";
import ContactOurExperts from "@/components/home/contact-our-experts";
import { Footer } from "@/components/shared/footer";
import Header from "@/components/shared/header";

export default function DetailPage() {


    return (
        <>
            <Header />
            <DetailPackage />
            {/* <ContactOurExperts /> */}
            <Footer showSections={{ whatsapp: true, helpCenter: true, newsletter: true }} />
        </>
    )
}