import Vue from 'vue';
import { Prop, Component, Emit } from 'vue-property-decorator';
import Drone from '@/models/DroneModel';
@Component
export default class DroneHistoryInfo extends Vue{
    @Prop() Title!: string;
    @Prop() HistoryDrone!: Drone;

    @Emit('CloseHistoryInfoView') OnCloseHistoryInfoView() {

    }

    // 关闭详情页
    closeHistoryInfoView() {
        this.OnCloseHistoryInfoView();
    }
}
