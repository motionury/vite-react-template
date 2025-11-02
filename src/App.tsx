import { Center, Container, Text } from '@mantine/core';
import { Heart } from 'lucide-react';

function App() {
  return (
    <Container fluid pt={100} content="center">
      <Center>
        <Heart size={40} color="red" />
        <Text fw={700} size="lg" ml={20}>Hello,Motionury</Text>
      </Center>
    </Container>
  )
}

export default App