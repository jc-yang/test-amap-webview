import AMapLoader from '@amap/amap-jsapi-loader'
import '@amap/amap-jsapi-types'

export function MapLoader(): Promise<typeof AMap> {
  return AMapLoader.load({
    key: 'ee4642ae93438d36adcb1c0f41b6828f',
    version: '2.0'
  })
}
