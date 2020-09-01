import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '@/components/Dashboard'
import Profile from '@/components/Profile'
import Tables from '@/components/Tables'
import Maps from '@/components/Maps'
import BadGateway from '@/components/BadGateway'
import Auctions from '@/components/Auctions'
import Invoices from '@/components/Invoices'
import Settings from '@/components/Settings'
import Management from '@/components/Managements'
import Notifications from '@/components/Notifications'
import Latestbids from '@/components/Latestbids'
import Adduser from '@/components/Adduser'
import Adduserv2 from '@/components/Adduserv2'
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/adduserv2',
      name: 'Adduserv2',
      component: Adduserv2
    },
    {
      path: '/adduser',
      name: 'Adduser',
      component: Adduser,
      props: { page: 12 }
    },
    {
      path: '/latestbids',
      name: 'Latestbids',
      component: Latestbids,
      props: { page: 11 }
    },
    {
      path: '/notifications',
      name: 'Notifications',
      component: Notifications,
      props: { page: 10 }
    },
    {
      path:  '/managements',
      name: 'Managements',
      component: Management,
      props: { page: 9 }
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings,
      props: { page: 8 }
    },
    {
      path: '/invoices',
      name: 'Invoices',
      component: Invoices,
      props: { page: 7 }
    },
    {
      path: '/auctions',
      name: 'Auctions',
      component: Auctions,
      props: { page: 6 }
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      props: { page: 1 },
      alias: '/'
    },
    {
      path: '/profile',
      name: 'Profile',
      props: { page: 2 },
      component: Profile
    },
    {
      path: '/tables',
      name: 'Tables',
      props: { page: 3 },
      component: Tables
    },
    {
      path: '/maps',
      name: 'Maps',
      props: { page: 4 },
      component: Maps
    },
    {
      path: '/404',
      name: 'BadGateway',
      props: { page: 5 },
      component: BadGateway
    },
    {
      path: '*',
      props: { page: 5 },
      redirect: '/404'
    }
  ]
})