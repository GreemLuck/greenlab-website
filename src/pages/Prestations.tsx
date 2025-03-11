import { Accordion, Container, Grid, List, Text, Title } from "@mantine/core";
import classes from "./Prestations.module.css"
import { useState } from "react";
import { Animated } from "../components/Animated";

import tonte1 from "../assets/services_img/Tonte_pelouse01.jpg"

const prestations = [
    {
        value: "gazon",
        titre: "Entretien des gazons",
        points: [
            "Tonte régulière pour un gazon bien entretenu",
            "Désherbage pour un gazon propre et en plein santé",
            "Scarification pour améliorer l’aération du sol",
            "Traitement des sols contre les maladies et parasites",
            "Apport d’engrais pour une croissance optimale",
        ],
        image1: tonte1,
        alt1: 'Une tondeuse qui tond un gazon'
    },
    {
        value: "entretien",
        titre: "Entretien des plantes et massifs",
        points: [
            "Taille des arbre, abustres et autres",
            "Fertilisation pour nourrir les plantations",
            "Désherbage manuel pour un massif propre",
            "Taille des haies pour une délimitation nette",
            "Traitement phytosanitaire pour protéger les plantes",
            "Taille fruitière pour favoriser la production",
            "Abattage des arbres",
        ],
        image1: "",
        alt1: 'Une tondeuse qui tond un gazon'
    },
    {
        value: "creation",
        titre: "Création",
        points: [
            "Installation de clôtures",
            "Construction de murs en traverses de chemin de fer",
            "Mise en place de pare-vue pour plus d’intimité",
            "Utilisation d’acier corten pour un design moderne",
            "Création d’escaliers",
        ],
        image1: "",
        alt1: 'Une tondeuse qui tond un gazon',
    },
    {
        value: "pierres",
        titre: "Pierres Sèches",
        points: [
            "Montage de murs en pierres sèches pour un aspect naturel",
            "Bordures en pierre pour délimiter les espaces",
            "Construction de terrasse en pierre sèche",
            "Aménagement de places en gravier",
            "Pose de pavés pour des allées et terrasses durables",
        ],
        image1: "",
        alt1: 'Une tondeuse qui tond un gazon',
    },
    {
        value: "terrassement",
        titre: "Terrassement",
        points: [
            "Nivellement du terrain pour une surface stable et prête à l’aménagement"
        ],
        image1: "",
        alt1: 'Une tondeuse qui tond un gazon',
    },
    {
        value: "decorations",
        titre: "Décorations",
        points: [
            "Décorations de Noël",
            "Aménagement décoratif du jardin pour une ambiance unique",
        ],
        image1: "",
        alt1: 'Une tondeuse qui tond un gazon',
    }
]


function Prestations() {

    const [value, setValue] = useState<string | null>(null);

    // const selectedService = prestations.find((item) => item.value === value);
    // const selectedImage = selectedService?.image1 || ''; // User a default later
    // const selectedAlt = selectedService?.alt1 || ''; // Use default alt

    const items = prestations.map((item) => (
        <Accordion.Item key={item.titre} value={item.value}>
            <Accordion.Control><Title order={4}>{item.titre}</Title></Accordion.Control>
            <Accordion.Panel>
                <List spacing={20}>
                    {item.points?.map(point => <List.Item key={point}><Text>{point}</Text></List.Item>)}
                </List>
            </Accordion.Panel>
        </Accordion.Item>
    ));

    return (
        <div className={classes.prestations} id="prestations">
        <Container className={classes.container} size="xl">
            <Grid gutter={{base: 50, md: 200}}>
                    <Grid.Col span={{base: 12, md: 6}}>
                        <Animated animation="fade-right" duration={2000}>
                            <Title className={classes.title}  order={3} textWrap="pretty">
                            Nous offrons divers services de l'entretien des gazons à l'aménagement de vos terrasses en pierres sèches.
                            </Title>
                        {/* <Box className={classes.image1Container}>
                            {selectedImage && <Image radius='sm' src={selectedImage} alt={selectedAlt}/>}
                        </Box>
                        <Box className={classes.image2Container}>
                            {selectedImage && <Image radius='sm' src={selectedImage} alt={selectedAlt}/>}
                        </Box> */}
                        </Animated>
                    </Grid.Col>
                <Grid.Col span={{base: 12, md: 6}}>
                    <Animated animation="fade-left" duration={2000}>
                    <Accordion value={value} onChange={setValue} radius="xs" classNames={{item: classes.item, control: classes.control}}>
                        {items}
                    </Accordion>
                    </Animated>
                </Grid.Col>
            </Grid>
        </Container>

        </div>
    )
}

export default Prestations