import React from 'react'
import Table from '@/app/ui/customers/table'
import Search from '@/app/ui/search';
import { Suspense } from 'react';
import { Metadata } from 'next';
import { TableRowSkeleton } from '@/app/ui/skeletons';
import {
  CustomersTableType,
  FormattedCustomersTable,
} from '@/app/lib/definitions';

export const metadata: Metadata = {
  title: 'Invoices',
};

export default async function Page({
  searchParams,
}:  {
      searchParams?: 
        {
          query?: string;
          page?: string;
        }
    }) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  return (
    <>
       <Suspense key={query + currentPage} fallback={<TableRowSkeleton />}>
        <Table query={query} />
      </Suspense>
    </>
  )
}
