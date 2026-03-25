"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroCentered from '@/components/sections/hero/HeroCentered';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="mediumLarge"
        sizing="large"
        background="noiseDiagonalGradient"
        cardStyle="gradient-mesh"
        primaryButtonStyle="flat"
        secondaryButtonStyle="layered"
        headingFontWeight="light"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarLayoutFloatingInline
            navItems={[
              {
                name: "Home",                id: "home"},
              {
                name: "Services",                id: "services"},
              {
                name: "About",                id: "about"},
              {
                name: "Testimonials",                id: "testimonials"},
              {
                name: "FAQ",                id: "faq"},
              {
                name: "Contact",                id: "contact"},
            ]}
            brandName="Armstrong Plumbing, Inc"
            button={{
              text: "Request Service",              href: "#contact"}}
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroCentered
            background={{
              variant: "plain"}}
            title="Precision Plumbing Done Right the First Time"
            description="Trusted craftsmanship, reliable service, and attention to every detail — that's the Armstrong difference. From emergency repairs to full renovations, we deliver solutions you can count on."
            avatars={[
              {
                src: "http://img.b2bpic.net/free-photo/person-doing-diy-activity-online-content-creation_23-2151515882.jpg",                alt: "Plumber portrait"},
              {
                src: "http://img.b2bpic.net/free-photo/blonde-woman-is-smiling-camera-white-background_176474-115375.jpg",                alt: "Female plumber"},
              {
                src: "http://img.b2bpic.net/free-photo/plumbing-professional-doing-his-job_23-2150721544.jpg",                alt: "Plumber at work"},
              {
                src: "http://img.b2bpic.net/free-photo/mechanic-working-car_52683-112395.jpg",                alt: "Plumbing expert"},
              {
                src: "http://img.b2bpic.net/free-photo/labor-union-members-working-together_23-2150995048.jpg",                alt: "Happy customer"},
            ]}
            buttons={[
              {
                text: "Request Service",                href: "#contact"},
            ]}
            buttonAnimation="slide-up"
          />
        </div>

        <div id="about" data-section="about">
          <SplitAbout
            textboxLayout="default"
            useInvertedBackground={true}
            title="About Armstrong Plumbing, Inc."
            description="With over 20 years of dedicated service, Armstrong Plumbing, Inc. has built a reputation for unparalleled precision, reliability, and customer satisfaction. We are committed to solving your plumbing challenges with lasting solutions and a transparent, honest approach."
            bulletPoints={[
              {
                title: "Expert Certified Plumbers",                description: "Our team consists of highly skilled and licensed professionals dedicated to top-tier workmanship."},
              {
                title: "Transparent & Fair Pricing",                description: "No surprises. We provide clear, upfront estimates and honest pricing for all services."},
              {
                title: "Reliable & Prompt Service",                description: "We understand the urgency of plumbing issues and respond quickly to your needs."},
              {
                title: "Guaranteed Customer Satisfaction",                description: "Your peace of mind is our priority. We stand behind our work with a satisfaction guarantee."},
            ]}
            imageSrc="http://img.b2bpic.net/free-photo/low-angle-man-working-as-plumber_23-2150746296.jpg"
            imageAlt="Professional plumber working on pipes"
            mediaAnimation="slide-up"
          />
        </div>

        <div id="services" data-section="services">
          <FeatureCardThree
            animationType="slide-up"
            textboxLayout="default"
            gridVariant="three-columns-all-equal-width"
            useInvertedBackground={false}
            features={[
              {
                id: "emergency-repair",                title: "24/7 Emergency Repairs",                description: "Fast and reliable service for burst pipes, leaks, and other urgent plumbing issues, anytime.",                imageSrc: "http://img.b2bpic.net/free-photo/fire-hydrant-use-structure-fire_1153-4467.jpg",                imageAlt: "Emergency plumbing repair"},
              {
                id: "drain-cleaning",                title: "Professional Drain Cleaning",                description: "Say goodbye to clogs and slow drains with our advanced, eco-friendly drain cleaning solutions.",                imageSrc: "http://img.b2bpic.net/free-photo/male-plumber-working-fix-problems-client-s-house_23-2150990735.jpg",                imageAlt: "Professional drain cleaning"},
              {
                id: "water-heater",                title: "Water Heater Services",                description: "Installation, repair, and maintenance for all types of water heaters, ensuring consistent hot water.",                imageSrc: "http://img.b2bpic.net/free-photo/plumbing-professional-doing-his-job_23-2150721544.jpg",                imageAlt: "Water heater installation"},
              {
                id: "renovation-plumbing",                title: "Renovation Plumbing",                description: "Seamless plumbing integration for your kitchen and bathroom remodels, from planning to flawless execution.",                imageSrc: "http://img.b2bpic.net/free-photo/female-cooking-cozy-kitchen_23-2147810083.jpg",                imageAlt: "Kitchen renovation plumbing"},
            ]}
            title="Our Comprehensive Plumbing Services"
            description="From routine maintenance to complex installations, our certified plumbers handle every job with expertise and care. Explore our range of services designed for your home's needs."
          />
        </div>

        <div id="testimonials" data-section="testimonials">
          <TestimonialCardFifteen
            useInvertedBackground={true}
            testimonial="\"Armstrong Plumbing Inc. saved the day! A pipe burst late at night, and they were at my house within an hour. Professional, efficient, and incredibly kind. Highly recommend their emergency service!\""
            rating={5}
            author="Sarah M."
            avatars={[
              {
                src: "http://img.b2bpic.net/free-photo/people-practicing-social-integration-workspace_23-2149405376.jpg",                alt: "Sarah M."},
              {
                src: "http://img.b2bpic.net/free-photo/handsome-man-making-ok-sign_1368-6336.jpg",                alt: "John D."},
              {
                src: "http://img.b2bpic.net/free-photo/happy-couple-greeting-their-mechanic-auto-repair-shop_637285-8674.jpg",                alt: "Emily R."},
              {
                src: "http://img.b2bpic.net/free-photo/executive-showing-his-work-digital-tablet_1098-1742.jpg",                alt: "David K."},
              {
                src: "http://img.b2bpic.net/free-photo/labor-union-members-working-together_23-2150995048.jpg",                alt: "Lisa T."},
            ]}
            ratingAnimation="slide-up"
            avatarsAnimation="slide-up"
          />
        </div>

        <div id="faq" data-section="faq">
          <FaqDouble
            textboxLayout="default"
            useInvertedBackground={false}
            faqs={[
              {
                id: "faq-1",                title: "What are your emergency service hours?",                content: "Our emergency plumbing services are available 24/7, including weekends and holidays. Just give us a call, and we'll dispatch a technician as quickly as possible."},
              {
                id: "faq-2",                title: "Do you offer free estimates?",                content: "Yes, we provide free, no-obligation estimates for most of our plumbing services. Contact us to schedule an appointment."},
              {
                id: "faq-3",                title: "Are your plumbers licensed and insured?",                content: "Absolutely. All our plumbers are fully licensed, certified, and insured, guaranteeing professional and reliable service every time."},
              {
                id: "faq-4",                title: "What areas do you serve?",                content: "We proudly serve [Your City/Region] and the surrounding areas. Please contact us to confirm service availability in your specific location."},
              {
                id: "faq-5",                title: "How quickly can you respond to a service request?",                content: "For emergencies, we aim to respond within 1-2 hours. For non-urgent requests, we typically schedule appointments within 24-48 hours."},
            ]}
            title="Frequently Asked Questions"
            description="Find quick answers to common inquiries about our services, pricing, and scheduling."
            faqsAnimation="slide-up"
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactCenter
            useInvertedBackground={true}
            background={{
              variant: "plain"
            }}
            tag="Get in Touch"
            title="Request Plumbing Service Today"
            description="Ready for reliable plumbing? Contact us now for emergency service, a free estimate, or to discuss your renovation project."
            inputPlaceholder="Enter your email"
            buttonText="Send Request"
            termsText="By clicking Send Request you're confirming that you agree with our Terms and Conditions."
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterLogoReveal
            logoText="Armstrong Plumbing, Inc."
            leftLink={{
              text: "Privacy Policy",              href: "#"}}
            rightLink={{
              text: "Terms of Service",              href: "#"}}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
