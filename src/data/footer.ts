import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
    kvk: string;
    btw: string;
    address: string;
    legalName: string;
} = {
    subheading: "Focus op het dak, wij op de rest. Wij regelen je telefoontjes, planning en marketing, zodat jij kunt doen waar je goed in bent.",
    quickLinks: [
        { text: "Functies", url: "/#features" },
        { text: "Tarieven", url: "/tarieven" },
        { text: "Gratis Scan", url: "/gratis-scan" },
        { text: "Blog", url: "/blog" },
        { text: "Chatbot voor Dakdekkers", url: "/chatbot-voor-dakdekkers" },
        { text: "Voice AI voor Dakdekkers", url: "/voice-ai-voor-dakdekkers" },
        { text: "SEO voor Dakdekkers", url: "/seo-voor-dakdekkers" },
        { text: "Social Media", url: "/social-media-voor-dakdekkers" },
        { text: "Reviews", url: "/reviews-voor-dakdekkers" },
        { text: "Review Pakket", url: "/review-pakket" }
    ],
    email: 'Info@dakdekkerai.nl',
    telephone: '+31612345678',
    socials: {
        instagram: 'https://www.instagram.com',
        linkedin: 'https://www.linkedin.com',
    },
    kvk: '98933353',
    btw: 'NL005362803B09',
    address: 'De Donge 9, 3448CJ, Woerden',
    legalName: 'DigitalStudioLee'
}