import { Heading, Image, Stack, Text } from '@chakra-ui/react';

import { Card, CardWrap } from './PointItem.styled';

export const PointItem = ({ data }) => {
  const { id, name, description, image } = data;
  return (
    <Card maxW="md" key={id}>
      <CardWrap>
        <Image
          boxSize="150px"
          objectFit="cover"
          src={image}
          alt={name}
          borderRadius="full"
        />

        <Stack mt="6" spacing="3">
          <Heading size="md">{name}</Heading>
          <Text fontSize="xs">{description}</Text>
        </Stack>
      </CardWrap>
    </Card>
  );
};
