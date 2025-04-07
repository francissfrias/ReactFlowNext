import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default async function Home() {
  return (
    <main className='h-screen w-full flex justify-center items-center'>
      <div className='flex flex-col gap-4'>
        <Button asChild>
          <Link href='/projects/create'>Create Project</Link>
        </Button>
        <Button asChild>
          <Link href='/projects'>View Projects</Link>
        </Button>
      </div>
    </main>
  );
}
