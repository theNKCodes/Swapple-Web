import Image from 'next/image';
import MenuIcon from '@/assets/menu.svg';
import Logo from '@/assets/SWAPPLE.png';

export const Header = () => {
  return (
    <header className='sticky top-0 backdrop-blur-sm'>
      <div className='py-5'>
        <div className='container'>
          <div className='flex items-center justify-between'>
            <Image src={Logo} alt='Swapple Logo' height={40} width={40}></Image>
            <MenuIcon className='h-5 w-5 md:hidden' />
            <nav className='hidden md:flex gap-6 text-black/60 items-center'>
              <a href='#'>Home</a>
              <a href='#'>Swapple-Intern</a>
              <a href='#'>About Us</a>
              <button className='bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight'>Our Business</button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
