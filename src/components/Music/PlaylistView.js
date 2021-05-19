import React from 'react';
import { Typography } from 'antd';
import './index.css';

const { Title } = Typography;

export const PlaylistView = ({playlist}) => {
    console.log(playlist)
    const {name, images} = playlist;
    const largeAsset = images[0];
    return (
        <div class="playlist-view__wrapper">
            <img src={largeAsset.url}></img>
            <div class="playlist-view__info">
                <Title level={4}>{playlist.name}</Title>
            </div>
        </div>
    )
};