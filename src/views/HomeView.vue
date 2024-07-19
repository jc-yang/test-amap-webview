<script setup lang="ts">
import { onMounted } from 'vue'
import { MapLoader } from '@/views/amap'
import "@amap/amap-jsapi-types";

let map: AMap.Map // 地图实例
let labelsLayer: AMap.LabelsLayer // LabelsLayer 图层，用于承载 LabelMarker标记点
let Amap: typeof AMap // 高德api

onMounted(async () => {
  Amap = await MapLoader() // 载入地图，获取高德API
  mountMap()
})

// 创建地图
const mountMap = () => {
  map = new Amap.Map('mapEl', {})
  // 地图加载完成后
  map.on('complete', () => {
    // 创建LabelsLayer 图层
    labelsLayer = new Amap.LabelsLayer({
      collision: true, // 该层内标注是否避让
      allowCollision: true // 设置 allowCollision：true，可以让标注避让用户的标注
    })
    map.add([labelsLayer]) // 将 LabelsLayer 添加到地图实例
  })
}
</script>

<template>
  <main>
    <div id="mapEl" />
  </main>
</template>

<style lang="less" scoped>
#mapEl {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
</style>
