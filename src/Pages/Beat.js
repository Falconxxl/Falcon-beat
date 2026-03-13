import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import './Beat.css';
import logo from '../Assets/Logo_falcon_beat13e.png'
import ModalLicense2 from "../Modal/ModalLicense2";
import { Helmet } from 'react-helmet-async';


// ==================== CMS - BEATS MANAGEMENT ====================
const beatsData = {
    'Hip-Hop (Trap)': [
        { id: 1, title: 'Temptation', producer: 'FalconXXL', genre: 'Hip-Hop', bpm: 92, audio: 'https://dl.dropboxusercontent.com/scl/fi/62u49mwlff5l7qx7v4eoi/Temptation-Instrumental.mp3?rlkey=i56gc0nlz9br206f97n2pseu4', AirbitLink:"" },
        { id: 2, title: 'Drama', producer: 'FalconXXL', genre: 'Hip-Hop', bpm: 130, audio: 'https://dl.dropboxusercontent.com/scl/fi/3ouxmdheu8lwwst1lwvbu/Drama.mp3?rlkey=wowa69p49fzoh20u7dr2c32zl', AirbitLink:"" },
        { id: 3, title: 'Fly (Verssion 1)', producer: 'FalconXXL', genre: 'Hip-Hop', bpm: 157, audio: 'https://dl.dropboxusercontent.com/scl/fi/ob8ub7x1qxgddxsc8vqw2/Fly-2-Instrumental.mp3?rlkey=a26q6m5tpwx7b9u99e4tncwwm', AirbitLink:"" },
        { id: 4, title: 'Fly', producer: 'FalconXXL', genre: 'Hip-Hop', bpm: 157, audio: 'https://dl.dropboxusercontent.com/scl/fi/uwdgvdbpghoc7x7ridf3e/Fly-Instrumental.mp3?rlkey=cdm3c7mmubxn8xbdi35jb4was', AirbitLink:"https://airbit.com/FalconXXL/fly" },
        { id: 5, title: 'One shot', producer: 'FalconXXL', genre: 'Hip-Hop', bpm: 175, audio: 'https://dl.dropboxusercontent.com/scl/fi/dx429avx4ck50x7y9so88/One-shot.mp3?rlkey=k530ldkoi4bmt82ipvitcd32y', AirbitLink:"https://airbit.com/FalconXXL/one-shot" },
        { id: 6, title: 'Game Over V1', producer: 'FalconXXL', genre: 'Hip-Hop', bpm: 130, audio: 'https://dl.dropboxusercontent.com/scl/fi/o9zxn1a96rtwzc0pye8p6/game-over-1.mp3?rlkey=ntpwodj5ja38ld7zk8xtqi2rc&dl=1', AirbitLink:"" },
        { id: 7, title: 'Game Over V2', producer: 'FalconXXL', genre: 'Hip-Hop', bpm: 130, audio: 'https://dl.dropboxusercontent.com/scl/fi/nxp5j839xke3auzm3cpsd/game-over-2.mp3?rlkey=mq07xp6uijijw1qigf7yadrvu&dl=1', AirbitLink:"" },
        { id: 8, title: 'Game Over V3', producer: 'FalconXXL', genre: 'Hip-Hop', bpm: 130, audio: 'https://www.dropbox.com/scl/fi/3g9lc5yb9u5nu108cvqyb/game-over-3.mp3?rlkey=hntcm82uz7cqy8jfunesoxnfv&st=ybl1law0&dl=0', AirbitLink:"" },
        { id: 9, title: 'Avec les SS V1', producer: 'FalconXXL', genre: 'Hip-Hop', bpm: 143, audio: 'https://dl.dropboxusercontent.com/scl/fi/2u0vn8u8nagposyy790vn/01-18.-Histoire-Avec-les-streetsounds-Beat-Bonus-Instrumental.wav?rlkey=7hb2yhoco7xcdwxqiubafo8xm&st=554ucqvh&dl=1', AirbitLink:"" },
        { id: 10, title: 'Avec les SS V2', producer: 'FalconXXL', genre: 'Hip-Hop', bpm: 143, audio: 'https://dl.dropboxusercontent.com/scl/fi/qj3qhphrnse410jj9jw5v/01-18.-Histoire-Avec-les-streetsounds-Beat-Bonus-Cover.mp3?rlkey=48bchbv1mszz4b7p0r0oue5w3&st=rz5xgqnw&dl=1', AirbitLink:"" },
        { id: 11, title: 'Watch', producer: 'FalconXXL', genre: 'Hip-Hop', bpm: 175, audio: 'https://dl.dropboxusercontent.com/scl/fi/uao35snjhem759031318v/01-09.-Histoire-Watch-Ya-Kil-Rap-Instrumental.wav?rlkey=r7cx0ftsxdfh7et9rdyb0wegb&st=jox11gte&dl=1', AirbitLink:"" },
        { id: 12, title: 'One shot', producer: 'FalconXXL', genre: 'Hip-Hop', bpm: 175, audio: '', AirbitLink:"" },
    ],

    'Hip-Hop (Melodic)': [

    ],

    'Hip-Hop (Drill)': [

    ],

    'Hip-Hop (Hardcore)': [

    ],

    'Afrobeats / Afrotrap': [
        { id: 14, title: 'Cherie Coco', producer: 'FalconXXL', genre: 'Afrobeat', bpm: 101, audio: 'https://dl.dropboxusercontent.com/scl/fi/3497eq93monp9rdzxvjqt/cherie-coco-2-Cover-Instrumental.mp3?rlkey=jhztnrt2uzpqh8lv277x9z3sb', AirbitLink:"" },
        { id: 15, title: 'Cherie Coco 2', producer: 'FalconXXL', genre: 'Afrobeat', bpm: 101, audio: 'https://dl.dropboxusercontent.com/scl/fi/udezk0kpcc3xsb5mbhtkl/cherie-coco-test-vox1-Cover-Instrumental.mp3?rlkey=syaso5ct3vsoyt4ynrk9wuvek', AirbitLink:"" },
        { id: 16, title: 'Club romance', producer: 'FalconXXL', genre: 'Afrobeat', bpm: 101, audio: 'https://dl.dropboxusercontent.com/scl/fi/sk609s340rmulj6442jti/Club-Romance-Instrumental.mp3?rlkey=4uy7yfn4zem9qhuxb9ps6v3q3', AirbitLink:"https://airbit.com/FalconXXL/club-romance" },
        { id: 17, title: 'Le silences me parle', producer: 'FalconXXL', genre: 'Afrobeat', bpm: 100, audio: 'https://dl.dropboxusercontent.com/scl/fi/a2kwr1mj3nywf7yjz1616/Les-Silences-Me-Parlent-Instrumental.mp3?rlkey=rj2sjwrjizfgn4cz4flipaj91', AirbitLink:"" },
        { id: 18, title: 'Midnight Glow', producer: 'FalconXXL', genre: 'Afrobeat', bpm: 95, audio: 'https://dl.dropboxusercontent.com/scl/fi/lu4kvzxvncepsflwoyst9/Midnight-Glow-Instrumental.mp3?rlkey=6k318h2rcigbeq2evfzxikwoi', AirbitLink:"https://airbit.com/FalconXXL/midnight-glow" },
        { id: 19, title: 'Lagos night', producer: 'FalconXXL', genre: 'Afrobeat', bpm: 95, audio: 'https://dl.dropboxusercontent.com/scl/fi/d6basb3lk8oipjlrlm0f8/Midnight-Glow-2-Instrumental.mp3?rlkey=dgl6c1gnfm6gg3wv11etdlbdy', AirbitLink:"" },
        { id: 13, title: 'Validé', producer: 'FalconXXL', genre: 'Afrobeat', bpm: 101, audio: 'https://dl.dropboxusercontent.com/scl/fi/qgivbbtxin2kkgqtohqr0/Valid-Demo-Cover-Instrumental.mp3?rlkey=cm80s23s48lsgpo9ijat8w4dq', AirbitLink:"https://airbit.com/FalconXXL/validate-1" },
        { id: 20, title: 'Love me now', producer: 'FalconXXL', genre: 'Afrobeat', bpm: 101, audio: 'https://dl.dropboxusercontent.com/scl/fi/700mltxpiof3yeo7stj67/Valid-Demo-2020-Cover-Instrumental.mp3?rlkey=i94tdg026s4nhzv2pk8wq4olc', AirbitLink:"" },
        { id: 21, title: 'Validate', producer: 'FalconXXL', genre: 'Afrobeat', bpm: 101, audio: 'https://dl.dropboxusercontent.com/scl/fi/9qnfqjc28sz1r0sca78da/Valid-Demo-3-Cover-Instrumental.mp3?rlkey=m6xumr88iu7cdkg6awxisznka', AirbitLink:"https://airbit.com/FalconXXL/validate-1" },
        { id: 22, title: 'Jenny V1', producer: 'FalconXXL', genre: 'Afrobeat', bpm: 121, audio: 'https://dl.dropboxusercontent.com/scl/fi/t8vho396dusfjgvhvovpe/12.-Jenny-V4-Instrumental.wav?rlkey=h52rfq9mzydehx3wygd40d40a&dl=1', AirbitLink:" " },
        { id: 23, title: 'Jenny V2', producer: 'FalconXXL', genre: 'Afrobeat', bpm: 121, audio: 'https://dl.dropboxusercontent.com/scl/fi/867rfgwiybb06mfrv2aas/11.-Jenny-v3-Instrumental.wav?rlkey=hrd5wibbrcc78q1jdtflyph9f&dl=1', AirbitLink:" " },
        { id: 24, title: 'Jenny V3', producer: 'FalconXXL', genre: 'Afrobeat', bpm: 121, audio: 'https://dl.dropboxusercontent.com/scl/fi/uhr3shy62xh4d4jwhb97k/06.-Jenny-2-Instrumental.wav?rlkey=xg0o4shpyz3mci62zr6uu5ogq&dl=1', AirbitLink:" " },
        { id: 25, title: 'Jenny V4', producer: 'FalconXXL', genre: 'Afrobeat', bpm: 121, audio: 'https://www.dropbox.com/scl/fi/d77w10quss2zkbdg8nges/09.-Jenny-Instrumental.wav?rlkey=h3bvcizmcbclvmb4uhfczzkqx&st=bkdmrhyt&dl=0', AirbitLink:" " },
    ],

    'Afrofusion': [
        { id: 34, title: 'Cherie Coco', producer: 'FalconXXL', genre: 'Afro-Fusion', bpm: 105, audio: 'https://dl.dropboxusercontent.com/scl/fi/3497eq93monp9rdzxvjqt/cherie-coco-2-Cover-Instrumental.mp3?rlkey=jhztnrt2uzpqh8lv277x9z3sb', AirbitLink:"" },
    ],

    'Amapiano / Afropiano': [

    ],

    'R&B (Contemporain)': [
        { id: 7, title: 'Baby Girl', producer: 'FalconXXL', genre: 'R&B', bpm: 92, audio: 'https://dl.dropboxusercontent.com/scl/fi/l0qz87gt2z76sfdtntbih/05.-Fly-Babygirl-Cover-Instrumental.mp3?rlkey=y4g8e07lcclqnu6hlogaqdz2s', AirbitLink:"https://airbit.com/FalconXXL/baby-girl" },
        { id: 8, title: 'Hold me', producer: 'FalconXXL', genre: 'R&B', bpm: 141, audio: 'https://dl.dropboxusercontent.com/scl/fi/l85qqi2as7ii7ma706zww/Urban-Vision-beat-2-Cover-2.mp3?rlkey=v8s34r7jz61waya80wg7nsy6m', AirbitLink:"https://airbit.com/FalconXXL/hold-me" },
        { id: 9, title: 'Hold me (Version 2)', producer: 'FalconXXL', genre: 'R&B', bpm: 141, audio: 'https://dl.dropboxusercontent.com/scl/fi/m8mja64m8tty86nf8mrv8/Urban-Vision-beat-2-Cover-3.mp3?rlkey=6u4bpxiszbrmcnspgcthkov27', AirbitLink:"" },
        { id: 10, title: 'Temptation', producer: 'FalconXXL', genre: 'R&B', bpm: 92, audio: 'https://dl.dropboxusercontent.com/scl/fi/62u49mwlff5l7qx7v4eoi/Temptation-Instrumental.mp3?rlkey=i56gc0nlz9br206f97n2pseu4', AirbitLink:"" },
        { id: 11, title: 'Caught up (Version 2)', producer: 'FalconXXL', genre: 'R&B', bpm: 92, audio: 'https://dl.dropboxusercontent.com/scl/fi/1681ab55k8n5zomh9lvp6/SENECA-DE-DON-Caught-Up-Feat.-ILUNGA-Cover-Instrumental-2.mp3?rlkey=5bacl9kv9u86e35g85z1rhag0', AirbitLink:"" },
    ],

    'R&B (Trap)': [
        { id: 1, title: 'Tant De Peine V1', producer: 'FalconXXL', genre: 'R&B', bpm: 165, audio: 'https://dl.dropboxusercontent.com/scl/fi/mye89tcmw5j001zrpb3q1/01-ILUNGA-Tant-De-peines-Ti-de-2-Instrumental.wav?rlkey=smlx7d0wntctrp41l1n3o5r3w&dl=1', AirbitLink:"" },
        { id: 2, title: 'Tant De Peine V2', producer: 'FalconXXL', genre: 'R&B', bpm: 165, audio: 'https://dl.dropboxusercontent.com/scl/fi/va0zfecbo2aegvf353r31/01-ILUNGA-Tant-De-peines-Ti-de-3-Instrumental.wav?rlkey=8cn1yk7inh4gyw2vs882myhfi&dl=1', AirbitLink:"" },
        { id: 3, title: 'Tant De Peine V3', producer: 'FalconXXL', genre: 'R&B', bpm: 165, audio: 'https://dl.dropboxusercontent.com/scl/fi/vsce08fnkhhc5ke11cig5/01-ILUNGA-Tant-De-peines-Ti-de-best-Instrumental.wav?rlkey=czempaadz68y2s34e14cbtba3&dl=1', AirbitLink:"" },
    ],

    'R&B (Uptempo)': [
    ],

    'Slow Jam (R&B)':
        [ {id: 12, title: 'Velvet Glow (Beat)', producer: 'FalconXXL', genre: 'R&B Slow', bpm: 79,
            audio: 'https://dl.dropboxusercontent.com/scl/fi/2n7pkw3z6g3xcnyi6fo08/1.-Velvet-Glow-Instrumental.mp3?rlkey=eiqcwhs38f8wb02p1acpt4hss',
            AirbitLink:"https://airbit.com/FalconXXL/velvet-glow"},
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
        { id: 13, title: 'Midnight Replay', producer: 'FalconXXL', genre: 'Soul', bpm: 92, audio: 'https://dl.dropboxusercontent.com/scl/fi/hp7f7sky2ihwx900ot8l6/Midnight-Replay-Instrumental.mp3?rlkey=mhr3zbdiwz0hmul7eu27jm7dr', AirbitLink:"https://airbit.com/FalconXXL/midnight-replay" },
    ],

    'Zouk': [
        { id: 22, title: 'Nonverbal Communication', producer: 'FalconXXL', genre: 'Zouk', bpm: 95, audio: 'https://dl.dropboxusercontent.com/scl/fi/4so8aljytpyqymwzplxb7/15.-CNV-Beat.mp3?rlkey=o3qj8teed9yo7djiiwj2dpzbl', AirbitLink:"https://airbit.com/FalconXXL/nonverbal-communication" },
        { id: 23, title: 'Amour sous les étoiles V2', producer: 'FalconXXL', genre: 'Zouk', bpm: 95, audio: 'https://dl.dropboxusercontent.com/scl/fi/b8n4p7ey2dp1ch1ta5saz/Amour-Sous-Les-toiles-Instrumental.mp3?rlkey=npl5i2n904kpctpbyflbxm10z', AirbitLink:"" },
        { id: 24, title: 'Amour sous les étoiles', producer: 'FalconXXL', genre: 'Zouk', bpm: 95, audio: 'https://dl.dropboxusercontent.com/scl/fi/zx0g0zk08ytwaeepv32eg/Amour-Sous-Les-toiles-3-Instrumental.mp3?rlkey=zo5itjogghsnqlcxyx41zd143', AirbitLink:"https://airbit.com/FalconXXL/amour-sous-les-etoiles" },
        { id: 25, title: 'Nuit sans fin', producer: 'FalconXXL', genre: 'Zouk', bpm: 95, audio: 'https://dl.dropboxusercontent.com/scl/fi/tggot3lauvvv10dm9eev9/Nuit-Sans-Fin-Instrumental.mp3?rlkey=6d5h7eh8ufmzk8jc7lsxumube', AirbitLink:"https://airbit.com/FalconXXL/nuit-sans-fin" },
        { id: 26, title: 'Nuit sans fin 2', producer: 'FalconXXL', genre: 'Zouk', bpm: 95, audio: 'https://dl.dropboxusercontent.com/scl/fi/dj1sv5o6q4h4wh3ngnz4w/Nuit-Sans-Fin-2-Instrumental.mp3?rlkey=biqzp4w750z2pcbrgaykwmafj', AirbitLink:"" },
        { id: 27, title: 'Sur ta peau', producer: 'FalconXXL', genre: 'Zouk', bpm: 95, audio: 'https://dl.dropboxusercontent.com/scl/fi/dy48tqlkwxq4yo9rnnpge/Nuit-Sur-Ta-Peau-Instrumental.mp3?rlkey=t21r1awqbso5clh69egmbxqsm', AirbitLink:"" },
        { id: 28, title: 'On emménage à 2 V2', producer: 'FalconXXL', genre: 'Zouk', bpm: 95, audio: 'https://dl.dropboxusercontent.com/scl/fi/mwkf8pb958bho0fo3cvpr/On-emm-nage-demain-Version-1.mp3?rlkey=blksau2w8itg8l3qhalkh7gby', AirbitLink:"" },
        { id: 29, title: 'On emménage', producer: 'FalconXXL', genre: 'Zouk', bpm: 95, audio: 'https://dl.dropboxusercontent.com/scl/fi/1yrlu62zqq0541fkk8vwt/On-emm-nage-demain-Version-2-Instrumental.mp3?rlkey=yayl8bf9e7oz30pl1835beme1', AirbitLink:"https://airbit.com/FalconXXL/on-emmenage" },
        { id: 30, title: 'Sous la lune', producer: 'FalconXXL', genre: 'Zouk', bpm: 95, audio: 'https://dl.dropboxusercontent.com/scl/fi/78nj2qcqczx03ydkze68t/Sous-la-Lune-Instrumental.mp3?rlkey=yp62wva8u80r9nv131l1e4ss7', AirbitLink:"" },
        { id: 31, title: 'Sous les étoiles', producer: 'FalconXXL', genre: 'Zouk', bpm: 95, audio: 'https://dl.dropboxusercontent.com/scl/fi/ddiuwsrmh7wbkx9j28loi/Sous-Les-toiles-Instrumental.mp3?rlkey=t76dft2s2lko8cn1h14j8stc3', AirbitLink:"" },
        { id: 32, title: 'Far Away V1', producer: 'FalconXXL', genre: 'Kizomba', bpm: 90, audio: 'https://dl.dropboxusercontent.com/scl/fi/fru9c9dqqhjiuycsscbe8/far-away-beat-v1.mp3?rlkey=5dmebh9t6xjf8h2z6ae0zz3iv&raw=1', AirbitLink:"" },
    ],
    'Kizomba': [
        { id: 32, title: 'Juste une dance', producer: 'FalconXXL', genre: 'Kizomba', bpm: 80, audio: 'https://dl.dropboxusercontent.com/scl/fi/nsnlb60inclricbip9788/Juste-Une-Danse.mp3?rlkey=8v08ku2bamb000k78nd0oji32', AirbitLink:"https://airbit.com/FalconXXL/juste-une-danse" },
        { id: 33, title: 'Far Away V1', producer: 'FalconXXL', genre: 'Kizomba', bpm: 90, audio: 'https://dl.dropboxusercontent.com/scl/fi/fru9c9dqqhjiuycsscbe8/far-away-beat-v1.mp3?rlkey=5dmebh9t6xjf8h2z6ae0zz3iv&raw=1', AirbitLink:"" },
    ],

    'Reggaeton': [
        { id: 37, title: 'World is on fire 1', producer: 'FalconXXL', genre: 'Reggaeton', bpm: 104, audio: 'https://dl.dropboxusercontent.com/scl/fi/11j1167dpzeeie7jm52oj/World-is-on-fire-2-Instrumental.mp3?rlkey=8ln4seb18bmjflaysx0exg4xh', AirbitLink:"" },
        { id: 38, title: 'Dirty', producer: 'FalconXXL', genre: 'Reggaeton', bpm: 103, audio: 'https://dl.dropboxusercontent.com/scl/fi/2lgop0sg6pm3gcndch88k/Dirty-Instrumental.mp3?rlkey=7zowo3fhywi2znf2j8vs0owld',AirbitLink:"https://airbit.com/FalconXXL/dirty"  },
        { id: 39, title: 'World war I', producer: 'FalconXXL', genre: 'Reggaeton', bpm: 104, audio: 'https://dl.dropboxusercontent.com/scl/fi/9nosiru9gcolvimdf6i5a/World-is-on-fire-1-Instrumental.mp3?rlkey=aabo5sf6xxtifmtm3zgtua0ut', AirbitLink:"https://airbit.com/FalconXXL/world-war-i" },
        { id: 40, title: 'Morena Vibra', producer: 'FalconXXL', genre: 'Reggaeton', bpm: 105, audio: 'https://dl.dropboxusercontent.com/scl/fi/c8bwozsqvfhw6mks6k4zj/Morena-Vibra.mp3?rlkey=gan13ru4w8ofx6abvx4niyn1e', AirbitLink:"" },

        { id: 41, title: 'World war II', producer: 'FalconXXL', genre: 'Reggaeton', bpm: 105, audio: 'https://dl.dropboxusercontent.com/scl/fi/tvo7990r91b2crmo2u9x7/World-is-on-fire-3-Instrumental.mp3?rlkey=vhk2sncj4ghpd2vp1kiwa4yyc', AirbitLink:"https://airbit.com/FalconXXL/world-war-ii" },
        { id: 42, title: 'Raw', producer: 'FalconXXL', genre: 'Reggaeton', bpm: 104, audio: 'https://dl.dropboxusercontent.com/scl/fi/eeu5dn982alr79wmrk6cl/World-is-on-fire-4-Instrumental.mp3?rlkey=lb4bljqq86g1zue0yjtugx7fx', AirbitLink:"https://airbit.com/FalconXXL/raw" },
    ],

    'Dancehall': [
        { id: 36, title: 'Tropical Dance', producer: 'FalconXXL', genre: 'Dancehall', bpm: 100, audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', AirbitLink:"" },
    ],

    'Orchestral / Acoustic': [
        { id: 43, title: 'One more chance', producer: 'FalconXXL', genre: 'Orchestral', bpm: 114, audio: 'https://dl.dropboxusercontent.com/scl/fi/h0xfw4wj4l5qckcf9yod5/One-More-Chance-Piano-String.mp3?rlkey=j89yt31mtmudps0ogj1ehh1qf', AirbitLink:"" },
    ],

    'EDM': [
        { id: 53, title: 'Beat the feeling 1', producer: 'FalconXXL', genre: 'Electro', bpm: 120, audio: 'https://dl.dropboxusercontent.com/scl/fi/ft4muwv9rygx4qb2aqvxb/Beat-The-Feeling-Version-1-Female-vocals-Instrumental.mp3?rlkey=c7kn9k6n7kdoiyn5zjtau7m63', AirbitLink:"" },
        { id: 54, title: 'Beat the feeling 2', producer: 'FalconXXL', genre: 'Dance', bpm: 120, audio: 'https://dl.dropboxusercontent.com/scl/fi/gnm94tdtk9o08b97jz6iu/Beat-the-feeling-4-Instrumental.mp3?rlkey=i84tvnhbrhvpi4eqiqrw7e6g5', AirbitLink:"" },
        { id: 55, title: 'Beat the feeling 3', producer: 'FalconXXL', genre: 'Dance', bpm: 120, audio: 'https://dl.dropboxusercontent.com/scl/fi/hc748tsyhevd0rpr3z39u/Groove-Machine-Remix-Edition-Instrumental.mp3?rlkey=xbdvo7rcffgw95efko9sitl3d', AirbitLink:"" },
        { id: 56, title: 'Groove machine', producer: 'FalconXXL', genre: 'Electro', bpm: 120, audio: 'https://dl.dropboxusercontent.com/scl/fi/hc748tsyhevd0rpr3z39u/Groove-Machine-Remix-Edition-Instrumental.mp3?rlkey=xbdvo7rcffgw95efko9sitl3d', AirbitLink:"" },
        { id: 57, title: 'Groove machine 2', producer: 'FalconXXL', genre: 'Electro', bpm: 120, audio: 'https://dl.dropboxusercontent.com/scl/fi/umszce0p0aqxcdozkv2qx/Groove-Machine-2-Remix-Edition-Instrumental.mp3?rlkey=e301q7wxa09h02v35vt7yqxt3', AirbitLink:"" },
    ],

    'Gospel': [
        { id: 59, title: 'Urban Gospel', producer: 'FalconXXL', genre: 'Gospel', bpm: 82, audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3', AirbitLink:"" },
        { id: 60, title: 'Modern Worship', producer: 'FalconXXL', genre: 'Gospel', bpm: 78, audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3', AirbitLink:"" },
    ],

    'World Music': [
        { id: 1, title: 'Classic', producer: 'FalconXXL', genre: 'Gospel', bpm: 82, audio: 'https://dl.dropboxusercontent.com/scl/fi/eco62d5fc5ylev6s9648h/Classic-Beat.mp3?rlkey=w6nlsl9106f122mid0vca5lv2', AirbitLink:"" },
        { id: 2, title: 'I m Sorry', producer: 'FalconXXL', genre: 'R&B', bpm: 165, audio: 'https://dl.dropboxusercontent.com/scl/fi/seqi5h3m0uciac1pe3uss/01-ILUNGA-Tant-De-peines-Ti-de-2-Cover-Instrumental.wav?rlkey=cxmelmcnfox7md0uhw8nb38fk&dl=1', AirbitLink:" " },
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

function Beat() {
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
        return `https://instagram.com/falconbeat2.0`;
    };

    const handleBuyClick = (beat) => {
        if (!beat.AirbitLink || beat.AirbitLink === "") {
            setModalMessage(`This beat "${beat.title}" is not yet available on Airbeats (PayPal purchase platform). Feel free to contact us on WhatsApp for alternative purchase options.`);
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
                <title>Falcon Beats – Professional Beats for Artists | FalconXXL</title>
                <meta name="description" content="Falcon Beats is the platform dedicated to artists looking for professional, high-quality beats. Listen, choose and purchase instrumentals from Hip-Hop, R&B, Afrobeats, Zouk and more — accessible worldwide at an affordable price." />
                <link rel="canonical" href="https://www.falconbeat.nl/" />
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
                            to="/" style={{color: "#f3bb2f"}}
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
                        {/*<NavLink*/}
                        {/*    to="/About"*/}
                        {/*    className={({isActive}) => isActive ? "navbar-link active" : "navbar-link"}*/}
                        {/*>*/}
                        {/*    About*/}
                        {/*</NavLink>*/}
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

                        <a
                            href="https://www.falconxxl.com"
                            target="_blank"
                            rel="noopener noreferrer"
                           className="navbar-link active"
                        >
                            FalconXXL
                        </a>
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
                    <p className="filter-subtitle">Select your beat genre</p>

                    <div className="genre-filters">
                        {genres.map((genre) => {
                            const displayName = genre === 'All' ? 'All Beats' : genre;
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
                            {selectedGenre === 'All' ? 'All artist beats' : `${selectedGenre} Beats`}
                        </h2>
                        <p className="section-subtitle">
                            {currentBeats.length} beat{currentBeats.length !== 1 ? 's' : ''} available
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

                                    {/* ✅ TÂCHE 1 : Bouton Price déplacé ici (à la place du genre) avec le style du genre tag */}
                                    <button
                                        className="beat-price-tag"
                                        onClick={handleOpenModal}
                                    >
                                        Prices
                                    </button>

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

export default Beat;