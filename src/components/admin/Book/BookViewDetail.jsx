import { Badge, Descriptions, Divider, Drawer } from "antd";
import moment from "moment";

const UserViewDetail = (props) => {
  const {
    setOpenViewDetail,
    openViewDetail,
    dataViewDetail,
    setDataViewDetail,
  } = props;
  const onClose = () => {
    setOpenViewDetail(false);
    setDataViewDetail(null);
  };

  console.log(dataViewDetail);

  return (
    <>
      <Drawer
        title="Chức năng chi tiết"
        width={"50vw"}
        onClose={onClose}
        open={openViewDetail}
      >
        <Descriptions title="Thông tin book" bordered column={2}>
          <Descriptions.Item label="Id">
            {dataViewDetail?._id}
          </Descriptions.Item>
          <Descriptions.Item label="Tên sách">
            {dataViewDetail?.mainText}
          </Descriptions.Item>
          <Descriptions.Item label="Tác giả">
            {dataViewDetail?.author}
          </Descriptions.Item>
          <Descriptions.Item label="Giá tiền">
            {dataViewDetail?.price}
          </Descriptions.Item>
          <Descriptions.Item label="Thể loại" span={2}>
            <Badge status="processing" text={dataViewDetail?.category} />
          </Descriptions.Item>
          <Descriptions.Item label="Created At">
            {moment(dataViewDetail?.createdAt).format("DD-MM-YYYY, HH:MM:SS")}
          </Descriptions.Item>
          <Descriptions.Item label="Update At">
            {moment(dataViewDetail?.updatedAt).format("DD-MM-YYYY, HH:MM:SS")}
          </Descriptions.Item>
        </Descriptions>

        <Divider orientation="left">Ảnh book</Divider>
      </Drawer>
    </>
  );
};
export default UserViewDetail;
