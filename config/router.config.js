export default [
  // Layout 
  {
    path: '/',
    component: '../layouts/index',
    routes: [
      {
        path: '/home',
        component: './home',
      },
      {
        path: '/login',
        component: './login',
      },
      {
        path: '/my',
        component: './my',
      },
      {
        path: '/class',
        component: './class',
      },
    ],
   },
];
