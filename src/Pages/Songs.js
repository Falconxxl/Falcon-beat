import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import './Songs.css';
import logo from '../Assets/Logo_falcon_beat13e.png'
import ModalLicense2 from "../Modal/ModalLicense2";
import {Helmet} from "react-helmet-async";


// ==================== CMS - BEATS MANAGEMENT ====================
const beatsData = {
    'English songs': [
        { id: 70, title: 'In Your Head', producer: 'FalconXXL', genre: 'Dance', bpm: 120, audio: 'https://dl.dropboxusercontent.com/scl/fi/x6gyra6r6h4nnew61hfqw/AI-Songwriter-In-Your-Head.mp3?rlkey=5bxg7jmsibu9om1g1xtnn7dq9&raw=1' },

        { id: 65, title: 'There Is The Door', producer: 'FalconXXL', genre: 'Slow jam', bpm: 114, audio: 'https://dl.dropboxusercontent.com/scl/fi/9sf48w0zf7c6tsdfd2phd/18.-Urban-Love-There-is-the-door-feat.-Bentley-3-Cover.mp3?rlkey=mbrqbz1sjkar10v5ablvd73ow&raw=1' },

        { id: 73, title: 'Baby girl', producer: 'FalconXXL', genre: 'R&B', bpm: 91, audio: 'https://dl.dropboxusercontent.com/scl/fi/fcyzqtls1kuiliki72a1z/Babygirl-2.mp3?rlkey=1w3j7eqs55lpgltuy7cdf0rql&raw=1' },

        { id: 74, title: 'Baby girl (Remix)', producer: 'FalconXXL', genre: 'R&B', bpm: 91, audio: 'https://dl.dropboxusercontent.com/scl/fi/tscra6hd2ommgi8qv1bid/Babygirl.mp3?rlkey=u05f6j84xf2ku58ot4isqp2pr&raw=1' },

        { id: 75, title: 'Beat The Feeling (Version 1)', producer: 'FalconXXL', genre: 'Dance', bpm: 123, audio: 'https://dl.dropboxusercontent.com/scl/fi/7o1rt1t6o7fu47mkq3lp0/Beat-The-Feeling-Version-1-Female-vocals.mp3?rlkey=8mvp1fc663e1vbomrj0clqkho&raw=1' },

        { id: 76, title: 'Beat The Feeling (Version 2)', producer: 'FalconXXL', genre: 'Dance', bpm: 123, audio: 'https://dl.dropboxusercontent.com/scl/fi/d3dv8mqgl16dbvhjv6vd0/Beat-The-Feeling-Version-2-Male-vocals-1.mp3?rlkey=nxsgzt2m7nhvj0728cl71aj6e&raw=1' },

        { id: 77, title: 'Beat The Feeling (Version 2)', producer: 'FalconXXL', genre: 'Dance', bpm: 123, audio: 'https://dl.dropboxusercontent.com/scl/fi/cephz4za08zw8z91jsvn9/Beat-the-feeling-4.mp3?rlkey=65kzeo9ip5j8mxz8katphjruo&raw=1' },

        { id: 82, title: 'Fly - S. Lopes', producer: 'FalconXXL', genre: 'Hip-hop', bpm: 155, audio: 'https://dl.dropboxusercontent.com/scl/fi/jwpesuhmyfzvepieaaig1/Fly-2.mp3?rlkey=047tuc8jz066dtpjpzzjtfo1p&raw=1' },

        { id: 83, title: 'Fly (Version 2)', producer: 'FalconXXL', genre: 'Hip-hop', bpm: 155, audio: 'https://dl.dropboxusercontent.com/scl/fi/cjyfdiunjkx3xsf1mql3x/Fly.mp3?rlkey=s7lp1udp19hwpf7we6teot615&raw=1' },

        { id: 84, title: 'Groove Machine', producer: 'FalconXXL', genre: 'Dance', bpm: 120, audio: 'https://dl.dropboxusercontent.com/scl/fi/0pjblpolbojmdnvzuca0e/Groove-Machine-Remix-Edition.mp3?rlkey=3q9syxz6vj8bb8h5x60ik9ypz&raw=1' },

        { id: 85, title: 'Groove Machine (Version 2)', producer: 'FalconXXL', genre: 'Dance', bpm: 120, audio: 'https://dl.dropboxusercontent.com/scl/fi/vu23y4b6g34s07xw8jxnm/Groove-Machine-2-Remix-Edition.mp3?rlkey=55dcg9vebz3jl3r2pkjbeqdfv&raw=1' },

        { id: 104, title: 'Velvet Glow', producer: 'FalconXXL', genre: 'R&B Slow', bpm: 159, audio: 'https://dl.dropboxusercontent.com/scl/fi/hq4snkjk9sit8igl1q5x3/Velvet-Glow.mp3?rlkey=cxkwbl9xpjepfo3x78h3alfro&raw=1' },

        { id: 97, title: 'Caught Up V1', producer: 'FalconXXL', genre: 'R&B', bpm: 101, audio: 'https://dl.dropboxusercontent.com/scl/fi/4wnrw3maps4fh6yiym4tf/SENECA-DE-DON-Caught-Up-Feat.-ILUNGA-Cover-2.mp3?rlkey=nvacr806qr0ehraw6rwb7jmwj&raw=1' },

        { id: 98, title: 'Caught Up V2', producer: 'FalconXXL', genre: 'R&B', bpm: 101, audio: 'https://dl.dropboxusercontent.com/scl/fi/a7zbzopvw4lh3p2477yye/SENECA-DE-DON-Caught-Up-Feat.-ILUNGA-Cover.mp3?rlkey=syz094m3gq4lv5t48k06w5n2b&raw=1' },

        { id: 87, title: 'Midnight Glow 2', producer: 'FalconXXL', genre: 'Afro-fusion', bpm: 95, audio: 'https://dl.dropboxusercontent.com/scl/fi/ynpvr50f3bdqeyeylgwz4/Midnight-Glow-2.mp3?rlkey=92krdf6fiyy9uf2ve4nvni3r5&raw=1' },

        { id: 88, title: 'Midnight Glow', producer: 'FalconXXL', genre: 'Afro-fusion', bpm: 95, audio: 'https://dl.dropboxusercontent.com/scl/fi/vfscho7ay01niugytuvkd/Midnight-Glow.mp3?rlkey=5v0idqpvdsdmkbtz2u28nzmzq&raw=1' },

        { id: 89, title: 'Midnight Replay', producer: 'FalconXXL', genre: 'Soul', bpm: 91, audio: 'https://dl.dropboxusercontent.com/scl/fi/e8ppcqtsynf4o85g769ya/Midnight-Replay.mp3?rlkey=usyse2i9p8sankr6t2gzg16gh&raw=1' },

        { id: 57, title: 'Groove machine 2', producer: 'FalconXXL', genre: 'Electro', bpm: 120, audio: 'https://dl.dropboxusercontent.com/scl/fi/umszce0p0aqxcdozkv2qx/Groove-Machine-2-Remix-Edition-Instrumental.mp3?rlkey=e301q7wxa09h02v35vt7yqxt3', AirbitLink:"" },

        { id: 58, title: 'Jenny V1', producer: 'FalconXXL', genre: 'Afro-Beat', bpm: 121, audio: 'https://dl.dropboxusercontent.com/scl/fi/upsl9ifexnn7yllk4ga3s/09.-Jenny-V1-Full-song.mp3?rlkey=bfrh6b3n3cym04m5qezt4lbq5&dl=1', AirbitLink:"" },

        { id: 59, title: 'Jenny V2', producer: 'FalconXXL', genre: 'Afro-Beat', bpm: 121, audio: 'https://dl.dropboxusercontent.com/scl/fi/ubdinvr0xicpe74lg98uw/10.Jenny-V2.mp3?rlkey=bc9n012g42n32pf50rvpzppbs&dl=1', AirbitLink:"" },
    ],

    'French songs': [
        { id: 71, title: 'Amour Sous Les Toiles', producer: 'FalconXXL', genre: 'Zouk', bpm: 80, audio: 'https://dl.dropboxusercontent.com/scl/fi/6kue8uguiubpbk6ct0yoc/Amour-Sous-Les-toiles-2.mp3?rlkey=ddww52rwcp9liwn3y1g9vpe7a&raw=1' },

        { id: 72, title: 'Amour Sous Les Toiles 2', producer: 'FalconXXL', genre: 'Zouk', bpm: 80, audio: 'https://dl.dropboxusercontent.com/scl/fi/bi18tnvytur6i8k1ncu02/Amour-Sous-Les-toiles.mp3?rlkey=k6gywqhsh05xq1nmjaeevymrp&raw=1' },

        { id: 78, title: 'Cherie Coco', producer: 'FalconXXL', genre: 'Afro-fusion', bpm: 100, audio: 'https://dl.dropboxusercontent.com/scl/fi/9towdl2wuzimluikoe497/cherie-coco-Cover.mp3?rlkey=qgzqkm69esrae3ilt0flu6fff&raw=1' },

        { id: 79, title: 'Cherie Coco (Version)', producer: 'FalconXXL', genre: 'Afro-fusion', bpm: 100, audio: 'https://dl.dropboxusercontent.com/scl/fi/omwbmszagn29446c2u091/cherie-coco-2-Cover.mp3?rlkey=yieufyjx7u4z5lss8927g5ymh&raw=1' },

        { id: 81, title: 'Comment Franchir Cette Étape', producer: 'Slow jam', genre: 'Various', bpm: 112, audio: 'https://dl.dropboxusercontent.com/scl/fi/317rbjwmgjaz0rfqmum4v/Comment-franchir-cette-tape.mp3?rlkey=3e19bbj94g89vuspzxnyth0ms&raw=1' },

        { id: 99, title: 'Sous La Lune', producer: 'FalconXXL', genre: 'Zouk', bpm: 80, audio: 'https://dl.dropboxusercontent.com/scl/fi/cq24x0mql7yragw6kzren/Sous-la-Lune.mp3?rlkey=2cbyv75sggs544kk1ksxxai3c&raw=1' },

        { id: 100, title: 'Sous Les Toiles', producer: 'FalconXXL', genre: 'Zouk', bpm: 85, audio: 'https://dl.dropboxusercontent.com/scl/fi/t4imm35k6s01apo4pbr90/Sous-Les-toiles.mp3?rlkey=7ez97txuk0wbsggdf2zbc8qg8&raw=1' },

        { id: 101, title: 'Validé', producer: 'FalconXXL', genre: 'Afro-fusion', bpm: 100, audio: 'https://dl.dropboxusercontent.com/scl/fi/7nuwadrlf8mkrmg2qvrt4/Valid-Demo-Cover.mp3?rlkey=k3z0mb73ia7013pcje6fffqj6&raw=1' },

        { id: 102, title: 'Validé V2', producer: 'FalconXXL', genre: 'Afro-fusion', bpm: 100, audio: 'https://dl.dropboxusercontent.com/scl/fi/s4vswtcnrwuwhegkvoz8m/Valid-Demo-2020-Cover.mp3?rlkey=ks8kqu3cee6ra9o75fif51z6f&raw=1' },

        { id: 103, title: 'Validé V3', producer: 'FalconXXL', genre: 'Afro-fusion', bpm: 100, audio: 'https://dl.dropboxusercontent.com/scl/fi/2kcv5szwged7xfn64qg93/Valid-Demo-3-Cover.mp3?rlkey=z6es3y9cnxt0mcam2shu3vr5p&raw=1' },

        { id: 79, title: 'Cherie Coco (Version)', producer: 'FalconXXL', genre: 'Afro-fusion', bpm: 100, audio: 'https://dl.dropboxusercontent.com/scl/fi/omwbmszagn29446c2u091/cherie-coco-2-Cover.mp3?rlkey=yieufyjx7u4z5lss8927g5ymh&raw=1' },

        { id: 81, title: 'Comment Franchir Cette Étape', producer: 'Slow jam', genre: 'Various', bpm: 112, audio: 'https://dl.dropboxusercontent.com/scl/fi/317rbjwmgjaz0rfqmum4v/Comment-franchir-cette-tape.mp3?rlkey=3e19bbj94g89vuspzxnyth0ms&raw=1' },

        { id: 86, title: 'Le silences me Parle', producer: 'FalconXXL', genre: 'Afro-fusion', bpm: 99, audio: 'https://dl.dropboxusercontent.com/scl/fi/pdahuix2aj86pzopamjr2/Les-Silences-Me-Parlent.mp3?rlkey=9xr9upr8sjn9fsaodv3fdzf87&raw=1' },

        { id: 91, title: 'Nuit Sans Fin 2', producer: 'FalconXXL', genre: 'Zouk', bpm: 74, audio: 'https://dl.dropboxusercontent.com/scl/fi/xdxvg1y9f3y25qsorry6z/Nuit-Sans-Fin-2.mp3?rlkey=j49lowa06f4fypge9kk510ofg&raw=1' },

        { id: 92, title: 'Nuit Sans Fin', producer: 'FalconXXL', genre: 'Zouk', bpm: 75, audio: 'https://dl.dropboxusercontent.com/scl/fi/ofou5fk0bzu0k97oglo0h/Nuit-Sans-Fin.mp3?rlkey=s3m78xmtwwl42fjysvf09m0hb&raw=1' },

        { id: 93, title: 'Sur Ta Peau', producer: 'FalconXXL', genre: 'Zouk', bpm: 74, audio: 'https://dl.dropboxusercontent.com/scl/fi/9kiodvdi59pizns3g8gc1/Nuit-Sur-Ta-Peau.mp3?rlkey=krlmr48kufi3xy6zvz93jtcf3&raw=1' },

        { id: 94, title: 'On A Le Temps Ce Soir', producer: 'FalconXXL', genre: 'Slow jam', bpm: 130, audio: 'https://dl.dropboxusercontent.com/scl/fi/4zx4uqpm5t5hddgcz5er0/On-a-le-temps-ce-soir.mp3?rlkey=eizz7kd2vqlh2o70osbcqbano&raw=1' },

        { id: 95, title: 'On emmenage à 2 [Beat V1]', producer: 'FalconXXL', genre: 'Zouk', bpm: 75, audio: 'https://dl.dropboxusercontent.com/scl/fi/uzu7b11p1e7lxqwqbajk4/On-emm-nage-demain-Version-1.mp3?rlkey=79tgesy1oeyv8ubaj14x54v08&raw=1' },

        { id: 96, title: 'On emmenage à 2 V2', producer: 'FalconXXL', genre: 'Zouk', bpm: 75, audio: 'https://dl.dropboxusercontent.com/scl/fi/ftyezjcmyff6evoimzww4/On-emm-nage-demain-Version-2.mp3?rlkey=ca30dyrxaid4wmp2qjl7mj9w8&raw=1' },

        { id: 71, title: 'Amour Sous Les Toiles', producer: 'FalconXXL', genre: 'Zouk', bpm: 80, audio: 'https://dl.dropboxusercontent.com/scl/fi/6kue8uguiubpbk6ct0yoc/Amour-Sous-Les-toiles-2.mp3?rlkey=ddww52rwcp9liwn3y1g9vpe7a&raw=1' },

        { id: 72, title: 'Amour Sous Les Toiles 2', producer: 'FalconXXL', genre: 'Zouk', bpm: 80, audio: 'https://dl.dropboxusercontent.com/scl/fi/bi18tnvytur6i8k1ncu02/Amour-Sous-Les-toiles.mp3?rlkey=k6gywqhsh05xq1nmjaeevymrp&raw=1' },

        { id: 73, title: 'Tant de Peines', producer: 'FalconXXL', genre: 'R&B', bpm: 168, audio: 'https://dl.dropboxusercontent.com/scl/fi/55s4ghwbv0rd73lao37a8/01-ILUNGA-Tant-De-peines-Ti-de-2.mp3?rlkey=himnr1xfgesojm4hbpcdsk3dq&dl=1' },

    ],

    'Dutch songs': [
        { id: 61, title: 'Eerste Fantasie', producer: 'FalconXXL', genre: 'Slow jam', bpm: 120, audio: 'https://dl.dropboxusercontent.com/scl/fi/q38bk1k12xmzx4ugms9gu/17.-Urban-Love-Pure-fantasie-feat.-Euro-M.-Jordan-5-Cover.mp3?rlkey=92pcf75dhttgdhh5ys293zh1m&raw=1' },

        { id: 62, title: 'Tweede fantasie (Remix)', producer: 'FalconXXL', genre: 'Slow jam', bpm: 120, audio: 'https://dl.dropboxusercontent.com/scl/fi/zwyjshtb4uibovm88y28p/17.-Urban-Love-Pure-fantasie-feat.-Euro-M.-Jordan-6-Cover.mp3?rlkey=1q6914cbcds0jsdpwnheimhll&raw=1' },

        { id: 63, title: 'Tweede fantasie', producer: 'FalconXXL', genre: 'Slow jam', bpm: 114, audio: 'https://dl.dropboxusercontent.com/scl/fi/5bcy22bfb184s2xlylksj/18.-Urban-Love-There-is-the-door-feat.-Bentley-Cover.mp3?rlkey=iic1s5et74988ursv6sjoricx&raw=1' },

        { id: 64, title: 'Het blijft een fantasie', producer: 'FalconXXL', genre: 'Slow jam', bpm: 114, audio: 'https://dl.dropboxusercontent.com/scl/fi/kx6cbt3rp4kygicn82mw4/18.-Urban-Love-There-is-the-door-feat.-Bentley-2-Cover.mp3?rlkey=s9s17bmeb8ccra78a01sbdxnu&raw=1' },

        { id: 66, title: 'Pure Fantasie', producer: 'FalconXXL', genre: 'Slow jam', bpm: 120, audio: 'https://dl.dropboxusercontent.com/scl/fi/a9216fw60qqdzy1svgbdn/20.-Urban-Love-Pure-fantasie-Remix-1-feat.-Euro-M.-Jordan-Bonus-Cover-7.mp3?rlkey=dpzk5ux6d5biyuh59uxhl760d&raw=1' },

        { id: 67, title: 'Pure Fantasie (Remix)', producer: 'FalconXXL', genre: 'Slow jam', bpm: 120, audio: 'https://dl.dropboxusercontent.com/scl/fi/g8oh92qy83m5jbiutxtow/20.-Urban-Love-Pure-fantasie-Remix-2-feat.-Euro-M.-Jordan-Bonus-Cover-7.mp3?rlkey=1iw1omeiot6oon3l1851gkiry&raw=1' },

        { id: 68, title: 'Pure Fantasie (Remix Dj Sigma)', producer: 'Slow jam', genre: 'Various', bpm: 120, audio: 'https://dl.dropboxusercontent.com/scl/fi/tqsyjjgs0b71hp0x6z549/20.-Urban-Love-Pure-fantasie-Remix-3-feat.-Euro-M.-Jordan-Bonus-Cover-8.mp3?rlkey=sbs0kexpgqudfrar7upfiu8f4&raw=1' },

        { id: 69, title: 'Pure Fantasie (Remix 3)', producer: 'Slow jam', genre: 'Various', bpm: 120, audio: 'https://dl.dropboxusercontent.com/scl/fi/0xr6a0jj71s5ukelk06el/20.-Urban-Love-Pure-fantasie-Remix-4-feat.-Euro-M.-Jordan-Bonus-Cover-8.mp3?rlkey=q81i8oa6t9pxwuxalhg4gn40m&raw=1' },

        { id: 109, title: 'One More Chance (Piano String)', producer: 'FalconXXL', genre: 'Orchestral', bpm: 114, audio: 'https://dl.dropboxusercontent.com/scl/fi/h0xfw4wj4l5qckcf9yod5/One-More-Chance-Piano-String.mp3?rlkey=j89yt31mtmudps0ogj1ehh1qf&raw=1' }
    ],

    'Hip-Hop (Trap)': [

            ],

    'Hip-Hop (Melodic)': [

    ],

    'Hip-Hop (Drill)': [

    ],

    'Hip-Hop (Hardcore)': [

    ],

    'Afrobeats / Afrotrap': [

    ],

    'Afrofusion': [

    ],

    'Amapiano / Afropiano': [

    ],

    'R&B (Contemporain)': [

    ],

    'R&B (Trap)': [
    ],

    'R&B (Uptempo)': [
    ],

    'Slow Jam (R&B)':
        [
            { id: 44, title: 'On a le temps ce soir', producer: 'FalconXXL', genre: 'Slow Jam (R&B)', bpm: 130, audio: 'https://dl.dropboxusercontent.com/scl/fi/pxuz5wjatkxaeiql4dva1/On-a-le-temps-ce-soir-Instrumental-2.mp3?rlkey=pts6y4yiabo1630uv0w6f57ii', AirbitLink:"" },
            { id: 45, title: 'Fantasy', producer: 'FalconXXL', genre: 'Slow Jam (R&B)', bpm: 68, audio: 'https://dl.dropboxusercontent.com/scl/fi/r904g3vttsngpn6hbkd2a/17.-Urban-Love-Pure-fantasie-feat.-Euro-M.-Jordan-5-Instrumental.mp3?rlkey=buj636dnvs1vahcqahlvq7mha', AirbitLink: "https://airbit.com/FalconXXL/fantasy" },
            { id: 46, title: 'There is the door 1', producer: 'FalconXXL', genre: 'Slow Jam (R&B)', bpm: 109, audio: 'https://dl.dropboxusercontent.com/scl/fi/qvbyewmh44ix656j5dfuu/18.-Urban-Love-There-is-the-door-feat.-Bentley-Cover-Instrumental.mp3?rlkey=qex2hy9ses6p0gukbdkt9rtlg', AirbitLink:"" },
            { id: 47, title: 'Comment franchir cette étape', producer: 'FalconXXL', genre: 'Slow Jam (R&B)', bpm: 112, audio: 'https://dl.dropboxusercontent.com/scl/fi/m3g1pyfym2yom7vrujvhj/Comment-franchir-cette-tape-Instrumental.mp3?rlkey=jv4wya4vt6gvrgns0sghngpe5', AirbitLink:"" },
            { id: 48, title: 'The door', producer: 'FalconXXL', genre: 'Slow Jam (R&B)', bpm: 109, audio: 'https://dl.dropboxusercontent.com/scl/fi/xnfwas1d7hzltscn3p3qu/18.-Urban-Love-There-is-the-door-feat.-Bentley-Cover-3-Instrumental.mp3?rlkey=1i3qixtxk6an4xucbv3tx8fk0', AirbitLink: "https://airbit.com/FalconXXL/the-door" },
            { id: 49, title: 'Pure fantasie 1', producer: 'FalconXXL', genre: 'Slow Jam (R&B)', bpm: 68, audio: 'https://dl.dropboxusercontent.com/scl/fi/hlq5qo8h9v9rnchl6blsv/20.-Urban-Love-Pure-fantasie-Remix-1-feat.-Euro-M.-Jordan-Bonus-Cover-Instrumental.mp3?rlkey=e8h64f1x3bbi7mrkgh8x6hfff', AirbitLink:"" },
            { id: 50, title: 'There is the door 3', producer: 'FalconXXL', genre: 'Slow Jam (R&B)', bpm: 109, audio: 'https://dl.dropboxusercontent.com/scl/fi/whqrbxoyxtxggmkzuana0/18.-Urban-Love-There-is-the-door-feat.-Bentley-2-Cover-Instrumental.mp3?rlkey=bml5ng4xmrlcm19on7lq6swg7', AirbitLink:"" },
            { id: 51, title: 'Pure fantasie 3', producer: 'FalconXXL', genre: 'Slow Jam (R&B)', bpm: 120, audio: 'https://dl.dropboxusercontent.com/scl/fi/3nsgicqdsz2td0iye2kov/20.-Urban-Love-Pure-fantasie-Remix-3-feat.-Euro-M.-Jordan-Bonus-Cover-Instrumental.mp3?rlkey=gafjqq52c55lw2m8s1vafu51t', AirbitLink:"" },
            { id: 52, title: 'Pure fantasie 2', producer: 'FalconXXL', genre: 'Slow Jam (R&B)', bpm: 120, audio: 'https://dl.dropboxusercontent.com/scl/fi/b3kxe16gaq0zi7qfymk5u/20.-Urban-Love-Pure-fantasie-Remix-4-feat.-Euro-M.-Jordan-Bonus-Cover-Instrumental.mp3?rlkey=53dei3wjfwklwo7b15ux41f0v', AirbitLink:"" },
        ],


    'Neo Soul': [

    ],

    'Zouk': [

    ],

    'Kizomba': [

    ],

    'Reggaeton': [

    ],

    'Dancehall': [

    ],

    'Orchestral / Acoustic': [

    ],

    'EDM': [

    ],

    'Gospel': [

    ],

    'World Music': [

    ],

};


