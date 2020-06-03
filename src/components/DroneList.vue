<template>
  <div class="drone-list-body" id="drone_list">
    <h1 class="title-top">{{Title}}</h1>
    <div class="drone-list">
      <ul class="tab-btns">
          <li v-for="itemBtn in DroneStatusList"
              :key="itemBtn.Type"
              @click="getDroneListInfo(itemBtn.Type)"
              :class="{'active': itemBtn.Type === SelectedDroneStatus}">
              {{ itemBtn.Name }}
          </li>
      </ul>

      <div class="list-body">
          <div class="list-item"
              v-for="droneItem in Drones"
              @dblclick="queryDroneDetail(droneItem)"
              :key="droneItem.GpsId"
              :class="{'active': DroneListActive === droneItem.GpsId}"
          >
              <div class="img">
                  <img v-bind:src="droneItem.IconUrl" alt="" width="44" height="44">
              </div>

              <div class="item-details">
                  <p>设备类型: {{ droneItem.GpsType }}</p>
                  <p>设备状态: {{ droneItem.Status }}</p>
                  <p>起飞时间: {{ droneItem.Time }}</p>
                  <p>详细地址: {{ droneItem.DroneAddress }}</p>
              </div>
          </div>
          <!-- <DroneItem class="list-item"
            v-for="droneItem in Drones"
            :key="droneItem.GpsId"
            :Drone="droneItem"
            @DroneItemDBClick="queryDroneDetail"
            :class="{'active': DroneListActive === droneItem.GpsId}"
            >
          </DroneItem> -->
      </div>

      <div class="item-modal-details" v-show="IsDroneDetailShow">
          <h1 class="item-title">
              历史无人机详情
          </h1>
          <div class="modal-details">
              <p>设备类型: {{ SelectedDrone.GpsType }}</p>
              <p>设备编号: {{ SelectedDrone.GpsId }}</p>
              <p>纬度: {{ SelectedDrone.Latitude }}</p>
              <p>经度: {{ SelectedDrone.Longitude }}</p>
              <p>飞行高度: {{ SelectedDrone.Altitude }}</p>
              <p>相对速度: {{ SelectedDrone.Speed }}</p>
              <p>起飞时间: {{ SelectedDrone.Time }}</p>
              <p>无人机位置: {{ SelectedDrone.DroneAddress }}</p>
              <p>飞行员位置: {{ SelectedDrone.HumanAddress }}</p>
          </div>

          <button @click="IsDroneDetailShow = false">关闭</button>
      </div>
      <!-- <div>
        <DroneHistoryInfo 
          v-show="IsDroneDetailShow"
          :HistoryDrone="SelectedDrone"
          :Title="HisTitle"
          @CloseHistoryInfoView="closeHistoryInfoView"
        >

        </DroneHistoryInfo>
      </div> -->
  </div>
  </div>
</template>

<script lang="ts" src="../viewModels/DroneListVM.ts"/>

<style lang="scss">
    [v-cloak] {
  display: none;
}


