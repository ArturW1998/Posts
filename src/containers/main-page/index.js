import React, { useContext } from 'react';

import { UserContext } from '../../context';

import usePaginate from '../../hooks/usePaginate';

import Articles from '../../components/aricles';
import Pagination from '../../components/pagination';
import VisibleForm from '../../components/visible-form';

import './main-page.css';

const MainPage = () => {
  const [state] = useContext(UserContext);
  const { articles, userAuth } = state;

  const [currentPage, paginate, totalItemsPagination, currentArticles] = usePaginate(articles);

  return (
    <div className="container">
      <div className="row wrapper">
        <VisibleForm userAuth={userAuth} />
        <Articles articles={currentArticles} />
        <Pagination currentPage={currentPage} totalItems={totalItemsPagination} paginate={paginate} />
      </div>
    </div>
  );
};

export default MainPage;