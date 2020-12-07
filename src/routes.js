import React from 'react';

const Home = React.lazy(() => import('./screens/home/Home'));
const User = React.lazy(() => import('./screens/user/User'));
const CreteUser = React.lazy(() => import('./screens/user/CreateUser'));
const UpdateUser = React.lazy(() => import('./screens/user/UpdateUser'));
const Role = React.lazy(() => import('./screens/role/Role'));
const CreateRole = React.lazy(() => import('./screens/role/CreateRole'));
const Post = React.lazy(() => import('./screens/post/Post'));
const CreatePost = React.lazy(() => import('./screens/post/CreatePost'));
const Category = React.lazy(() => import('./screens/category/Category'));
const CreateCategory = React.lazy(() => import('./screens/category/CreateCategory'));
const Tag = React.lazy(() => import('./screens/tag/Tag'));
const CreateTag = React.lazy(() => import('./screens/tag/CreateTag'));

const routes = [
  { path: '/', exact: true, name: 'Dashboard' },
  { path: '/home', name: 'Dashboard', component: Home },
  { path: '/user', exact: true, name: 'Users', component: User },
  { path: '/user/create', name: 'Create User', component: CreteUser },
  { path: '/user/edit/:id', name: 'Update User', component: UpdateUser },
  { path: '/role', exact: true, name: 'Roles', component: Role },
  { path: '/role/create', name: 'Create Roles', component: CreateRole },
  { path: '/category', exact: true, name: 'Categories', component: Category },
  { path: '/category/create', name: 'Creaate Categories', component: CreateCategory },
  { path: '/post', exact: true, name: 'Posts', component: Post },
  { path: '/post/create', exact: true, name: 'Create Posts', component: CreatePost },
  { path: '/tag', exact: true, name: 'Tags', component: Tag },
  { path: '/tag/create', name: 'Create Tags', component: CreateTag },
];

export default routes;
