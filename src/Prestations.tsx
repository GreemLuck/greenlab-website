import { Accordion, Container, Grid, List, Text, Title } from "@mantine/core";
import classes from "./Prestations.module.css"
import { useState } from "react";

import tonte1 from "./assets/services_img/Tonte_pelouse01.jpg"

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
    },
    {
        value: "terrassement",
        titre: "Terrassement",
        points: [
            "Nivellement du terrain pour une surface stable et prête à l’aménagement"
        ],
        image1: "",
    },
    {
        value: "decorations",
        titre: "Décorations",
        points: [
            "Décorations de Noël",
            "Aménagement décoratif du jardin pour une ambiance unique",
        ],
        image1: "",
    }
]


function Prestations() {

    const [value, setValue] = useState<string | null>(null);

    const items = prestations.map((item) => (
        <Accordion.Item key={item.titre} value={item.value}>
            <Accordion.Control><Title order={4}>{item.titre}</Title></Accordion.Control>
            <Accordion.Panel>
                <List spacing={20}>
                    {item.points?.map(point => <List.Item><Text>{point}</Text></List.Item>)}
                </List>
            </Accordion.Panel>
        </Accordion.Item>
    ));

    return (
        <div className={classes.prestations} id="prestations">
        <Container className={classes.container} size="xxl">
            <Grid gutter={{base: 50, md: 200}}>
                <Grid.Col span={{base: 12, md: 6}}>
                    <Title className={classes.title}  order={3} textWrap="pretty">
                    Nous offrons divers services de l'entretien des gazons à l'aménagement de vos terrasses en pierres sèches.
                    </Title>
                </Grid.Col>
                <Grid.Col span={{base: 12, md: 6}}>
                    <Accordion value={value} onChange={setValue} radius="xs" classNames={{item: classes.item, control: classes.control}}>
                        {items}
                    </Accordion>
                </Grid.Col>
            </Grid>
        </Container>

        </div>
    )
}

export default Prestations