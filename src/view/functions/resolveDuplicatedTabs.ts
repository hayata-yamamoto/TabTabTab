import { Tab, isSamePageTabs } from "../../model/Tab";
import { Window, flatTabsInWindows } from "../../model/Window";
import { closeTabs } from "../../repository/TabsRepository";

export const resolveDuplicatedTabs = async (
  windows: Window[],
  targetTab: Tab,
) => {
  const allTabs = flatTabsInWindows(windows);
  const duplicateTabs = allTabs.filter(
    (tab) => tab.id !== targetTab.id && isSamePageTabs(tab, targetTab),
  );
  const duplicateTabIds = duplicateTabs.map((t) => t.id);
  await closeTabs(duplicateTabIds);
};
