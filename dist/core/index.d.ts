import { Stage } from "konva/lib/Stage";
import { EventType, KonvaCalendarConfig, Range } from "../model/index";
/**
 * @example
    const element = document.getElementsByClassName('.calendar-root')[0]!;
    const bootstrap = new CanvasKonvaCalendar({
      mode: 'edit',
      container: '.smart-table-root',
      width : element.clientWidth || innerWidth - 240
     })
    
    bootstrap.setData([
    {
       startTime: '2024-10-01',
       endTime: '2024-10-20',
       fill: 'rgba(0, 0, 255, 0.3)',
       description: '3 ',
       id: uuid()
     },
    ])
    bootstrap.on('ADDTASKRANGE', (day: string) => {
      console.log('添加任务', day);
    })
    bootstrap.on('CLICKRANGE', (day: string) => {
      console.log('选择日期', day);
    })
    bootstrap.on('CONTEXTMENU', (day: string) => {
      console.log('右键', day);
    })
    bootstrap.on('UPDATETASK', (source: any) => {
      console.log('任务更新', source);
    })
    bootstrap.on('CLICKSURPASSTIP', (day: string) => {
      console.log('查看所有选项', day);
    })
 */
export declare class CanvasKonvaCalendar {
    private readonly config;
    static readonly daysOfWeek: string[];
    private readonly layer;
    private readonly featureLayer;
    private readonly stage;
    private hoverGroup;
    private readonly cellWidth;
    private readonly cellHeight;
    private readonly startX;
    private readonly emitter;
    private hoverRect;
    taskRanges: any[];
    private date;
    private stringDate;
    private month;
    private year;
    private recordsDragGroupRect;
    private dragGroup;
    private readonly stageHeight;
    private clickCurrentInfo;
    private element;
    constructor(config: KonvaCalendarConfig);
    private initDate;
    private get box();
    private setContainer;
    private get container();
    downImage(config?: Parameters<Stage['toImage']>[number]): void;
    private registerEvents;
    private contextMenu;
    private get stageRect();
    private mousedown;
    private mousemoveHoveHighlight;
    private dragMousemove;
    private mouseup;
    setData(ranges: Range | Range[]): this;
    on(key: EventType, callback: any): this;
    destory(): void;
    private addDays;
    private addMonth;
    private draw;
    nextMonth(): void;
    today(): void;
    prevMonth(): void;
    private findGroup;
    private getDaysInMonth;
    private drawCalendar;
    private drawTaskProgress;
    private drawSurpassTips;
    /**
     * 给定一个日期 判断 this.taskRanges 中哪些日期包含了这个日期
     */
    private findTasksContainingDate;
    private removeTasks;
    private calculateDaysDifference;
    private splitRanges;
    private drawHoverGroup;
    private drawPlusSign;
    private static formatDate;
    private static getChineseCalendar;
}
