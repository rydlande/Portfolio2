
export function Footer() {
    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noreferrer');
    };

    const socialLinks = [
        {
            id: 1,
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/eirin-rydland-944b49210/',
        },
        {
            id: 3,
            name: 'GitHub',
            url: 'https://github.com/rydlande',
        },
        {
            id: 4,
            name: 'Download CV',
            url: 'https://drive.google.com/file/d/1bxYBeYEHUJWHyUqINBBX91FrcSQem3-F/view?usp=sharing',
        }
    ];

    return (
        <footer className='w-full flex justify-center items-center pt-16 pb-12 bg-blue text-beige-light'>
            <div className="flex justify-between w-full items-end max-w-md md:max-w-3xl lg:max-w-4xl">
                <div>
                    <ul>
                        {socialLinks.map((link) => (
                            <li key={link.id} className="hover:font-bold cursor-pointer">
                                <a onClick={() => openInNewTab(link.url)}>{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <p>Email: <span className="underline">eirinrydland@outlook.com</span></p>
                </div>
            </div>
        </footer>
    )
}