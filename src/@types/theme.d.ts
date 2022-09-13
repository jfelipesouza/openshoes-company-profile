import 'styled-components'
import { light, dark } from '../styles/themes'

export type LightTheme = typeof light
export type DarkTheme = typeof dark
declare module 'styled-components' {
  export interface DefaultTheme extends LightTheme {}
  export interface DefaultDarkTheme extends DarkTheme {}
}
