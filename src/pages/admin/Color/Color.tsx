

import { Space, Table, Tag } from 'antd';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hook';
import { ColorList } from '../../../redux/slice/colorList';

const { Column, ColumnGroup } = Table;
interface DataType {
  key: React.Key;
  firstName: string;
  lastName: string;
  age: number;
  address: string;
  tags: string[];
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
        <a>Delete</a>
      </Space>
    ),
  },
];
type Props = {

}

const Color = (props: Props) => {
  const dispatch = useAppDispatch()
  const { color } = useAppSelector(state => state.ColorReducer)
  const dataTable = color.map((item: any) => {
    return {
      name: item.name

    }

  })
  useEffect(() => {
    dispatch(ColorList())
  }, [dispatch])
  if (!color) return <div>Loading...</div>
  return (
    <Table columns={columns} dataSource={dataTable} />
  )
}

export default Color