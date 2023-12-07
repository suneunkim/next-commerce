import React, { useEffect, useState } from "react";
import { Pagination } from "@mantine/core";
import { IProductList } from "./ProductList";

interface PaginationProps {
  data: IProductList[];
}

const ProductPagination = ({ data }: PaginationProps) => {
  const perPage = 6;
  const [activePage, setPage] = useState(1);
  const [total, setTotal] = useState(data.length);
  const totalPage = Math.ceil(total / perPage);

  useEffect(() => {
    setTotal(data.length);
  }, [data, total]);

  return (
    <div>
      <Pagination value={activePage} onChange={setPage} total={totalPage} />
    </div>
  );
};

export default ProductPagination;
