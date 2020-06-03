<template>
    <div class="item-modal-details">
          <h1 class="item-title">
              {{Title}}
          </h1>
          <div class="modal-details">
              <p>设备类型: {{ HistoryDrone.GpsType }}</p>
              <p>设备编号: {{ HistoryDrone.GpsId }}</p>
              <p>纬度: {{ HistoryDrone.Latitude }}</p>
              <p>经度: {{ HistoryDrone.Longitude }}</p>
              <p>飞行高度: {{ HistoryDrone.Altitude }}</p>
              <p>相对速度: {{ HistoryDrone.Speed }}</p>
              <p>起飞时间: {{ HistoryDrone.Time }}</p>
              <p>无人机位置: {{ HistoryDrone.DroneAddress }}</p>
              <p>飞行员位置: {{ HistoryDrone.HumanAddress }}</p>
          </div>

          <button @click="closeHistoryInfoView">关闭</button>
      </div>
</template>

<script lang="ts" src="../viewModels/DroneHistoryInfoVM.ts">