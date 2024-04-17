import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";
import { FaFolder, FaFolderOpen } from "react-icons/fa";
import { FolderDataType, ItemType } from "../Types";

const GroupedFolderItems = ({
  folderData,
  onDrop,
  value,
  handleChange,
}: {
  folderData: FolderDataType[];
  onDrop: (value: ItemType, folder: FolderDataType) => void;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const handleDrop = (
    event: React.DragEvent<HTMLDivElement>,
    folder: FolderDataType
  ) => {
    event.preventDefault();
    const droppedItem = JSON.parse(event.dataTransfer.getData("text/plain"));
    onDrop(droppedItem, folder);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <VStack w="full" h="full" padding="4px">
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <BiSearch color="gray.300" />
        </InputLeftElement>
        <Input
          bgColor="white"
          value={value}
          borderRadius="20px"
          placeholder="Search..."
          onChange={handleChange}
        />
      </InputGroup>
      {folderData.map((folder) => {
        return (
          <Accordion w="full" defaultIndex={[0]} allowMultiple>
            <AccordionItem
              border="none"
              onDrop={(e) => handleDrop(e, folder)}
              onDragOver={handleDragOver}
            >
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
                <Text
                  fontSize="14px"
                  fontFamily="600"
                  fontStyle="normal"
                >{`(${folder.children.length} items)`}</Text>
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
