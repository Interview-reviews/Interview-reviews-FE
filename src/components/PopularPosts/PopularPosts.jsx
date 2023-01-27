/** @jsxImportSource @emotion/react */
import PopularSquarePost from '../PopularSquarePost/PopularSquarePost';

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
    views: 1,
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
    hashtags: ['회사생활', '인간관계'],
    title: 'Antonette의 타이틀',
    body: 'Antonette의 글',
    views: 2,
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
    hashtags: ['직무', '미래'],
    title: 'Tom의 타이틀',
    body: 'Tom의 글',
    views: 3,
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
    hashtags: ['건강'],
    title: 'Simpson의 타이틀',
    body: 'Simpson의 글',
    views: 4,
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
    views: 5,
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
    hashtags: ['자소서', '스펙'],
    title: 'Poter의 타이틀',
    body: 'Poter의 글',
    views: 6,
  },
];

export default function PopularPosts() {
  return (
    <div
      css={{
        position: 'absolute',
        // absoulte를 사용한 센터 중앙
        left: '50%',
        transform: 'translateX(-50%)',

        alignItems: 'center',
        justifyContent: 'space-around',

        display: 'flex',

        width: '70em',
        height: '18em',
        top: '20em',
        // border: '1px solid black',
      }}>
      {/* 고차함수 사용 with MockUp Data */}
      {datas.slice(0, 4).map(({ id, img, username, hashtags, title, views }) => (
        <PopularSquarePost key={id} img={img} username={username} hashtags={hashtags} title={title} views={views} />
      ))}
    </div>
  );
}