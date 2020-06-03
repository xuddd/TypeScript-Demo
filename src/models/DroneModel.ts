/**
 * 无人机实体类 
 */
export default class Drone implements DroneModule.IDrone{
    // 图标url
    IconUrl: string;

    // 设备类型
    GpsType: string;

    // 设备ID
    GpsId: string;

    // 侦听时间
    Time: string;

    // 设备状态
    Status: number;

    // 纬度 
    Latitude: number = 113.5;

    // 经度
    Longitude: number = 30.5;

    // 高度
    Altitude: number = 100;

    // 速度
    Speed: number = 50;

    // 无人机位置
    DroneAddress: string = '武汉市公安局';

    // 飞手位置
    HumanAddress: string = '武汉市公安局';

    constructor(gpsType: string, gpsId: string, time: string, status: number){
        this.IconUrl = require(`../assets/icon_type_0${status}.png`);
        this.GpsType = gpsType;
        this.Time = time;
        this.GpsId = gpsId;
        this.Status = status;
    };

    //创建一个Drone
    static CreateDrone(gpsType: string, gpsId: string, time: string, status: number) : Drone{
      let drone : Drone = new Drone (gpsType, gpsId, time, status);
      return drone;
    };
}