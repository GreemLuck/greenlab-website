import {Burger, Group, Stack} from "@mantine/core";
import greenlabLogo from '../assets/greenlab_logo.png'
import classes from "./Header.module.css"
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import { FACEBOOK_URL, INSTAGRAM_URL } from "../constants";

const links = [
    {link: '/', label: 'Accueil'},
    {link: '#about', label: 'À propos'},
    {link: '#prestations', label: 'Prestations'},
    {link: '/contact', label: 'Contact'},
]

function Banner() {
    const [opened, { toggle }] = useDisclosure();
    const [active, setActive] = useState(links[0].link);

    const items = links.map((link) => (
        <a
            key={link.label}
            href={link.link}
            className={classes.link}
            data-active={active === link.link || undefined}
            onClick={() => {
                setActive(link.link);
            }}
        >
            {link.label}
        </a>
    ));

    return (
        <header className={classes.header}>
            <div className={classes.inner}>
                <a href="/">                
                    <img className={classes.logo} width="170" src={greenlabLogo}/>
                </a>
                <Group>          
                    <Group gap={10} ml={50} className={classes.links} visibleFrom="sm">
                        {items}
                        <a href="www.instagram.com" className={classes.socials}>
                            <FaInstagram size={25}/>
                        </a>
                        <a href="www.facebook.com" className={classes.socials}>
                            <FaFacebook size={25}/>
                        </a>
                    </Group>
                    <Burger opened={opened} onClick={toggle} size="lg" hiddenFrom="sm" />
                </Group>
            </div>
            <div>
                {opened && (
                    <Stack
                        bg="var(--mantine-color-grey-8)"
                        align="center"
                        justify="space-between"
                        gap={55}
                        p={50}
                        c="var(--mantine-color-white"
                        >
                    {items}
                    <Group>
                    <a href={INSTAGRAM_URL} className={classes.socials}>
                            <FaInstagram size={40}/>
                        </a>
                        <a href={FACEBOOK_URL} className={classes.socials}>
                            <FaFacebook size={40}/>
                        </a>
                    </Group>
                    </Stack>
                )}
            </div>
        </header>
    )
}

export default Banner;