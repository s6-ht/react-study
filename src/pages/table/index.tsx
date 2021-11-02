import React, { useState } from "react";
import { Table, Divider, Button, Modal } from "antd";
import { ColumnsType } from "antd/lib/table";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
];

const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Disabled User",
    age: 99,
    address: "Sidney No. 1 Lake Park",
  },
];

const TableManage = () => {
  // 加入黑名单
  const [selectItem, setSelectItem] = useState<DataType>();
  const handleBlackListApi = () => {
    console.log(selectItem);
  };
  const handleAddBlackList = (item: DataType) => {
    // 更新state之后不会立马执行, 可以跟vue当中的nextTick做对比, 所以更新state之后, 后面的代码还是继续执行的
    setSelectItem(item);
    Modal.info({
      cancelText: "取消",
      title: "提示",
      content: "确认加入黑名单吗?",
      onOk: () => handleBlackListApi(),
      onCancel: () => Promise.resolve(),
    });
  };
  const tableColumns = [
    ...columns,
    {
      key: "operate",
      title: "操作",
      render: (item: DataType) => (
        <Button type="text" danger onClick={() => handleAddBlackList(item)}>
          加入黑名单
        </Button>
      ),
    },
  ];

  // 删除
  const [selectKeys, setSelectKeys] = useState<React.Key[]>([]);
  const del = () => {
    console.log(selectKeys);
  };
  const delUser = () => {
    Modal.info({
      cancelText: "取消",
      title: "提示",
      content: "确认删除吗",
      onOk: () => del(),
      onCancel: () => Promise.resolve(),
    });
  };

  return (
    <div style={{ width: "600px", margin: "30px auto" }}>
      <Button type="primary" onClick={delUser}>
        删除
      </Button>
      <Divider />

      <Table
        rowSelection={{
          type: "checkbox",
          onChange: (selectedRowKeys: React.Key[]) => {
            setSelectKeys(selectedRowKeys);
          },
        }}
        columns={tableColumns}
        dataSource={data}
      />
    </div>
  );
};

export default TableManage;
