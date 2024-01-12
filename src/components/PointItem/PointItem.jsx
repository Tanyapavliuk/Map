import { Heading, Image, Stack } from '@chakra-ui/react';

import { Card, CardWrap, Description } from './PointItem.styled';

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

        <Stack spacing="3">
          <Heading size="md">{name}</Heading>
          <Description className="scroll">{description}</Description>
        </Stack>
      </CardWrap>
    </Card>
  );
};
