import React from "react";
import { Tabs, Steps, message, Upload } from "antd";

import { RiCheckboxCircleLine, RiCloseCircleLine } from "react-icons/ri";
import ComponentsPage from "../../components/components-page";



export default function Components_Overview() {
  const { TabPane } = Tabs;
  const { Step } = Steps;

  function callback(key) {
    console.log(key);
  }

  // FUNCTIONS
  const { Dragger } = Upload;
  const commonUploadStyle = {
    maxWidth: '600px',
    height: '75px'
  };

  const props = {
    name: "file",
    multiple: true,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
      onChange(info) {
        const { status } = info.file;
          if (status !== "uploading") {
      }
          if (status === "done") {
            message.success({
              content: info.file.name + ' file uploaded successfully.',
              icon: <RiCheckboxCircleLine className="remix-icon" />,
          });
        } else if (status === "error") {
            message.error({
            content: info.file.name + ' file upload failed.',
            icon: <RiCloseCircleLine className="remix-icon" />,
          });
    }
  },
  onDrop() {},
};

  return (
    <ComponentsPage></ComponentsPage>
  );
}
