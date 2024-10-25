import { Group } from "konva/lib/Group";

export type EventType =
  // 点击 加号 添加任务
  "ADDTASKRANGE" |
  //  点击 某个 range
  "CLICKRANGE" |
  //  更新任务
  "UPDATETASK" |
  //  右键
  "CONTEXTMENU" |
  //  点击查看 多余选项
  "CLICKSURPASSTIP"

export interface KonvaCalendarConfig {
  //  模式  可读 ｜ 可修改 ( 影响拖动是否可修改日期 )
  mode: 'read' | 'edit';
  //  挂载节点
  container: string;
  //  日历表 宽高
  width?: number;
  height?: number;
  //  初始时间
  initDate?: Date | 'string';
  //  添加任务 btn
  isAddTaskBtn?: boolean
}

export interface Range {
  startTime: string;
  endTime: string;
  fill: string;
  description: string;
  id: string;
  [x : string] : any
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


export class RecordsDragGroupRect {
  differenceX = 0;
  differenceY = 0;
  sourceX = 0;
  sourceY = 0;
  startX = 0;
  startY = 0;
  targetGroup: null | Group = null;

  constructor(props?: Partial<RecordsDragGroupRect>) {
    Object.assign(this, props);
  }
}