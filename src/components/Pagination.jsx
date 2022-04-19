import React from 'react'
import {currentPages} from './contextApi'
import Pagination from '@mui/material/Pagination';



export default function Paginations() {

	  const [currentPage, setCurrentPage] = React.useContext(currentPages);

  return (
    <div className="container">
      <div className="pagination ">
        <Pagination
          onChange={(_, num) => setCurrentPage(num)}
          count={150}
          page={currentPage}
          size="large"
          defaultPage={1}
          color="primary"
        />
      </div>
    </div>
  );
}
