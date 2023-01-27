/** @jsxImportSource @emotion/react */

import CommunityPost from '../CommunityPost/CommunityPost';

const datas = [
  {
    id: 1,
    name: 'hanpy',
    username: 'King',
    career: '경력',
    date: '2022.08.12',
    email: 'hanpy@gmail.com',
    company: {
      name: 'Romaguera-Crona',
    },
    likes: 1,
    comments: 1,
    hashtags: ['연봉', '신입', '궁금증'],
    title: 'hanpy의 타이틀',
    body: 'hanpy의 글',
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    career: '신입',
    date: '2022.08.12',
    email: 'hanpy@gmail.com',
    company: {
      name: 'Romaguera-Crona',
    },
    likes: 2,
    comments: 2,
    hashtags: ['연봉', '신입', '궁금증'],
    title: 'Antonette의 타이틀',
    body: 'Antonette의 글',
  },
  {
    id: 3,
    name: 'Ervin Howell',
    username: 'Tom',
    career: '경력',
    date: '2022.08.12',
    email: 'hanpy@gmail.com',
    company: {
      name: 'Romaguera-Crona',
    },
    likes: 3,
    comments: 3,
    hashtags: ['연봉', '신입', '궁금증'],
    title: 'Tom의 타이틀',
    body: 'Tom의 글',
  },
  {
    id: 4,
    name: 'Ervin Howell',
    username: 'Simpson',
    career: '신입',
    date: '2022.08.12',
    email: 'hanpy@gmail.com',
    company: {
      name: 'Romaguera-Crona',
    },
    likes: 4,
    comments: 4,
    hashtags: ['연봉', '신입', '궁금증'],
    title: 'Simpson의 타이틀',
    body: 'Simpson의 글',
  },
  {
    id: 5,
    name: 'Ervin Howell',
    username: 'Anne',
    career: '신입',
    date: '2022.08.12',
    email: 'hanpy@gmail.com',
    company: {
      name: 'Romaguera-Crona',
    },
    likes: 5,
    comments: 5,
    hashtags: ['연봉', '신입', '궁금증'],
    title: 'Anne의 타이틀',
    body: 'Anne의 글',
  },
  {
    id: 6,
    name: 'Ervin Howell',
    username: 'Poter',
    career: '경력',
    date: '2022.08.12',
    email: 'hanpy@gmail.com',
    company: {
      name: 'Romaguera-Crona',
    },
    likes: 6,
    comments: 6,
    hashtags: ['연봉', '신입', '궁금증'],
    title: 'Poter의 타이틀',
    body: 'Poter의 글',
  },
];

export default function CommunityPosts() {
  return (
    <div
      css={{
        position: 'absolute',

        left: '50%',
        transform: 'translateX(-50%)',
        top: '45em',

        display: 'grid',

        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '0.5em',
        placeItems: 'center',

        width: '70em',
        height: '45em',
        // border: '1px solid black',
      }}>
      {datas.map(data => (
        <CommunityPost key={data.id} {...data} />
      ))}
    </div>
  );
}
