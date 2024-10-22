import { EventType } from "../model/index";
export declare class CalendarEvent {
    private readonly listeners;
    on<T>(eventType: EventType, callback: T): this;
    emit<T>(eventType: EventType, args: T): void;
    removeListener<T>(eventType: EventType, callback: T): void;
    once(eventType: EventType, callback: (...args: any) => void): void;
}
