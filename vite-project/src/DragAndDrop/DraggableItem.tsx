import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { itemList } from "../Data/FolderData";

const DraggableItem = () => {
  return (
    <VStack w="full" alignItems="center" justifyContent="center" width="80%">
      {itemList.map((item) => {
        return (
          <HStack
            w="full"
            height="full"
            padding={4}
            minHeight="60px"
            bgColor="white"
            borderRadius="12px"
          >
            <Box
              borderRadius="6px"
              height="50px"
              width="50px"
              bgGradient="linear(to-l, #7928CA, #FF0080)"
            />
            <Text>{item.name}</Text>
          </HStack>
        );
      })}
    </VStack>
  );
};

export default DraggableItem;