.loading {
  width: 30px;
  height: 30px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  animation: loading 4s infinite linear;
}
.loading img {
  width: 30px;
  height: 30px;
}
/* // @-webkit-keyframes loading {
//   0% {
//     transform: rotate(0);
//   }
//   100% {
//     transform: rotate(360deg);
//   }
// } */
.drone-list-body {
  width: 403px;
  height: 668px;
  background: url(../assets/list_bg.png);
  background-size: 100% 100%;
  position: relative;
  padding: 10px 20px;
  box-sizing: border-box;
}
.drone-list-body .close {
  right: 10px;
}
.drone-list-body .hotCharts,
.drone-list-body .charts {
  position: absolute;
  top: 15px;
  width: 16px;
  height: 16px;
  cursor: pointer;
  z-index: 500;
}
.drone-list-body .charts {
  right: 50px;
  background: url(../assets/icon_05.png);
}
// .drone-list-body .hotCharts {
//   right: 30px;
//   background: url(../assets/icon_04.png);
// }
.drone-list-body .title-top {
  font-weight: normal;
  font-size: 16px;
  margin-top: 13px;
  position: absolute;
  top: 10px;
  left: 20px;
  background-image: url(../assets/title_bg.png);
  background-size: 100% 100%;
  line-height: 26px;
  padding: 0 10px 4px;
}
.drone-list-body .drone-list {
  width: 100%;
  height: 600px;
  margin-top: 50px;
  position: relative;
}
.drone-list-body .drone-list ::-webkit-scrollbar {
  width: 0;
  height: 0;
  background-color: transparent;
}
.drone-list-body .drone-list .tab-btns {
  width: 212px;
  height: 30px;
  box-sizing: border-box;
  border: 1px #0fb0f4 solid;
  border-radius: 4px;
  margin: auto;
  padding: 0;
}
.drone-list-body .drone-list .tab-btns li {
  width: 70px;
  float: left;
  height: 28px;
  margin: 0;
  padding: 0;
  line-height: 28px;
  text-align: center;
  color: #fff;
  background-color: #00599e;
  list-style: none;
  cursor: pointer;
}
.drone-list-body .drone-list .tab-btns li.active {
  background-color: #1092ff;
}
.drone-list-body .drone-list .list-body {
  width: 100%;
  height: 560px;
  overflow: auto;
  margin-top: 10px;
}
.drone-list-body .drone-list .list-body .list-item {
  width: 100%;
  height: 110px;
  box-sizing: border-box;
  border: 2px #175f98 solid;
  padding: 12px 15px;
  background-color: rgba(23, 95, 152, 0.8);
  margin-bottom: 10px;
  position: relative;
}
.drone-list-body .drone-list .list-body .list-item.active {
  border: 2px #0eb0f4 solid;
  background-color: rgba(41, 137, 218, 0.8);
}
.drone-list-body .drone-list .list-body .list-item .img {
  width: 82px;
  height: 82px;
  line-height: 82px;
  float: left;
}
.drone-list-body .drone-list .list-body .list-item .img img {
  vertical-align: middle;
  width: 45px;
  height: 45px;
}
.drone-list-body .drone-list .list-body .list-item .item-details {
  float: left;
  width: 245px;
  height: 100%;
  color: #fff;
  font-size: 14px;
}
.drone-list-body .drone-list .list-body .list-item .item-details p {
  margin-top: 3px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.drone-list-body .drone-list .list-body .list-item .item-details p:first-child {
  margin-top: 0;
}
.drone-list-body .drone-list .item-modal-details {
  position: absolute;
  width: 360px;
  height: 380px;
  background-color: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  padding: 15px;
  right: -400px;
  top: 120px;
  border-radius: 6px;
  border: 1px #0EB0F4 solid;
}
.drone-list-body .drone-list .item-modal-details .close {
  position: absolute;
  right: 5px;
  top: 5px;
}
.drone-list-body .drone-list .item-modal-details .item-title {
  text-align: center;
  font-weight: bold;
  font-size: 16px;
}
.drone-list-body .drone-list .item-modal-details .modal-details {
  width: 100%;
  height: 285px;
  font-size: 16px;
  box-sizing: border-box;
}
.drone-list-body .drone-list .item-modal-details .modal-details p {
  margin-top: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.drone-list-body .drone-list .item-modal-details button {
  width: 80px;
  height: 30px;
  border-radius: 4px;
  border: 1px #0EB0F4 solid;
  color: #0EB0F4;
  background-color: transparent;
  margin: auto;
  display: block;
}
.drone-charts-body {
  width: 710px;
  height: 560px;
  background: url(../assets/list_bg.png);
  background-size: 100% 100%;
  position: relative;
  box-sizing: border-box;
  padding: 45px 5px 25px 5px;
}
.drone-charts-body .title-top {
  font-weight: normal;
  font-size: 16px;
  margin-top: 13px;
  position: absolute;
  top: 10px;
  left: 20px;
  background-image: url(../assets/title_bg.png);
  background-size: 100% 100%;
  line-height: 26px;
  padding: 0 10px 4px;
}
.drone-charts-body .drone-type-body {
  width: 100%;
  height: 110px;
  border-bottom: 1px #00fdfe dashed;
}
.drone-charts-body .drone-type-body .type-item {
  width: 50%;
  height: 100%;
  float: left;
  box-sizing: border-box;
}
.drone-charts-body .drone-type-body .type-item .item {
  width: 160px;
  height: 100%;
  margin: auto;
}
.drone-charts-body .drone-type-body .type-item .item .img {
  line-height: 110px;
}
.drone-charts-body .drone-type-body .type-item .item .img img {
  vertical-align: middle;
}
.drone-charts-body .drone-type-body .type-item .item .text {
  width: 115px;
  padding-top: 30px;
}
.drone-charts-body .drone-type-body .type-item .item .img,
.drone-charts-body .drone-type-body .type-item .item .text {
  float: left;
  text-align: center;
}
.drone-charts-body .drone-type-body .type-item:first-child {
  border-right: 0.25px #00fdfe solid;
}
.drone-charts-body .drone-type-body .type-item:last-child {
  border-left: 0.25px #00fdfe solid;
}
.drone-charts-body .charts-body {
  width: 100%;
  height: 365px;
  box-sizing: border-box;
  padding: 0 5px;
  overflow: hidden;
}
.drone-charts-body .charts-body .charts-btns {
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  padding: 0 25px;
  /*border-bottom: 1px #0EB0F4 solid;*/
}
.drone-charts-body .charts-body .charts-btns li {
  float: left;
  width: 33.333%;
  line-height: 49px;
  text-align: center;
  cursor: pointer;
  box-sizing: border-box;
  border-bottom: 1px #0EB0F4 solid;
  position: relative;
}
.drone-charts-body .charts-body .charts-btns li.active {
  border-left: 1px #0EB0F4 solid;
  border-right: 1px #0EB0F4 solid;
}
.drone-charts-body .charts-body .charts-btns li.active:after {
  content: " ";
  position: absolute;
  width: 100%;
  height: 5px;
  background-color: #0EB0F4;
  left: 0;
  top: 0;
  z-index: 1;
}
.drone-charts-body .charts-body .charts-item-body {
  width: 300%;
  height: 310px;
  box-sizing: border-box;
  padding: 0 5px;
  position: relative;
}
.drone-charts-body .charts-body .charts-item-body .charts-item {
  width: 680px;
  height: 100%;
  float: left;
  position: relative;
}
.drone-charts-body .charts-body .charts-item-body .charts-item #date_zindex,
.drone-charts-body .charts-body .charts-item-body .charts-item #date_time {
  width: 100%;
  height: 100%;
}
.drone-charts-body .charts-body .charts-item-body .charts-item .zindex-statistics {
  position: absolute;
  z-index: 99;
  right: 0;
  top: 120px;
  background-color: transparent;
  width: 180px;
  height: 96px;
  box-sizing: border-box;
  border-top: 1px #0EB0F4 solid;
  border-bottom: 1px #0EB0F4 solid;
  text-align: center;
  padding-top: 20px;
}
.drone-charts-body .charts-body .charts-item-body .charts-item .zindex-statistics p:last-child {
  font-size: 24px;
}
</style>