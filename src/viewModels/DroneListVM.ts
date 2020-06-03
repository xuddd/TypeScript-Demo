/**
 * 无人机列表VM
 */
import Vue from 'vue'
import Component from 'vue-class-component';
import DroneStatus from '@/models/DroneStatusModel';
import Drone from '@/models/DroneModel';
import DroneItem from '@/components/DroneItem.vue';
import DroneHistoryInfo from '@/components/DroneHistoryInfo.vue';
@Component({
    components:{
        DroneItem, 
        DroneHistoryInfo
    }
})
export default class DroneList extends Vue{
    // 标题
    Title: string = '';

    //历史详情标题
    HisTitle: string ='';

    // 无人机状态列表
    DroneStatusList: Array<DroneStatus> = [];

    // 选中的无人机状态
    SelectedDroneStatus: number = 0;

    // 选中的无人机GpsId
    DroneListActive: string = '-1';

    // 无人机列表
    Drones: Array<Drone> = [];

    // 选中的无人机
    SelectedDrone: Drone = new Drone('', '', '', 3);

    // 是否显示历史详情页面
    IsDroneDetailShow: boolean = false;

    /**
     *
     */
    constructor() {
        super();
        this.Title = '无人机列表';
        this.HisTitle = '历史无人机详情';
        this.SelectedDroneStatus = 1;
        this.DroneListActive = '-1';
        let history: DroneStatus = new DroneStatus(1, '当前');
        let current: DroneStatus = new DroneStatus(2, '未处置');
        let notDispose: DroneStatus = new DroneStatus(3, '历史');
        this.DroneStatusList = [history, current, notDispose];
        this.Drones = this.createDemoData(1);
        this.SelectedDrone = this.Drones[0];
    }

    // 根据状态类型获取无人机列表
    getDroneListInfo(type: number) {
        this.Drones = [];
        this.SelectedDroneStatus = type;
        console.log(`所选状态：${this.SelectedDroneStatus}`);
        let drones : Array<Drone> = this.createDemoData(type);
        this.Drones = drones;
    }

    //双击列表中的项
    queryDroneDetail(drone: Drone) {
        // 只有历史无人机才有此功能 -- Status == 3
        console.log(`queryDroneDetail${drone}`);
        if(drone.Status === 3){
            this.DroneListActive = drone.GpsId;
            this.IsDroneDetailShow = true;
            this.SelectedDrone = drone;
            console.log(`双击历史无人机：${drone.GpsId}`);
        }
    }

    // 创建列表模拟数据
    createDemoData(type : number): Array<Drone>{
        let drones : Array<Drone> = [];
        for (let index = 0; index < 5; index++) {
            let drone : Drone = Drone.CreateDrone('无人机', `${index}`, '2020-03-12 14:15:03', type);
            drones.push(drone);
        }
        
        return drones;
    }

    //关闭历史详情页
    closeHistoryInfoView() {
        this.IsDroneDetailShow = false;
        console.log('关闭详情页');
    }
}
