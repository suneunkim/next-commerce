import React, { useEffect, useState } from "react";
import { Pagination } from "@mantine/core";
import { IProductList } from "./ProductList";

interface PaginationProps {
  data: IProductList[];
  onPageChange: any;
  perPage: number;
}

const ProductPagination = ({
  data = [],
  onPageChange,
  perPage,
}: PaginationProps) => {
  const [total, setTotal] = useState(data.length);
  const totalPage = Math.ceil(total / perPage);
  const [activePage, setPage] = useState(1);
  useEffect(() => {
    setTotal(data.length);
  }, [data, total]);

  const handlePageChange = (pageNumber: number) => {
    setPage(pageNumber);
    onPageChange(pageNumber);
  };
  return (
    <Pagination
      value={activePage}
      onChange={handlePageChange}
      total={totalPage}
      defaultValue={1}
    />
  );
};

export default ProductPagination;
