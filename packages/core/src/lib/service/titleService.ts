// titleService.ts
import { EventBus } from "../eventBus";

export const titleBus = new EventBus<string>();

export const setTitle = (title: string) => {
  titleBus.emit("titleChange", title);
};

export const subscribeTitle = (callback: (title: string) => void) => {
  return titleBus.on("titleChange", callback);
};
