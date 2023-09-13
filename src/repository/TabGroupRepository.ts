import { TabGroup } from "../model/TabContainer";

export const collapseTabGroup = async (groupId: number): Promise<void> => {
  await chrome.tabGroups.update(groupId, { collapsed: true });
};

export const expandTabGroup = async (groupId: number): Promise<void> => {
  await chrome.tabGroups.update(groupId, { collapsed: false });
};

export const addTabToTabGroup = async (
  tabId: number,
  groupId: number,
): Promise<void> => {
  await chrome.tabs.group({ tabIds: tabId, groupId });
};

export const moveTabGroup = async (
  groupId: number,
  index: number,
): Promise<void> => {
  await chrome.tabGroups.move(groupId, { index });
};

export const ungroup = async (tabGroup: TabGroup) => {
  const ids = tabGroup.children.map((tab) => tab.id);
  await chrome.tabs.ungroup(ids);
};

export const closeTabGroup = async (tabGroup: TabGroup) => {
  const ids = tabGroup.children.map((tab) => tab.id);
  await chrome.tabs.remove(ids);
};
