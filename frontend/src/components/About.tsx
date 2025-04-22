import { useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/all";
import {AnimatedTitle} from "./AnimatedTitle.tsx";

gsap.registerPlugin(ScrollTrigger);

export function About() {
    useGSAP(() => {
        const clipAnimation =  gsap.timeline({
            scrollTrigger:{
                trigger: '#clip',
                start: 'center center',
                end: '+=800 center',
                scrub: 0.2,
                pin: true,
                pinSpacing: true,
            }
        });
        clipAnimation.to('.mask-clip-path', {
            width: '100vw',
            height: '100vh',
            borderRadius: 0
        })

    });
    return (
        <div id={"about"} className="min-h-screen w-screen">
            <div className={"relative mb-8 mt-36 flex flex-col items-center gap-5"}>
                <h2 className={"font-general text-sm uppercase md:text-[10px]"}>
                    Welcome to Pathivara Innovations!
                </h2>
                    <AnimatedTitle title={"We are your partners in digital transformation."} containerClass={"mt-5 !text-black text-center"} />
                <div className={"about-subtext "}>
                    <p className={"text-grey-500"}>
                        We craft bespoke software, cloud integrations and strategic consulting to help businesses thrive in a fast‑moving landscape—combining technical expertise, creative flair and an unwavering commitment to excellence.
                    </p>
                </div>
            </div>
            <div className={"h-dvh w-screen"} id="clip">
                <div className={"mask-clip-path about-image"}>
                    <img
                        src={"img/about.webp"}
                        alt={"background"}
                        className={"absolute left-0 top-0 size-full object-cover"}
                    />
                </div>
            </div>
        </div>
    );
}