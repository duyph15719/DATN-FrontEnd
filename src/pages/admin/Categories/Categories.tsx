

import { Space, Table, Tag } from 'antd';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hook';
import { categoriesList, categoriesRemove } from '../../../redux/slice/categoriesSlice';

const { Column, ColumnGroup } = Table;
interface DataType {
  key: React.Key;
  firstName: string;
  lastName: string;
  age: number;
  address: string;
  tags: string[];
}


type Props = {

}

const Categories = (props: Props) => {
  const dispatch = useAppDispatch()
  const { categories } = useAppSelector((state: any) => state.CategoriesReducer)
  const remove = (id: any) => {
    dispatch(categoriesRemove(id))
  }
  const columns: any = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',

    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },

    {
      title: 'Action',
      key: 'action',
      render: (item: any) => (
        <Space size="middle">
          <a> {item.name}</a>
          <button onClick={() => remove(item.id)}>Delete</button>
        </Space>
      ),
    },
  ];
  const dataTable = categories.map((item: any) => {
    return {
      name: item.name,
      id: item._id
    }

  })
  useEffect(() => {
    dispatch(categoriesList())
  }, [dispatch])
  if (!categories) return <div>Loading...</div>
  return (
    <Table columns={columns} dataSource={dataTable} />
  )
}

export default Categories