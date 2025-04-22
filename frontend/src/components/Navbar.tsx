import {useRef, useState} from "react";
import {Button} from "./Button.tsx";
import {TiLocationArrow} from "react-icons/ti";
import { useWindowScroll} from "react-use";
import gsap from "gsap";

const navItems = [
    { id: 'about',   label: 'About Us'   },
    { id: 'careers', label: 'Careers'    },
    { id: 'blogs',   label: 'Blogs'      },
    { id: 'team',    label: 'Our Team'   },
];

export function Navbar() {
    const navContainerRef = useRef<HTMLDivElement>(null);
    const [lastScrollY, setLastScrollY] = useState(0)
    const [isNavVisible, setIsNavVisible] = useState(true);
    const {y: currentScrollY} = useWindowScroll();
    useEffect(() => {
        if (currentScrollY === 0) {
            setIsNavVisible(true);
            navContainerRef.current.classList.remove('floating-nav');
        }
        else if (currentScrollY > lastScrollY) {
            setIsNavVisible(false);
            navContainerRef.current.classList.add('floating-nav');
        }
        else if (currentScrollY < lastScrollY) {
            setIsNavVisible(true);
            navContainerRef.current.classList.add('floating-nav');
        }
        setLastScrollY(currentScrollY);
    }, [currentScrollY]);
    useEffect(() => {
        gsap.to(navContainerRef, {
            Y: isNavVisible ? 0 : -100,
            opacity: isNavVisible ? 1 : 0,
            duration: 0.2,
        })
    }, [isNavVisible]);
    return (
        <>
            <div
                ref={navContainerRef}
                className={"fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"}
            >
                <header className="absolute top-1/2 w-full -translate-y-1/2">
                    <nav className="flex size-full items-center justify-between p-4">
                        {/* Logo and Product button */}
                        <div className="flex items-center gap-7">
                            <img src="/img/pathivara.webp" alt="logo" className="w-10" />

                            <Button
                                id="Contact-Button"
                                title="Contact Us"
                                rightIcon={<TiLocationArrow />}
                                containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
                            />
                        </div>
                        <div className={"flex h-full items-center"}>
                            <div className={"hidden md:block"}>
                                {navItems.map(({ id, label }) => (
                                    <a key={id} href={`#${id.toLowerCase()}`} className="nav-hover-btn">
                                        {label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </nav>

                </header>
            </div>
        </>
    );
}