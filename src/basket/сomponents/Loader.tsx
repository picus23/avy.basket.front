import { Spin } from "antd";
import { FC } from "react";

import { LoadingOutlined } from '@ant-design/icons';


interface LoaderProps {
    
}
 
const Loader: FC<LoaderProps> = () => {
    return <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
}
 
export default Loader;