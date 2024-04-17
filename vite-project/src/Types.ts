export interface ItemType {
  name: string;
  id: number;
}

export interface FolderDataType {
  folderName: string;
  id: number;
  children: ItemType[];
}
