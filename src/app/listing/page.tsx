"use client";

import AllDestinations from "@/components/listingPage/all-destinations";
import { Footer } from "@/components/shared/footer";
import Header from "@/components/shared/header";



export default function DetailPage() {


    return (
        <>
        <Header />
        <AllDestinations />
        <Footer showSections={{ whatsapp: true, helpCenter: true, newsletter: true }} />
        </>
    )
}