import { Group } from "konva/lib/Group";
export type EventType = "ADDTASKRANGE" | "CLICKRANGE" | "UPDATETASK" | "CONTEXTMENU" | "CLICKSURPASSTIP";
export interface KonvaCalendarConfig {
    mode: 'read' | 'edit';
    container: string;
    width?: number;
    height?: number;
    initDate?: Date | 'string';
    isAddTaskBtn?: boolean;
}
export interface Range {
    startTime: string;
    endTime: string;
    fill: string;
    description: string;
    id: string;
    [x: string]: any;
}
export interface DragRect {
    differenceX: number;
    differenceY: number;
    sourceX: number;
    sourceY: number;
    startX: number;
    startY: number;
    targetGroup: null | Group;
}
export declare class RecordsDragGroupRect {
    differenceX: number;
    differenceY: number;
    sourceX: number;
    sourceY: number;
    startX: number;
    startY: number;
    targetGroup: null | Group;
    constructor(props?: Partial<RecordsDragGroupRect>);
}
