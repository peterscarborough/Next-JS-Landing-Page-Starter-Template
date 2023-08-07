import Link from 'next/link';

const H = () => (
  <h1 className="title">Read <Link href="/posts/first-post">this page!</Link></h1>
);
export { H };
