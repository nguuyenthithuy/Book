import React, { useEffect, useState } from "react";
import { Col, Row, Table } from "antd";
import InputSearch from "./InputSearch";
import { render } from "react-dom";
import { callListUser } from "../../../services/api";

const UserTable = () => {
  const [listUser, setListUser] = useState([]);
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(2);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetchUser();
  }, [current, pageSize]);

  const fetchUser = async () => {
    const query = `current=${current}&pageSize=${pageSize}`;
    const res = await callListUser(query);
    // console.log(res);
    if (res && res.data) {
      setListUser(res.data.result);
      setTotal(res.data.meta.total);
    }
  };
  console.log(listUser);

  const columns = [
    {
      title: "Id",
      dataIndex: "_id",
      sorter: true,
    },
    {
      title: "Tên hiển thị",
      dataIndex: "fullName",
      sorter: true,
    },
    {
      title: "Email",
      dataIndex: "email",
      sorter: true,
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone",
      sorter: true,
    },
    {
      title: "Action",
      render: (text, record, index) => {
        return (
          <>
            <button>Delete</button>
          </>
        );
      },
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    if (pagination && pagination.current !== current) {
      setCurrent(pagination.current);
    }
    if (pagination && pagination.pageSize !== pageSize) {
      setPageSize(pagination.pageSize);
    }
    console.log("params", pagination, filters, sorter, extra);
  };
  return (
    <>
      <Row gutter={[20, 20]}>
        <Col span={24}>
          <InputSearch />
        </Col>
        <Col span={24}>
          <Table
            pagination={{
              current: current,
              pageSize: pageSize,
              total: total,
              showSizeChanger: true,
            }}
            className="def"
            columns={columns}
            dataSource={listUser}
            onChange={onChange}
          />
        </Col>
      </Row>
    </>
  );
};

export default UserTable;
