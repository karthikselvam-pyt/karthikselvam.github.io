import { FolderDataType, ItemType } from "../Types";

export const defaultFolderData: FolderDataType[] = [
  {
    folderName: "Folder 1",
    id: 1,
    children: [
      {
        id: 11,
        name: "sub-folder-1a",
      },
      {
        id: 12,
        name: "sub-folder-1b",
      },
    ],
  },

  {
    folderName: "Folder 2",
    id: 2,
    children: [
      {
        id: 13,
        name: "sub-folder-2a",
      },
      {
        id: 14,
        name: "sub-folder-2b",
      },
    ],
  },
];

export const itemList: ItemType[] = [
  {
    id: 111,
    name: "List item 1",
  },
  {
    id: 222,
    name: "List item 2",
  },
  {
    id: 333,
    name: "List item 3",
  },
  {
    id: 444,
    name: "List item 4",
  },
  {
    id: 555,
    name: "List item 5",
  },
  {
    id: 666,
    name: "List item 6",
  },
  {
    id: 777,
    name: "List item 7",
  },
];
