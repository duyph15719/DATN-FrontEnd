

import { Space, Table, Tag } from 'antd';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hook';
import { ColorList, ColorRemove } from '../../../redux/slice/colorList';
import Swal from 'sweetalert2'
import { Link, useParams } from 'react-router-dom';
import { Button } from 'antd/lib/radio';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

const { Column, ColumnGroup } = Table;
type Props = {

}

const Color = (props: Props) => {
  const dispatch = useAppDispatch()
  const { color } = useAppSelector((state: any) => state.ColorReducer)
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
        dispatch(ColorRemove(id))
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
  const dataTable = color.map((item: any) => {
    return {
      name: item.name,
      id: item._id
    }

  })
  console.log("color",color);
  
  useEffect(() => {
    dispatch(ColorList())
  }, [dispatch])
  if (!color) return <div>Loading...</div>
  return (
    <div className="pt-10">
      <Link to={'/admin/color/add'}>
        <Button type="primary" style={{ borderRadius: '5px', backgroundColor: '#40A9FF' }}>Thêm Màu</Button>
      </Link>
      <Table columns={columns} dataSource={dataTable} />
    </div>

  )
}

export default Color