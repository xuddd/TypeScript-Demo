declare namespace DroneModule{

    export interface IDrone{
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
        Latitude: number;

        // 经度
        Longitude: number;

        // 高度
        Altitude: number;

        // 速度
        Speed: number;

        // 无人机位置
        DroneAddress: string;

        // 飞手位置
        HumanAddress: string;
    }
}