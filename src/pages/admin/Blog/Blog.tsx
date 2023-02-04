

import { Image, Space, Table, Tag } from 'antd';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hook';

import Swal from 'sweetalert2'
import { Link, useParams } from 'react-router-dom';
import { Button } from 'antd/lib/radio';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

import { newList, newRemove } from '../../../redux/slice/NewSlice';

const { Column, ColumnGroup } = Table;



type Props = {

}

const Bloga = (props: Props) => {
  const dispatch = useAppDispatch()
  const { blog } = useAppSelector((state: any) => state.NewtSlice)


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
        dispatch(newRemove(id))
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
      dataIndex: 'title',
      key: 'title',

    },

    {
      title: 'image',
      dataIndex: 'image',
      render: (image: any) => <Image width={100} src={image}></Image>

    },
    {
      title: 'url',
      dataIndex: 'url',
      key: 'url',

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
  const dataTable = blog.map((item: any) => {
    return {

      title: item.title,

    }

  })
  useEffect(() => {
    dispatch(newList())
  }, [dispatch])
  console.log(blog);
  if (!blog) return <div>Loading...</div>
  return (
    <div className="pt-10">
      <Link to={'/admin/blog/add'}>
        <Button type="primary" style={{ borderRadius: '5px', backgroundColor: '#40A9FF' }}>Thêm Danh mục</Button>
      </Link>
      <Table columns={columns} dataSource={dataTable} />
    </div>

  )
}

export default Bloga