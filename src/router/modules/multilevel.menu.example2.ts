import type { RouteRecordRaw } from 'vue-router'

function Layout() {
  return import('@/layouts/index.vue')
}

const routes: RouteRecordRaw = {
  path: '/test_multilevel_menu_example',
  component: Layout,
  name: 'test_multilevelMenuExample',
  meta: {
    title: 'test_多级导航 1111',
    icon: 'i-heroicons-solid:menu-alt-3',
  },
  children: [
    {
      path: 'test_page',
      name: 'test_multilevelMenuExample1',
      component: () => import('@/views/multilevel_menu_example/page.vue'),
      meta: {
        title: 'test_导航 1',
      },
    },
    {
      path: 'test_level2',
      name: 'test_multilevelMenuExample2',
      meta: {
        title: 'test_导航 2',
      },
      children: [
        {
          path: 'test_page',
          name: 'test_multilevelMenuExample2-1',
          component: () => import('@/views/multilevel_menu_example/level2/page.vue'),
          meta: {
            title: 'test_导航 2-1',
          },
        },
        {
          path: 'test_level3',
          name: 'test_multilevelMenuExample2-2',
          meta: {
            title: 'test_导航 2-2',
          },
          children: [
            {
              path: 'test_page1',
              name: 'test_multilevelMenuExample2-2-1',
              component: () => import('@/views/multilevel_menu_example/level2/level3/page1.vue'),
              meta: {
                title: 'test_导航 2-2-1',
              },
            },
            {
              path: 'test_page2',
              name: 'test_multilevelMenuExample2-2-2',
              component: () => import('@/views/multilevel_menu_example/level2/level3/formlist.vue'),
              meta: {
                title: 'test_导航 2-2-2',
              },
            },
          ],
        },
      ],
    },
  ],
}

export default routes
