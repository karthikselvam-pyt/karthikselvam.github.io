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
    id: 1,
    name: "List item 1",
  },
  {
    id: 2,
    name: "List item 2",
  },
  {
    id: 3,
    name: "List item 3",
  },
  {
    id: 4,
    name: "List item 4",
  },
  {
    id: 5,
    name: "List item 5",
  },
  {
    id: 6,
    name: "List item 6",
  },
  {
    id: 7,
    name: "List item 7",
  },
  {
    id: 8,
    name: "List item 8",
  },
  {
    id: 9,
    name: "List item 9",
  },
  {
    id: 10,
    name: "List item 10",
  },
];
