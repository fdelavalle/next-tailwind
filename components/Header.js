import Image from 'next/image';
import HeaderItem from './HeaderItem';
import {
  BadgeCheckIcon,
  CollectionIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
  HomeIcon,
} from '@heroicons/react/outline';

function Header() {
  return (
    <header className='flex flex-col sm:flex-row m-5 justify-between'>
      <div className='flex flex-grow  pt-2 justify-evenly max-w-2xl '>
        <HeaderItem className='bg-blue-500' title='HOME' Icon={HomeIcon} />
        <HeaderItem title='TRENDING' Icon={LightningBoltIcon} />
        <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon} />
        <HeaderItem title='COLLECTIONS' Icon={CollectionIcon} />
        <HeaderItem title='SEARCH' Icon={SearchIcon} />
        <HeaderItem title='ACCOUNT' Icon={UserIcon} />
      </div>
      <Image
        className='object-contain cursor-pointer'
        alt=''
        src='https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg'
        width='80'
        height='40'
      />
    </header>
  );
}

export default Header;
