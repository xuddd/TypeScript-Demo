/**
 * 无人机组件VM
 */
import Vue from 'vue';
import { Prop, Component, Emit, Watch } from 'vue-property-decorator';
import Drone from '@/models/DroneModel';
@Component
export default class DroneItem extends Vue{
    @Prop() Drone!: Drone;
    // @Prop({
    //     type : Drone, //属性类型
    //     required : false, //是否必须
    //     default : () =>{}, //默认值
    // }) Drone! : Drone;

    //定义一个事件
    @Emit('DroneItemDBClick') OnDroneItemDBClick(currentDrone: Drone) {
        
    }

    @Watch('Drone.Status')
    typeChanged(newVal: number, oldVal: number) {
        console.log('watch-typeChanged');
        this.Drone.IconUrl = require(`../assets/icon_type_0${newVal}.png`);
    }

    // 双击事件的响应
    droneItemDBClick() {
        this.OnDroneItemDBClick(this.Drone!);
        console.log('droneItemDBClick');
    }
}