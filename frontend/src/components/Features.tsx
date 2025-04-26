import '../index.css';
import { BentoCard } from "./BentoCard";

export function Features() {
    return (
        <section className="bg-black pb-52">
            <div className="container mx-auto px-3 md:px-10">
                <div className="px-5 pt-32 pb-10">
                    <p className="font-circular-web text-lg text-blue-50">
                        From a small studio to a full-cycle creative agency!
                    </p>
                </div>
                <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50 px-6 pb-3">
                    At Pathivara Innovations, we don't just build software — we engineer scalable, secure, and future-ready solutions that align with your vision. From enterprise-grade systems to cloud-native platforms, every line of code we write is designed to deliver impact, performance, and growth.
                </p>

                {/* Main Services Card - Full Width */}
                <div className="relative mb-7 w-full rounded-xl overflow-hidden h-96 md:h-[65vh]">
                    <BentoCard
                        src="videos/feature-1.mp4"
                        title={<span className="text-4xl font-bold">OUR SERVICES</span>}
                        description="Whether you're scaling a startup, optimizing enterprise workflows, or reimagining your digital stack — our services are crafted to solve real challenges."
                        overlayColor="bg-black/70"
                        buttonText="EXPLORE SERVICES"
                        mobileStyling={true}
                    />
                </div>

                {/* Mobile-first display - stack cards vertically on mobile */}
                <div className="flex flex-col space-y-6 md:grid md:grid-cols-4 md:grid-rows-9 md:gap-4 md:space-y-0">
                    {/* Software Development */}
                    <div className="relative overflow-hidden rounded-xl border-[1px] border-gray-800 md:col-span-2 md:row-span-4">
                        <BentoCard
                            src="videos/feature-2.mp4"
                            title={<span className="text-3xl font-bold">SOFTWARE DEVELOPMENT</span>}
                            description="We code your visions into reality. Our software development team crafts digital solutions that turn your ideas into innovation."
                            tiltEffect={true}
                            hoverScale={true}
                            buttonText="COMING SOON"
                            mobileStyling={true}
                        />
                    </div>

                    {/* Web Development */}
                    <div className="relative overflow-hidden rounded-xl border-[1px] border-gray-800 md:col-span-2 md:row-span-2 md:col-start-3">
                        <BentoCard
                            src="videos/feature-3.mp4"
                            title={<span className="text-3xl font-bold">WEB DEVELOPMENT</span>}
                            description="Building websites that don't just look good but perform exceptionally. Your online presence, our expertise."
                            tiltEffect={true}
                            hoverScale={true}
                            buttonText="LAUNCH SITE"
                            mobileStyling={true}
                        />
                    </div>

                    {/* IT Audit */}
                    <div className="relative overflow-hidden rounded-xl border-[1px] border-gray-800 md:col-span-2 md:row-span-2 md:col-start-3 md:row-start-3">
                        <BentoCard
                            src="videos/feature-4.mp4"
                            title={<span className="text-3xl font-bold">IT AUDIT</span>}
                            description="Ensuring your digital infrastructure's integrity and security is our priority. We audit, you prosper."
                            tiltEffect={true}
                            hoverScale={true}
                            buttonText="COMING SOON"
                            mobileStyling={true}
                        />
                    </div>

                    {/* Digital Marketing */}
                    <div className="relative overflow-hidden rounded-xl border-[1px] border-gray-800 md:col-span-2 md:row-span-2 md:row-start-5">
                        <BentoCard
                            src="videos/feature-3.mp4"
                            title={<span className="text-3xl font-bold">DIGITAL MARKETING</span>}
                            description="Navigating the digital landscape with precision. Our strategies connect you with the world."
                            tiltEffect={true}
                            hoverScale={true}
                            buttonText="COMING SOON"
                            mobileStyling={true}
                        />
                    </div>

                    {/* Graphics Designing */}
                    <div className="relative overflow-hidden rounded-xl border-[1px] border-gray-800 md:row-span-2 md:col-start-3 md:row-start-5">
                        <BentoCard
                            src="videos/feature-3.mp4"
                            title={<span className="text-3xl font-bold">GRAPHICS DESIGNING</span>}
                            description="Crafting visual symphonies of data, where pixels dance to reveal the hidden melodies of information."
                            tiltEffect={true}
                            hoverScale={true}
                            buttonText="COMING SOON"
                            mobileStyling={true}
                        />
                    </div>

                    {/* Cloud Consultation */}
                    <div className="relative overflow-hidden rounded-xl border-[1px] border-gray-800 md:row-span-2 md:col-start-4 md:row-start-5">
                        <BentoCard
                            src="videos/feature-4.mp4"
                            title={<span className="text-3xl font-bold">CLOUD CONSULTATION</span>}
                            description="Elevate your business to the cloud. We provide the guidance; you reach new heights."
                            tiltEffect={true}
                            hoverScale={true}
                            buttonText="COMING SOON"
                            mobileStyling={true}
                        />
                    </div>

                    {/* Training */}
                    <div className="relative overflow-hidden rounded-xl border-[1px] border-gray-800 md:col-span-full md:row-span-4 md:row-start-7">
                        <BentoCard
                            src="videos/feature-5.mp4"
                            title={<span className="text-3xl font-bold">TRAINING</span>}
                            description="Fortify Your Digital Bastion: Empowering Minds to Defend the Cyber Kingdom."
                            tiltEffect={true}
                            hoverScale={true}
                            buttonText="COMING SOON"
                            mobileStyling={true}
                        />
                    </div>

                    {/* Application Development */}
                    <div className="relative overflow-hidden rounded-xl border-[1px] border-gray-800 md:col-span-2 md:row-span-2">
                        <BentoCard
                            src="videos/feature-3.mp4"
                            title={<span className="text-3xl font-bold">APPLICATION DEVELOPMENT</span>}
                            description="From concept to app store, we make your mobile dreams come true. Your vision, our app expertise."
                            tiltEffect={true}
                            hoverScale={true}
                            buttonText="COMING SOON"
                            mobileStyling={true}
                        />
                    </div>

                    {/* Web Hosting */}
                    <div className="relative overflow-hidden rounded-xl border-[1px] border-gray-800 md:col-span-2 md:row-span-2">
                        <BentoCard
                            src="videos/feature-5.mp4"
                            title={<span className="text-3xl font-bold">WEB HOSTING</span>}
                            description="Web hosting makes websites accessible online by storing them on servers provided by hosting companies."
                            tiltEffect={true}
                            hoverScale={true}
                            buttonText="COMING SOON"
                            mobileStyling={true}
                        />
                    </div>
                </div>

                {/* Our Mission Card */}
                <div className="relative mb-7 w-full rounded-xl overflow-hidden h-96 md:h-[65vh] my-10">
                    <BentoCard
                        src="videos/feature-5.mp4"
                        title={<span className="text-4xl font-bold">OUR MISSION</span>}
                        description="At Pathivara Innovations Pvt. Ltd, our mission is to empower businesses and individuals with cutting-edge technology solutions and cybersecurity expertise."
                        tiltEffect={true}
                        hoverScale={true}
                        buttonText="LEARN MORE"
                        mobileStyling={true}
                    />
                </div>
            </div>
        </section>
    );
}