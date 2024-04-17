import {
  Avatar,
  AvatarGroup,
  Box,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ItemType } from "../Types";

const DraggableItem = ({ item }: { item: ItemType }) => {
  const handleDrag = (e: React.DragEvent<HTMLDivElement>, item: ItemType) => {
    e.dataTransfer.setData("text/plain", JSON.stringify(item));
  };

  return (
    <VStack w="full" alignItems="center" justifyContent="center" width="80%">
      <HStack
        key={item.id}
        draggable
        onDragStart={(e) => handleDrag(e, item)}
        userSelect="none"
        _hover={{
          boxShadow: "md",
          bgColor: "blue.50",
          cursor: "pointer",
        }}
        w="full"
        height="full"
        padding={2}
        justifyContent="space-between"
        minHeight="60px"
        bgColor="white"
        borderRadius="12px"
      >
        <HStack gap={4}>
          <Box
            borderRadius="6px"
            height="50px"
            width="50px"
            bgGradient="linear(to-l, #7928CA, #FF0080)"
          />
          <Text
            fontSize="16px"
            fontWeight="600"
            fontStyle="normal"
            color="grey.500"
          >
            {item.name}
          </Text>
        </HStack>
        <AvatarGroup size="xs" gap={2} max={3}>
          <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
          <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
          <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
          <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
          <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
        </AvatarGroup>
      </HStack>
    </VStack>
  );
};

export default DraggableItem;
