import { Layout } from "./Components/Layout";
import DraggableItem from "./DragAndDrop/DraggableItem";
import GroupedFolderItems from "./DragAndDrop/GroupedFolderItems";
import { Text } from "@chakra-ui/react";

function App() {
  return (
    <Layout
      header={<Text>Marvin Assingnent</Text>}
      left={<GroupedFolderItems />}
    >
      <DraggableItem />
    </Layout>
  );
}

export default App;
