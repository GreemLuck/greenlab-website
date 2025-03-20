import { Group, Text, Button, Dialog } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export function CookiesBanner() {
    const [opened, { close }] = useDisclosure(true);

    return (
        <Dialog opened={opened} withCloseButton onClose={close} position={{bottom: 20, left: 20}} size="lg" radius="md">
            <Group justify="space-between" mb="xs">
                <Text fz="md" fw={500}>
                    Ce site utilise des cookies        
                </Text>
            </Group>
            <Text c="dimmed" fz="xs">
                Nous utilisons des cookies pour mesurer la performance de notre site avec Google Analytics. En continuant votre navigation, vous acceptez leur utilisation.
            </Text>
            <Group justify="flex-end" mt="md">
                <Button onClick={close} variant="default" size="xs">
                Refuser
                </Button>
                <Button onClick={close} variant="outline" size="xs">
                Accepter
                </Button>
            </Group>
        </Dialog>
    )
}