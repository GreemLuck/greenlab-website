import { Anchor, Box, Card, Center, Text, useMantineTheme } from "@mantine/core";
import { FaThumbsUp } from "react-icons/fa";
import classes from "./Thanks.module.css";
import { BsArrowLeftCircleFill } from "react-icons/bs";

export default function Thanks() {
    const theme = useMantineTheme()
    return (
        <Center bg={theme.colors.grey[8]} h="100vh">
            <Card key="thank-you-card" shadow="md" radius="md" padding="xl">
                <FaThumbsUp size={50} stroke="2" color={theme.colors.customGreem[9]}/>
                <Text fz="lg" fw={500} mt="md">
                    Merci pour votre message !
                </Text>
                <Text fz="sm" c="dimmed" mt="sm">
                    Nous reviendrons vers vous dès que possible.
                </Text>
                <Anchor href="/" mt="sm" className={classes.anchor}>
                    <Center inline>
                        <BsArrowLeftCircleFill size={20} />
                        <Box ml={10} fw={500}>Back to Mantine website</Box>
                    </Center>
                </Anchor>
            </Card>
        </Center>
    )
}