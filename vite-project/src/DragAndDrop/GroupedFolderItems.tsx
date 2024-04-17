import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  HStack,
  Icon,
  VStack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { defaultFolderData } from "../Data/FolderData";
import { FolderDataType, ItemType } from "../Types";
import { FaFolder, FaFolderOpen } from "react-icons/fa";

const GroupedFolderItems = () => {
  const [folderData, setFolderdata] =
    useState<FolderDataType[]>(defaultFolderData);

  return (
    <VStack w="full" h="full">
      {folderData.map((folder) => {
        return (
          <Accordion w="full" defaultIndex={[0]} allowMultiple>
            <AccordionItem border="none">
              <AccordionButton
                borderRadius="16px"
                _expanded={{
                  bgColor: "blue.100",
                }}
                display="flex"
                gap="4px"
              >
                <AccordionIcon />
                <Icon as={FaFolderOpen} color="blue.500" />
                <Box as="span" flex="1" textAlign="left">
                  {folder.folderName}
                </Box>
              </AccordionButton>
              <AccordionPanel paddingLeft="40px">
                {folder.children.map((item) => {
                  return <Folder item={item} />;
                })}
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        );
      })}
    </VStack>
  );
};

const Folder = ({ item }: { item: ItemType }) => {
  return (
    <HStack w="full">
      <Icon color="blue.500" as={FaFolder} />
      <Text>{item.name}</Text>
    </HStack>
  );
};

export default GroupedFolderItems;
