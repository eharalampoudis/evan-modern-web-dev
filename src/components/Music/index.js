import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import classNames from "classnames";
import { Container, Row, Col, Badge } from 'react-bootstrap';

import React, { useState, useEffect } from 'react';
import Spotify from 'spotify-web-api-js';
import { getHashParams } from '../../util.js';
import { PlaylistView } from './PlaylistView.js';

import './index.css';

export const SMusic = () => {
    const [spotifyApi] = useState(new Spotify());
    const [token, setToken] = useState(null);
    const [me, setMe] = useState({});
    const [myPlaylistsArr, setMyPlaylistsArr] = useState([]);
    const [playlists, setPlaylists] = useState({});

    const {id} = me;

    useEffect(() => {
        // todo: tweak logic so user redirected even if stale auth
        if (!window.location.hash) {
            window.location.assign(`https://accounts.spotify.com/authorize?client_id=3ac5f33e3fff458ba7434b9ad3e2e1d7&response_type=token&redirect_uri=${window.location.origin}/music&scope=user-library-read`)
        } else {
            const hash = getHashParams(window.location.hash)
            const {access_token} = hash;
            setToken(access_token);
        }
    }, []);

    useEffect(() => {
        if (token) {
            spotifyApi.setAccessToken(token);
            
            // get my user id
            spotifyApi.getMe().then(
                function (data) {
                    setMe(data);
                },
                function (err) {
                    console.error(err);
                }
            );
        }
    }, [token]);

    useEffect(() => {
        if (id) {
            spotifyApi.getUserPlaylists(id)
                .then(function(data) {
                    console.log(data)
                    setMyPlaylistsArr(data.items);
                }, function(err) {
                    console.error(err);
                });
            // spotifyApi.getMySavedTracks()
            //     .then(function(data) {
            //         console.log(data)
            //         // setMyPlaylists(data.items);
            //     }, function(err) {
            //         console.error(err);
            //     });
        }
    }, [id]);

    useEffect(() => {
        if (myPlaylistsArr) {
            const playlistTracks = myPlaylistsArr.map((playlist) => {
                return spotifyApi.getPlaylistTracks(playlist.id)
                    .then(function(data) {
                        console.log(data)
                        return {...data, ...playlist};
                    }, function(err) {
                        console.error(err);
                        return {};
                    });
            });
            Promise.all(playlistTracks).then((values) => {
                const obj = values.reduce((acc, elt) => {
                    acc[elt.id] = elt;
                    return acc;
                }, {});
                console.log(obj)
                setPlaylists(obj);
              });
        }
    }, [myPlaylistsArr]);

    const playlistIds = Object.keys(playlists);

    return (
        <div className="music-page__wrapper">
            {playlistIds.map(id => <PlaylistView playlist={playlists[id]} key ={playlists[id].id} />)}
        </div>
    );
};

export default SMusic;