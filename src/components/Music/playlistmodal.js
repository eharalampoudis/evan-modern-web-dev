import React, { useState, useEffect } from 'react';
import { Divider, List } from 'antd';


const PlaylistModal = (data) => {
    return (
        <div>
            <Divider orientation="left">Large Size</Divider>
            <List
                size="large"
                header={<div>Header</div>}
                footer={<div>Footer</div>}
                bordered
                dataSource={data}
                renderItem={item => <List.Item>{item}</List.Item>}
            />
        </div>
    );
};

export default PlaylistModal;