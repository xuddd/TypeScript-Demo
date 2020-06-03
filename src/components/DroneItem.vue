<template>
    <div class="list-item" @dblclick="droneItemDBClick">
        <div class="img">
            <img v-bind:src="Drone.IconUrl" width="44" height="44" alt="">
        </div>

        <div class="item-details"> 
            <p>设备类型: {{ Drone.GpsType }}</p>
            <p>设备状态: {{ Drone.Status }}</p>
            <p>起飞时间: {{ Drone.Time }}</p>
            <p>详细地址: {{ Drone.DroneAddress }}</p>
        </div>
    </div>
</template>

<script lang="ts" src="../viewModels/DroneItemVM.ts"/>