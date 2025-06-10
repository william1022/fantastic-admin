import type { RecursiveRequired, Settings } from '#/global'
import { cloneDeep } from 'es-toolkit'
import settingsDefault from '@/settings.default'
import { merge } from '@/utils/object'

const globalSettings: Settings.all = {
  // 请在此处编写或粘贴配置代码
  app: {
    colorScheme: 'light',
    radius: 0.5,
    enableMournMode: false,
    enableColorAmblyopiaMode: false,
    enablePermission: false,
    enableProgress: true,
    enableDynamicTitle: false,
    routeBaseOn: 'frontend',
  },
  home: {
    enable: true,
    title: '欢迎观临',
    fullPath: '/',
  },
  layout: {
    enableMobileAdaptation: false,
  },
  menu: {
    baseOn: 'frontend',
    mode: 'side',
    mainMenuClickMode: 'switch',
    subMenuUniqueOpened: true,
    subMenuCollapse: false,
    enableSubMenuCollapseButton: false,
    enableHotkeys: false,
  },
  topbar: {
    mode: 'static',
  },
  tabbar: {
    enable: false,
    enableIcon: false,
    enableHotkeys: false,
  },
  toolbar: {
    enable: true,
    breadcrumb: true,
    navSearch: true,
    fullscreen: false,
    pageReload: false,
    colorScheme: false,
  },
  mainPage: {
    enableHotkeys: true,
  },
  navSearch: {
    enableHotkeys: true,
  },
  copyright: {
    enable: true,
    dates: '2024-2025',
    company: '辉记茶餐厅',
    website: 'https://huiji.com',
    beian: '互联网备案',
  },
}

export default merge(globalSettings, cloneDeep(settingsDefault)) as RecursiveRequired<Settings.all>
