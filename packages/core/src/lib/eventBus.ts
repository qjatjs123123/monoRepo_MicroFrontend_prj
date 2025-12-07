// eventBus.ts
type Callback<T> = (payload: T) => void;

export class EventBus<T = any> {
  private events: Record<string, Callback<T>[]> = {};

  on(event: string, callback: Callback<T>) {
    if (!this.events[event]) this.events[event] = [];
    this.events[event].push(callback);
    return () => this.off(event, callback);
  }

  off(event: string, callback: Callback<T>) {
    if (!this.events[event]) return;
    this.events[event] = this.events[event].filter(cb => cb !== callback);
  }

  emit(event: string, payload: T) {
    this.events[event]?.forEach(cb => cb(payload));
  }
}
