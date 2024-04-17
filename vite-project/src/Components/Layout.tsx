import { HStack, VStack, Text } from "@chakra-ui/react";
import React from "react";
import { Helmet } from "react-helmet";

export const Layout = ({
  header,
  left,
  children,
}: {
  header?: React.ReactNode;
  left: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <VStack w="100vw" height="100vh">
      <Helmet>
        <title>Draggable-folder</title>
        <meta name="viewport" content="initial-scale=1.0, width=1440" />
      </Helmet>
      <VStack w="full" justify="center" align="start" minHeight="60px" p="20px">
        <Text
          fontWeight="600"
          color="gray.800"
          fontStyle="normal"
          fontSize="20px"
        >
          {header}
        </Text>
      </VStack>
      <HStack w="full" h="100vh" bgColor="gray.100" padding="20px" gap={4}>
        <VStack overflow="hidden" maxWidth="20rem" width="full" height="full">
          {left}
        </VStack>
        <VStack flex="1" width="full" height="full">
          {children}
        </VStack>
      </HStack>
    </VStack>
  );
};
