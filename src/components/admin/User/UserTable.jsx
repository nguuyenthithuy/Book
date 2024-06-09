import React, { useEffect, useState } from "react";
import { Col, Row, Table } from "antd";
import InputSearch from "./InputSearch";
import { render } from "react-dom";
import { callListUser } from "../../../services/api";
import UserViewDetail from "./UserViewDetail";

const UserTable = () => {
  const [listUser, setListUser] = useState([]);
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(2);
  const [total, setTotal] = useState(0);
  const [isLoading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");
  const [sortQuery, setSortQuery] = useState("");
  const [dataViewDetail, setDataViewDetail] = useState(null);
  const [openViewDetail, setOpenViewDetail] = useState(false);

  useEffect(() => {
    fetchUser();
  }, [current, pageSize, filter, sortQuery]);

  const fetchUser = async () => {
    let query = `current=${current}&pageSize=${pageSize}`;
    if (filter) {
      query += `&${filter}`;
    }
    if (sortQuery) {
      query += `&${sortQuery}`;
    }
    const res = await callListUser(query);
    // console.log(res);
    if (res && res.data) {
      setListUser(res.data.result);
      setTotal(res.data.meta.total);
    }
    setLoading(false);
  };
  //   console.log(listUser);

  const columns = [
    {
      title: "Id",
      dataIndex: "_id",
      render: (text, record, index) => {
        console.log("Check record", record);
        return (
          // <a href='#' onClick={() => {
          //     setDataViewDetail(record);
          //     setOpenViewDetail(true);
          // }}>{record._id}</a>
          <>
            <a
              href="#"
              onClick={() => {
                setDataViewDetail(record);
                setOpenViewDetail(true);
              }}
            >
              {record._id}
            </a>
          </>
        );
      },
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
      setCurrent(1);
    }
    if (sorter && sorter.field) {
      const q =
        sorter.order === "ascend"
          ? `sort=${sorter.field}`
          : `sort=-${sorter.field}`;
      setSortQuery(q);
    }
    console.log("params", pagination, filters, sorter, extra);
  };

  const handleSearch = (query) => {
    setFilter(query);
  };
  return (
    <>
      <Row gutter={[20, 20]}>
        <Col span={24}>
          <InputSearch handleSearch={handleSearch} setFilter={setFilter} />
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
            loading={isLoading}
          />
        </Col>
      </Row>
      <UserViewDetail
        setOpenViewDetail={setOpenViewDetail}
        openViewDetail={openViewDetail}
        dataViewDetail={dataViewDetail}
        setDataViewDetail={setDataViewDetail}
      />
    </>
  );
};

export default UserTable;
