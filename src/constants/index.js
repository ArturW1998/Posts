import MainPage from '../containers/main-page';
import Edit from '../containers/edit';
import SinglePost from '../containers/single-post';

export const listsPerPage = 5;

export const prev = 'prev';
export const next = 'next';

export const firstPage = 1;

export const conf = [
  {
    id: 0,
    path: '/',
    component: MainPage,
    exact: true
  },
  {
    id: 1,
    path: '/edit/',
    component: Edit,
    exact: true
  },
  {
    id: 2,
    path: '/:id',
    component: SinglePost,
    exact: true
  }
];

export const fieldUserName = 'userName';
export const fieldPass = 'pass';

export const contextDefaultValue = [{}, () => {}];