// Composant pour les icônes sociales
const SocialIcons = () => (
    <div className="social-icons">

        {/* Spotify */}
        <a
            href="https://open.spotify.com/user/31zx5mzrgc35qi44xl4weluuedqi"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
        >
            <i className="fab fa-spotify"></i>
        </a>

        {/* YouTube */}
        <a
            href="https://www.youtube.com/@FalconXXL-Beat"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
        >
            <i className="fab fa-youtube"></i>
        </a>

        {/* Instagram */}
        <a
            href="https://www.instagram.com/falconbeat2.0"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
        >
            <i className="fab fa-instagram"></i>
        </a>

        {/* TikTok */}
        <a
            href="https://www.tiktok.com/@whogotflow1"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
        >
            <i className="fab fa-tiktok"></i>
        </a>

    </div>
);

function Songs() {
    const [selectedGenre, setSelectedGenre] = useState('All');
    const [currentBeat, setCurrentBeat] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(0.7);
    const [isRepeat, setIsRepeat] = useState(false);
    const [isShuffle, setIsShuffle] = useState(false);
    const [showFilters, setShowFilters] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [lastBackwardPress, setLastBackwardPress] = useState(0);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const audioRef = useRef(null);
    const sidebarRef = useRef(null);
    const progressRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const isLoadingRef = useRef(false);

    const whatsappNumber = '+31685533124';

    const [openModal, setOpenModal] = useState(false);

    // const [showLicenseModal, setShowLicenseModal] = useState(false);

    const getWhatsappLink = (beat) => {
        const message = encodeURIComponent(`Hello, I am interested in the beat "${beat.title}" by ${beat.producer} (${beat.genre})`);
        return `https://wa.me/${whatsappNumber}?text=${message}`;
    };

    const getInstagramLink = (beat) => {
        return `https://www.instagram.com/falconxxl.media/`;
    };

    const handleBuyClick = (beat) => {
        if (!beat.AirbitLink || beat.AirbitLink === "") {
            setModalMessage(`These songs are professionally produced and available for purchase. Artists can buy a beat, record their own version, and release it under their name. Interested? Contact us on WhatsApp for details.`);
            setShowModal(true);
        } else {
            window.open(beat.AirbitLink, '_blank', 'noopener,noreferrer');
        }
    };


    // ✅ Amélioration : fonction pour ouvrir le modal avec un délai pour garantir une animation fluide
    const handleOpenModal = (e) => {
        e.stopPropagation();
        // Désactiver le scroll du body
        document.body.style.overflow = 'hidden';
        setOpenModal(true);
    };

    // ✅ Amélioration : fonction pour fermer le modal proprement
    const handleCloseModal = () => {
        setOpenModal(false);
        // Réactiver le scroll du body
        document.body.style.overflow = 'unset';
    };

    // Charger Font Awesome
    useEffect(() => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
        document.head.appendChild(link);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (showFilters && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                const filterToggle = document.querySelector('.mobile-filter-toggle');
                if (filterToggle && !filterToggle.contains(event.target)) {
                    setShowFilters(false);
                }
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [showFilters]);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume;
            audioRef.current.loop = isRepeat;
        }
    }, [volume, isRepeat]);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const updateTime = () => setCurrentTime(audio.currentTime);
        const updateDuration = () => setDuration(audio.duration);
        const handleEnded = () => {
            if (!isRepeat) {
                handleNext();
            }
        };

        audio.addEventListener('timeupdate', updateTime);
        audio.addEventListener('loadedmetadata', updateDuration);
        audio.addEventListener('ended', handleEnded);

        return () => {
            audio.removeEventListener('timeupdate', updateTime);
            audio.removeEventListener('loadedmetadata', updateDuration);
            audio.removeEventListener('ended', handleEnded);
        };
    }, [isRepeat, selectedGenre, currentBeat, isShuffle]);

    const handlePlayPause = async (beat) => {
        if (isLoadingRef.current) return;

        const audio = audioRef.current;

        if (currentBeat?.id === beat.id) {
            if (isPlaying) {
                audio.pause();
                setIsPlaying(false);
            } else {
                isLoadingRef.current = true;
                try {
                    await audio.play();
                    setIsPlaying(true);
                } catch (error) {
                    if (error.name !== 'AbortError') {
                        console.error('Error playing audio:', error);
                    }
                } finally {
                    isLoadingRef.current = false;
                }
            }
        } else {
            isLoadingRef.current = true;
            audio.pause();
            audio.currentTime = 0;
            setIsPlaying(false);
            setCurrentBeat(beat);

            setTimeout(async () => {
                try {
                    await audio.play();
                    setIsPlaying(true);
                } catch (error) {
                    if (error.name !== 'AbortError') {
                        console.error('Error playing audio:', error);
                    }
                } finally {
                    isLoadingRef.current = false;
                }
            }, 100);
        }
    };

    const handleNext = () => {
        const beats = getAllBeats();
        if (!beats || beats.length === 0 || !currentBeat) return;

        let nextBeat;
        if (isShuffle) {
            const randomIndex = Math.floor(Math.random() * beats.length);
            nextBeat = beats[randomIndex];
        } else {
            const currentIndex = beats.findIndex(b => b.id === currentBeat.id);
            const nextIndex = (currentIndex + 1) % beats.length;
            nextBeat = beats[nextIndex];
        }

        setCurrentBeat(nextBeat);
        setTimeout(async () => {
            try {
                await audioRef.current.play();
                setIsPlaying(true);
            } catch (error) {
                if (error.name !== 'AbortError') {
                    console.error('Error playing next track:', error);
                }
            }
        }, 100);
    };

    const handlePrevious = () => {
        const beats = getAllBeats();
        if (!beats || beats.length === 0 || !currentBeat) return;

        const now = Date.now();
        const timeSinceLastPress = now - lastBackwardPress;

        if (timeSinceLastPress < 500 && currentTime < 3) {
            const currentIndex = beats.findIndex(b => b.id === currentBeat.id);
            const prevIndex = currentIndex === 0 ? beats.length - 1 : currentIndex - 1;
            const prevBeat = beats[prevIndex];
            setCurrentBeat(prevBeat);
            setTimeout(async () => {
                try {
                    await audioRef.current.play();
                    setIsPlaying(true);
                } catch (error) {
                    if (error.name !== 'AbortError') {
                        console.error('Error playing previous track:', error);
                    }
                }
            }, 100);
        } else {
            audioRef.current.currentTime = 0;
        }

        setLastBackwardPress(now);
    };

    const formatTime = (time) => {
        if (isNaN(time)) return '0:00';
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    const handleSeek = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const pos = (e.clientX - rect.left) / rect.width;
        audioRef.current.currentTime = pos * duration;
    };

    const handleTouchStart = (e) => {
        setIsDragging(true);
        handleTouchMove(e);
    };

    const handleTouchMove = (e) => {
        if (!isDragging && e.type !== 'touchstart') return;
        const touch = e.touches[0];
        const rect = progressRef.current.getBoundingClientRect();
        const pos = Math.max(0, Math.min(1, (touch.clientX - rect.left) / rect.width));
        audioRef.current.currentTime = pos * duration;
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
    };

    const handleGenreSelect = (genre) => {
        setSelectedGenre(genre);
        setShowFilters(false);
        setSearchQuery('');

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const getAllBeats = () => {
        if (selectedGenre === 'All') {
            return Object.values(beatsData).flat();
        }
        return beatsData[selectedGenre] || [];
    };

    const genres = ['All', ...Object.keys(beatsData)];
    let currentBeats = getAllBeats();

    if (searchQuery.trim()) {
        currentBeats = currentBeats.filter(beat =>
            beat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            beat.producer.toLowerCase().includes(searchQuery.toLowerCase()) ||
            beat.genre.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }

    return (

        <>
            <Helmet>
                <title>Finished Songs – English, French & Dutch | Falcon Beats</title>
                <meta name="description" content="Browse a collection of finished songs by FalconXXL in English, French and Dutch. Buy a song, record your version and release it under your name." />
                <link rel="canonical" href="https://www.falconbeat.nl/Songs" />
            </Helmet>

        <div className="App">
            <audio ref={audioRef} src={currentBeat?.audio} />

            {showFilters && <div className="sidebar-overlay" onClick={() => setShowFilters(false)}></div>}
            {mobileMenuOpen && <div className="mobile-menu-overlay" onClick={() => setMobileMenuOpen(false)}></div>}

            {/* Navbar */}
            <nav className="navbar">
                <div className="navbar-container">
                    <button
                        className="mobile-hamburger"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Menu"
                    >
                        <span className={mobileMenuOpen ? 'active' : ''}></span>
                        <span className={mobileMenuOpen ? 'active' : ''}></span>
                        <span className={mobileMenuOpen ? 'active' : ''}></span>
                    </button>

                    <div className="navbar-logo">
                        <NavLink to="/"
                                 className={({isActive}) => isActive ? "navbar-link active" : "navbar-link"}
                        >
                            <img src={logo} alt="FalconBeat" className="logo-falcon-NavMenu"/>
                        </NavLink>
                    </div>

                    <div className="navbar-links desktop-only">
                        <NavLink
                            to="/"
                            className={({isActive}) => isActive ? "navbar-link active" : "navbar-link"}
                        >
                            Beats
                        </NavLink>

                        <NavLink
                            to="/Commercial"
                            className={({isActive}) => isActive ? "navbar-link active" : "navbar-link"}
                        >
                            Commercial
                        </NavLink>
                        <NavLink
                            style={{color: "#f3bb2f"}}
                            to="/Songs"
                            className={({isActive}) => isActive ? "navbar-link active" : "navbar-link"}
                        >
                            Songs
                        </NavLink>
                        <NavLink
                            to="/New"
                            className={({isActive}) => isActive ? "navbar-link active" : "navbar-link"}
                        >
                            New*
                        </NavLink>
                        <NavLink
                            to="/License"
                            className={({isActive}) => isActive ? "navbar-link active" : "navbar-link"}
                        >
                            License
                        </NavLink>

                        <NavLink
                            to="/Collab"
                            className={({isActive}) => isActive ? "navbar-link active" : "navbar-link"}
                        >
                            Collab
                        </NavLink>
                        <NavLink
                            to="/Contact"
                            className={({isActive}) => isActive ? "navbar-link active" : "navbar-link"}
                        >
                            Contact
                        </NavLink>

                        <a href="https://www.falconxxl.com"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="navbar-link active">FalconXXL</a>
                    </div>

                    <SocialIcons />

                    <button className="mobile-filter-toggle" onClick={() => setShowFilters(!showFilters)}>
                        <i className="fas fa-filter"></i>
                        <span className="filter-text">Filters</span>
                    </button>

                    <a
                        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello, I am interested in your beats!')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="navbar-contact-btn desktop-only"
                    >
                        <i style={{ fontSize: "1.5em" }}
                           className="fa-brands fa-whatsapp"></i>
                    </a>
                </div>

                <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
                    <div className="mobile-menu-content">
                        <NavLink to="/" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>Beats</NavLink>
                        <NavLink to="/Commercial" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>Commercial</NavLink>
                        <NavLink to="/Songs" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>Songs</NavLink>
                        <NavLink to="/New" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>New*</NavLink>
                        <NavLink to="/License" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>License</NavLink>
                        {/*<NavLink to="/About" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>About</NavLink>*/}
                        <NavLink to="/Collab" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>Collab</NavLink>
                        {/*<NavLink to="/Faq" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>FAQ</NavLink>*/}
                        <NavLink to="/Contact" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>Contact</NavLink>
                        <a href="https://www.falconxxl.com" className="mobile-menu-link mobile-menu-link-special" onClick={() => setMobileMenuOpen(false)}>FalconXXL</a>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <div className="main-container">
                <aside ref={sidebarRef} className={`sidebar ${showFilters ? 'show' : ''}`}>
                    <div className="sidebar-header">
                        <h2>Genres</h2>
                        <button className="sidebar-close-btn" onClick={() => setShowFilters(false)}>✕</button>
                    </div>
                    <p className="filter-subtitle">Choose your song genre</p>

                    <div className="genre-filters">
                        {genres.map((genre) => {
                            const displayName = genre === 'All' ? 'All Songs' : genre;
                            const count = genre === 'All' ? Object.values(beatsData).flat().length : beatsData[genre].length;
                            return (
                                <button
                                    key={genre}
                                    onClick={() => handleGenreSelect(genre)}
                                    className={`genre-btn ${selectedGenre === genre ? 'active' : ''}`}
                                >
                                    {displayName}
                                    <span className="beat-count">{count}</span>
                                </button>
                            );
                        })}
                    </div>
                </aside>

                <main className="beats-section">
                    <div className="search-container">
                        <i className="fas fa-search search-icon"></i>
                        <input
                            type="text"
                            placeholder="Search beats..."
                            className="search-input"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <p className="search-tagline">Find your beat and contact us via
                            <strong style={{color:"#2aff87"}}> Whatsapp </strong>
                            to get it!
                        </p>
                    </div>

                    <div className="section-header">
                        <h2 className="section-title">
                            {selectedGenre === 'All' ? 'All artist songs' : `${selectedGenre} Songs`}
                        </h2>
                        <p className="section-subtitle">
                            {currentBeats.length} song{currentBeats.length !== 1 ? 's' : ''} available
                        </p>
                    </div>

                    <div className="beats-list">
                        {currentBeats.length === 0 ? (
                            <div className="no-results">
                                <i className="fas fa-music"></i>
                                <p>No beats found</p>
                            </div>
                        ) : (
                            currentBeats.map((beat, index) => (
                                <div key={beat.id} className="beat-card">
                                    <div className="beat-number desktop-only">{index + 1}</div>

                                    <div className="beat-play-container">
                                        {currentBeat?.id === beat.id && isPlaying ? (
                                            <div
                                                className="playing-bars"
                                                onClick={() => handlePlayPause(beat)}
                                                style={{ cursor: 'pointer' }}
                                            >
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        ) : (
                                            <button
                                                className="beat-play-btn"
                                                onClick={() => handlePlayPause(beat)}
                                            >
                                                <i className="fa-solid fa-play"></i>
                                            </button>
                                        )}
                                    </div>

                                    <div className="beat-info" onClick={() => handlePlayPause(beat)}>
                                        <h3 className="beat-title">{beat.title}</h3>

                                        {/* ✅ TÂCHE 1 : Genre déplacé ici (en dessous du titre) avec le style du bouton Price */}
                                        <span className="beat-genre-below-title">{beat.genre}</span>
                                    </div>

                                    <span className="beat-bpm desktop-only">{beat.bpm} BPM</span>

                                    <button
                                        onClick={() => handleBuyClick(beat)}
                                        className="buy-beat-btn"
                                    >
                                        Buy
                                    </button>

                                    <a
                                        href={getInstagramLink(beat)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="instagram-beat-btn desktop-only"
                                    >
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>

                                    <a
                                        href={getWhatsappLink(beat)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="get-beat-btn"
                                    >
                                        <i className="fa-brands fa-whatsapp"></i>
                                        <span className="get-beat-text">Get this Beat</span>
                                    </a>
                                </div>
                            ))
                        )}
                    </div>
                </main>
            </div>

            {/* Fixed Player */}
            {currentBeat && (
                <div className="player">
                    <div className="player-container desktop-player">
                        <div className="player-left">
                            {isPlaying ? (
                                <div
                                    className="player-playing-bars"
                                    onClick={() => handlePlayPause(currentBeat)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            ) : (
                                <div className="player-play-placeholder"></div>
                            )}

                            <div className="player-info">
                                <div className="player-title">{currentBeat.title}</div>
                                <div className="player-producer">by {currentBeat.producer}</div>
                            </div>
                        </div>

                        <div className="player-center">
                            <div className="player-timeline">
                                <span className="time">{formatTime(currentTime)}</span>
                                <div className="timeline-bar" onClick={handleSeek}>
                                    <div className="timeline-progress" style={{ width: `${(currentTime / duration) * 100 || 0}%` }}></div>
                                </div>
                                <span className="time">{formatTime(duration)}</span>
                            </div>

                            <div className="player-controls">
                                <button className={`control-btn ${isShuffle ? 'active' : ''}`} onClick={() => setIsShuffle(!isShuffle)}>
                                    <i className="fa-solid fa-shuffle"></i>
                                </button>

                                <button className="control-btn" onClick={handlePrevious}>
                                    <i className="fa-solid fa-backward-step"></i>
                                </button>

                                <button className="control-btn-play" onClick={() => handlePlayPause(currentBeat)}>
                                    <i className={`fa-solid ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
                                </button>

                                <button className="control-btn" onClick={handleNext}>
                                    <i className="fa-solid fa-forward-step"></i>
                                </button>

                                <button className={`control-btn ${isRepeat ? 'active' : ''}`} onClick={() => setIsRepeat(!isRepeat)}>
                                    <i className="fa-solid fa-repeat"></i>
                                </button>
                            </div>

                            <div className="player-copyright" style={{color:"white"}}>
                                Website developed by FALCON-XXL
                                2026 FALCON-XXL | All rights are reserved
                            </div>
                        </div>

                        <div className="player-right">
                            <div className="player-volume">
                                <i className="fas fa-volume-up volume-icon"></i>
                                <div className="volume-bar-container">
                                    <input
                                        type="range"
                                        min="0"
                                        max="1"
                                        step="0.01"
                                        value={volume}
                                        onChange={(e) => setVolume(parseFloat(e.target.value))}
                                        className="volume-slider"
                                    />
                                    <div className="volume-level" style={{ width: `${volume * 100}%` }}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mobile-player">
                        <div
                            ref={progressRef}
                            className="mobile-progress-bar"
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                        >
                            <div className="mobile-progress-fill" style={{ width: `${(currentTime / duration) * 100 || 0}%` }}></div>
                        </div>

                        <div className="mobile-player-content">
                            {isPlaying ? (
                                <div
                                    className="mobile-playing-bars"
                                    onClick={() => handlePlayPause(currentBeat)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            ) : (
                                <div className="mobile-play-placeholder"></div>
                            )}

                            <div className="mobile-player-info">
                                <div className="mobile-player-title">{currentBeat.title}</div>
                                <div className="mobile-player-producer">by {currentBeat.producer}</div>
                            </div>

                            <div className="mobile-player-controls">
                                <button className="mobile-control-btn" onClick={handlePrevious}>
                                    <i className="fa-solid fa-backward-step"></i>
                                </button>

                                <button className="mobile-control-btn-play" onClick={() => handlePlayPause(currentBeat)}>
                                    <i className={`fa-solid ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
                                </button>

                                <button className="mobile-control-btn" onClick={handleNext}>
                                    <i className="fa-solid fa-forward-step"></i>
                                </button>
                            </div>
                        </div>

                        <div className="mobile-social-icons">
                            <SocialIcons />
                        </div>
                    </div>
                </div>
            )}

            {/* ✅ TÂCHE 2 : Modal License amélioré */}
            <ModalLicense2
                open={openModal}
                onClose={handleCloseModal}
            />

            {/* Modal pour beats non disponibles */}
            {showModal && (
                <div className="modal-overlay" onClick={() => setShowModal(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button
                            className="modal-close-btn"
                            onClick={() => setShowModal(false)}
                            aria-label="Close modal"
                        >
                            ✕
                        </button>
                        <div className="modal-body">
                            <i className="fas fa-info-circle modal-icon"></i>
                            <p className="modal-message">{modalMessage}</p>
                            <a
                                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello, I am interested in purchasing a beat not available on Airbeats.')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="modal-whatsapp-btn"
                            >
                                <i className="fa-brands fa-whatsapp"></i>
                                Contact us on WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>

      </>
    );
}

export default Songs;