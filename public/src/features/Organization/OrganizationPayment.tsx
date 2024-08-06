import { useState } from 'react';
import { Badge, Button, Card, Group, Image, Text, Select, NumberInput } from "@mantine/core";
import CustomContainer from "../Components/ui/CustomContainer/CustomContainer";

const OrganizationPayment = () => {
  const [plan, setPlan] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);

  const handlePayment = () => {
    // Handle payment logic here
    alert(`Subscribed to ${plan} plan with quantity ${quantity}`);
  };

  return (
    <CustomContainer>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section component="a" href="https://mantine.dev/">
          <Image
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
            height={160}
            alt="Norway"
          />
        </Card.Section>

        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>Norway Fjord Adventures</Text>
          <Badge color="pink">On Sale</Badge>
        </Group>

        <Text size="sm" c="dimmed">
          With Fjord Tours you can explore more of the magical fjord landscapes with tours and
          activities on and around the fjords of Norway
        </Text>

        <Select
          label="Select a plan"
          placeholder="Choose a subscription plan"
          data={[
            { value: 'basic', label: 'Basic - $10/month' },
            { value: 'premium', label: 'Premium - $20/month' },
            { value: 'enterprise', label: 'Enterprise - $50/month' }
          ]}
          value={plan}
          onChange={setPlan}
          mt="md"
          radius="md"
        />

        <NumberInput
          label="Quantity"
          value={quantity}
          onChange={(value) => setQuantity(Number(value) || 1)}
          min={1}
          mt="md"
          radius="md"
        />

        <Button
          color="blue"
          fullWidth
          mt="md"
          radius="md"
          onClick={handlePayment}
          disabled={!plan}
        >
          Subscribe Now
        </Button>
      </Card>
    </CustomContainer>
  );
};

export default OrganizationPayment;
