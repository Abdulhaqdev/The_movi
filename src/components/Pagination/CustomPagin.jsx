// import { Pagination } from "@material-ui/lab";
import { Pagination } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

function CustomPagin({ Currentpage, count, Setcurrentpage, BaseUrl }) {
  const navigate = useNavigate(1);

  return (
    <div>
      <Pagination
        defaultPage={Currentpage}
        className="pagination"
        color="primary"
        count={count}
        shape="rounded"
        size="large"
        onChange={(e) => {
          if (window.scrollY > 0) {
            window.scroll(0, 0);
          }
          Setcurrentpage(e.target.textContent);
          console.log(e.target.textContent);
          navigate(`/${BaseUrl}/pages/${e.target.textContent}`);
        }}
      />
    </div>
  );
}

export default CustomPagin;
