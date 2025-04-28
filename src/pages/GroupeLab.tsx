import { Container, Image, SimpleGrid, Text, Title } from "@mantine/core";
import { Animated } from "../components/Animated";
import classes from "./GroupeLab.module.css";

import greenlabImg from "../assets/Greenlab_Logo/Ecran/Greenlab_RVB_Centre_Vert.svg";
import dblabImg from "../assets/Logo_dBLab_RVB.png";
import woodlabImg from "../assets/Logo_Woodlab_noir.png"

function GroupeLab() {

    const logos = [greenlabImg, dblabImg, woodlabImg];

    const items = logos.map((path, index) => (
        <Image src={path}
            alt={"Logo " + index}
            style={{"--i": index}}
        ></Image>
    ))

    return (
        <div id="groupelab">
            <Container className={classes.container} size="xl">
                <SimpleGrid cols={{base: 1, md: 2}}>
                    <Animated animation="fade-right">
                    <div className={classes.logos}>
                        {items}
                    </div>
                    </Animated>
                    <div className="col-left">
                        <Animated animation="fade-left">
                            <Title className={classes.title}>
                                Une synergie familiale : le Groupe LAB
                            </Title>
                        </Animated>
                        <Animated animation="fade-left">
                            <Text className="" size="xl" mt="xl">
                            <b>GREENLAB</b> fait partie du Groupe LAB, un réseau d’entreprises 
                            artisanales unies par des liens humains forts et une même 
                            vision du travail bien fait. Le Groupe est né en 2018 avec <a href="https://www.woodlab-creation.ch/"><b>WOODLAB</b></a>, 
                            entreprise de menuiserie fondée à Fribourg par 
                            Thibaud Guillet et Marco Serrao, avant de s’élargir avec 
                            GREENLAB en 2019.
                            <br/><br/>
                            En 2023, Thibaud et Marco ont également fondé <a href="https://www.dblab.ch/"><b>dBLAB</b></a>, 
                            une entreprise spécialisée dans l’acoustique, la sonorisation 
                            et l’aménagement intérieur, nourrie par leur passion commune 
                            pour la musique et le design sonore.
                            <br/><br/>
                            Chaque entité du Groupe LAB a son identité propre, mais toutes 
                            partagent une même philosophie : valoriser le savoir-faire 
                            artisanal, cultiver un esprit de famille, et créer des projets 
                            sur mesure, durables et harmonieux.
                            </Text>
                        </Animated>
                    </div>
                </SimpleGrid>
            </Container>
        </div>
    );
}

export default GroupeLab;