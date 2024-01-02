"use client";
import img1 from "@/app/images/event.jpg";
import React, { useState } from "react";
import { Upload, Modal, Image } from "antd";
import { PlusOutlined } from "@ant-design/icons";

export default function ServicesGallery(props) {
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([]);
  const handleCancel = () => setPreviewVisible(false);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
  };

  const handleChange = ({ fileList }) => setFileList(fileList);

  const getBase64 = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
    });
  };
  return (
    <div>
      <Upload
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        <div>
          <PlusOutlined />
          <div style={{ marginTop: 8 }}>Upload</div>
        </div>
      </Upload>
      <Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
        <Image alt="Preview" style={{ width: "100%" }} src={previewImage} />
      </Modal>
    </div>
  );
}
// import React, { useState } from 'react';
// import { Upload, Modal, Image } from 'antd';
// import { PlusOutlined } from '@ant-design/icons';

// const ImageGallery = () => {
//   const [previewVisible, setPreviewVisible] = useState(false);
//   const [previewImage, setPreviewImage] = useState('');
//   const [fileList, setFileList] = useState([]);

//   const handleCancel = () => setPreviewVisible(false);

//   const handlePreview = async (file) => {
//     if (!file.url && !file.preview) {
//       file.preview = await getBase64(file.originFileObj);
//     }

//     setPreviewImage(file.url || file.preview);
//     setPreviewVisible(true);
//   };

//   const handleChange = ({ fileList }) => setFileList(fileList);

//   const getBase64 = (file) => {
//     return new Promise((resolve) => {
//       const reader = new FileReader();
//       reader.readAsDataURL(file);
//       reader.onload = () => resolve(reader.result);
//     });
//   };

//   return (
//     <div>
//       <Upload
//         listType="picture-card"
//         fileList={fileList}
//         onPreview={handlePreview}
//         onChange={handleChange}
//       >
//         <div>
//           <PlusOutlined />
//           <div style={{ marginTop: 8 }}>Upload</div>
//         </div>
//       </Upload>
//       <Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
//         <Image alt="Preview" style={{ width: '100%' }} src={previewImage} />
//       </Modal>
//     </div>
//   );
// };

// export default ImageGallery;
