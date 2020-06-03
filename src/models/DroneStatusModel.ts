/**
 * 无人机列表状态实体类
 */
export default class DroneStatus{
    // 状态编号
    Type: number;

    // 状态名称
    Name: string;
    
    constructor(type : number, name : string){
        this.Type = type;
        this.Name = name;
    };
}