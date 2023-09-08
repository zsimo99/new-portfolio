
const sections = [
    { id: "home", label: "Home" },
    { id: "aboutUs", label: "About Us" },
    { id: "portfolio", label: "Portfolio" },
    { id: "services", label: "Services" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
];

// eslint-disable-next-line react/prop-types
const Header = ({ activeSection }) => {
    return (
        <header className="top-0 left-0 fixed w-full z-[999] text-white">
            <div className="container mx-auto px-4 flex justify-between">
                <div className="text-xl font-black">
                    logo
                </div>
                <ul className="flex gap-5 text-lg md:text-xl lg:text-2xl font-semibold">
                    {sections.map((section) => (
                        <li key={section.id}>
                            <a
                                className={`linkItem ${activeSection === section.id && "active"}`}
                                href={`#${section.id}`}
                            >
                                {section.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    )
}

export default Header