import { EventType } from "../model/index";

export class CalendarEvent {
  private readonly listeners = new Map();

  on<T>(eventType: EventType, callback: T) {
    if (!this.listeners.has(eventType)) {
      this.listeners.set(eventType, [callback]);
      return this;
    }
    const listeners = this.listeners.get(eventType);
    this.listeners.set(eventType, [...listeners, callback]);
    return this;
  }

  emit<T>(eventType: EventType, args: T) {
    if (this.listeners.has(eventType)) {
      const currentListener = this.listeners.get(eventType);
      for (const callback of currentListener) {
        callback(args);
      }
    }
  }

  removeListener<T>(eventType: EventType, callback: T) {
    if (this.listeners.has(eventType)) {
      const currentListener = this.listeners.get(eventType);
      const index = currentListener.indexOf(callback);
      if (index && index >= 0) {
        currentListener.splice(index, 1);
      }
    }
  }

  once(eventType: EventType, callback: (...args: any) => void) {
    const execCalllback = (...args: any) => {
      callback(...args);
      this.removeListener(eventType, execCalllback);
    };
    this.on(eventType, execCalllback);
  }
}