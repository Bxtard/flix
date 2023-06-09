import Image from 'next/image';
import Input from '@/components/Input';
const Auth = () => {
  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className='h-full w-full bg-cover bg-black bg-opacity-50'>
        <nav className='px-12 py-5'>
          <Image height={100} width={100} src='/images/logo.png' alt='logo' />
        </nav>
        <div className='flex justify-center'>
          <div className='bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg: max-w-md rounded-md w- full'>
            <h2 className='text-white text-4xl mb-8 font-semibold'>Sign in</h2>
            <div className='flex flex-col gap-4'>
              <Input
                id='email'
                label='email'
                onChange={() => {}}
                type='email'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
