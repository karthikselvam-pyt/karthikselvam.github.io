import { Text, VStack } from "@chakra-ui/react";
import { useCallback, useState } from "react";
import { Layout } from "./Components/Layout";
import { defaultFolderData, itemList } from "./Data/FolderData";
import DraggableItem from "./DragAndDrop/DraggableItem";
import GroupedFolderItems from "./DragAndDrop/GroupedFolderItems";
import { FolderDataType, ItemType } from "./Types";

function App() {
  const [items, setItems] = useState<ItemType[]>(itemList);

  const [value, setValue] = useState("");

  const [folderData, setFolderData] =
    useState<FolderDataType[]>(defaultFolderData);

  const handleDrop = (value: ItemType, folder: FolderDataType) => {
    const temp = [...folderData];
    let res;
    const folderIndex = temp.findIndex((v) => v.id === folder.id);

    if (folderIndex !== -1) {
      res = temp.map((folder, index) =>
        index === folderIndex
          ? { ...folder, children: [...folder.children, value] }
          : folder
      );
      setFolderData(res);
    }
    setItems((prev) => prev.filter((c) => c.id != value.id));
  };

  const handleChange = useCallback(
    (value: string) => {
      setValue(value);
      const searchText = value.toLowerCase().trim();
      const updatedSearch = searchText
        ? items.filter((v) => v.name.includes(searchText))
        : itemList;
      setItems(updatedSearch);
    },
    [items]
  );

  return (
    <Layout
      header={<Text>Marvin Assingnent</Text>}
      left={
        <GroupedFolderItems
          folderData={folderData}
          onDrop={(value, folder) => handleDrop(value, folder)}
          value={value}
          handleChange={(e) => handleChange(e.target.value)}
        />
      }
    >
      {items.length ? (
        items.map((v) => {
          return <DraggableItem key={v.id} item={v} />;
        })
      ) : (
        <VStack w="full" h="full" justifyContent="center" alignItems="center">
          <Text fontSize="20px" fontWeight="700">
            No Items to Show
          </Text>
        </VStack>
      )}
    </Layout>
  );
}

export default App;
