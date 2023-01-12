

import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Space, Table } from 'antd';
import { Button } from 'antd/lib/radio';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
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
  console.log(categories);
  
  const remove = (id: any) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed)
        dispatch(categoriesRemove(id))
      {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })

  }
  const columns: any = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',

    },


    {
      title: 'Action',
      key: 'action',
      render: (item: any) => (
        <Space size="middle">

          <DeleteOutlined onClick={() => remove(item.id)}>Delete</DeleteOutlined>

          <Link to={`edit/${item.id}`}><EditOutlined /></Link>
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
    <div className="pt-10">
      <Link to={'/admin/categories/add'}>
        <Button type="primary" style={{ borderRadius: '5px', backgroundColor: '#40A9FF' }}>Thêm Danh mục</Button>
      </Link>
      <Table columns={columns} dataSource={dataTable} />
    </div>

  )
}

export default Categories