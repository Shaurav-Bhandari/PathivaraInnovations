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
                <div className="border-hsla relative mb-7 h-96 w-full rounded-md overflow-hidden md:h-[65vh]">
                    <BentoCard
                        src="videos/feature-1.mp4"
                        title={<>Ou<b>r</b> <b>S</b>ervices</>}
                        description="Whether you're scaling a startup, optimizing enterprise workflows, or reimagining your digital stack — our services are crafted to solve real challenges. Backed by deep technical expertise and a design-first mindset, we deliver solutions that aren't just functional, but future-proof."
                        overlayColor="bg-black/50"
                    />
                </div>
                <div className="grid h-[350vh] grid-cols-2 gap-4">
                    <div className="border-hsla relative col-span-2 overflow-hidden rounded-md transition-transform duration-300 ease-out row-span-1 md:col-span-1 md:row-span-1">
                        <BentoCard
                            src="videos/feature-2.mp4"
                            title={<>So<b>f</b>tware <b>D</b>evelopment</>}
                            description="We code your visions into reality. Our software development team crafts digital solutions that turn your ideas into innovation."
                            tiltEffect={true}
                            hoverScale={true}
                        />
                    </div>
                    <div className="border-hsla relative col-span-2 overflow-hidden rounded-md transition-transform duration-300 ease-out row-span-1 ms-32 md:col-span-1 md:ms-0">
                        <BentoCard
                            src="videos/feature-3.mp4"
                            title={<>We<b>b</b> <b>D</b>evelopment</>}
                            description="Building websites that don't just look good but perform exceptionally. Your online presence, our expertise."
                            tiltEffect={true}
                            hoverScale={true}
                        />
                    </div>
                    <div className="border-hsla relative col-span-2 overflow-hidden rounded-md transition-transform duration-300 ease-out row-span-1 me-14 md:col-span-1 md:me-0">
                        <BentoCard
                            src="videos/feature-4.mp4"
                            title={<>I<b>T</b> <b>A</b>udit</>}
                            description="Ensuring your digital infrastructure's integrity and security is our priority. We audit, you prosper."
                            tiltEffect={true}
                            hoverScale={true}
                        />
                    </div>
                    <div className="border-hsla relative col-span-2 overflow-hidden rounded-md transition-transform duration-300 ease-out row-span-1 ms-32 md:col-span-1 md:ms-0">
                        <BentoCard
                            src="videos/feature-3.mp4"
                            title={<>Di<b>g</b>ital <b>M</b>arketing</>}
                            description="Navigating the digital landscape with precision. Our strategies connect you with the world."
                            tiltEffect={true}
                            hoverScale={true}
                        />
                    </div>
                    <div className="border-hsla relative col-span-2 overflow-hidden rounded-md transition-transform duration-300 ease-out row-span-1 me-14 md:col-span-1 md:me-0">
                        <BentoCard
                            src="videos/feature-5.mp4"
                            title={<><b>T</b>raining</>}
                            description="Fortify Your Digital Bastion: Empowering Minds to Defend the Cyber Kingdom."
                            tiltEffect={true}
                            hoverScale={true}
                        />
                    </div>
                    <div className="border-hsla relative col-span-2 overflow-hidden rounded-md transition-transform duration-300 ease-out row-span-1 ms-32 md:col-span-1 md:ms-0">
                        <BentoCard
                            src="videos/feature-3.mp4"
                            title={<>G<b>r</b>aphics <b>D</b>esigining</>}
                            description="Crafting visual symphonies of data, where pixels dance to reveal the hidden melodies of information."
                            tiltEffect={true}
                            hoverScale={true}
                        />
                    </div>
                    <div className="border-hsla relative col-span-2 overflow-hidden rounded-md transition-transform duration-300 ease-out row-span-1 me-14 md:col-span-1 md:me-0">
                        <BentoCard
                            src="videos/feature-4.mp4"
                            title={<>C<b>l</b>oud C<b>o</b>nsultation</>}
                            description="Elevate your business to the cloud. We provide the guidance; you reach new heights."
                            tiltEffect={true}
                            hoverScale={true}
                        />
                    </div>
                    <div className="border-hsla relative col-span-2 overflow-hidden rounded-md transition-transform duration-300 ease-out row-span-1 ms-32 md:col-span-1 md:ms-0">
                        <BentoCard
                            src="videos/feature-3.mp4"
                            title={<>A<b>pp</b>lication D<b>e</b>velopment</>}
                            description="From concept to app store, we make your mobile dreams come true. Your vision, our app expertise."
                            tiltEffect={true}
                            hoverScale={true}
                        />
                    </div>
                    <div className="border-hsla relative col-span-2 overflow-hidden rounded-md transition-transform duration-300 ease-out row-span-1 me-14 md:col-span-1 md:me-0">
                        <BentoCard
                            src="videos/feature-5.mp4"
                            title={<>W<b>e</b>b H<b>o</b>sting</>}
                            description="Web hosting makes websites accessible online by storing them on servers provided by hosting companies."
                            tiltEffect={true}
                            hoverScale={true}
                        />
                    </div>
                    <div className={"relative col-span-1 row-span-1 overflow-hidden rounded-md transition-transform duration-300 ease-out"}>
                        <div className={"flex size-full flex-col justify-between bg-violet-300 p-5"}>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}