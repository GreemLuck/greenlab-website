import {Burger, Group, Stack} from "@mantine/core";
import greenlabLogo from '/Greenlab_RVB_Gauche_Vert.svg'
import classes from "./Header.module.css"
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import { FACEBOOK_URL, INSTAGRAM_URL } from "../constants";

const links = [
    {link: '/', label: 'Accueil'},
    {link: '#about', label: 'À propos'},
    {link: '#prestations', label: 'Prestations'},
    {link: '#samples', label: "Créations"},
    {link: '#contact-form', label: 'Contact'},
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
                    <img className={classes.logo} width={100} src={greenlabLogo} alt="Logo Greenlab Creation"/>
                </a>
                <Group>          
                    <Group gap={10} ml={50} className={classes.links} visibleFrom="md">
                        {items}
                        <a href="https://www.instagram.com/greenlab_creation_sarl" className={classes.socials} aria-label="Lien vers GreenLab Instagram">
                            <FaInstagram size={25}/>
                        </a>
                        <a href="https://www.facebook.com/greenlabcreation/" className={classes.socials} aria-label="Lien vers GreenLab Facebook">
                            <FaFacebook size={25}/>
                        </a>
                    </Group>
                    <Burger aria-label="Ouvrir la navigation" opened={opened} onClick={toggle} size="lg" hiddenFrom="md" />
                </Group>
            </div>
            <div>
                {opened && (
                    <Stack
                        bg="#D9D9CB"
                        align="center"
                        justify="space-between"
                        gap={55}
                        p={50}
                        c="var(--mantine-color-white)"
                        >
                    {items}
                    <Group>
                    <a href={INSTAGRAM_URL} className={classes.socials} aria-label="Lien vers GreenLab Instagram">
                            <FaInstagram size={40}/>
                        </a>
                        <a href={FACEBOOK_URL} className={classes.socials} aria-label="Lien vers GreenLab Facebook">
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