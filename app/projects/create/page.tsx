'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  createProject,
  CreateProjectSchema,
  initialValues,
} from '@/lib/schema/ProjectSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const ProjectCreatePage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const form = useForm({
    mode: 'onChange',
    defaultValues: initialValues,
    resolver: zodResolver(createProject),
  });
  const onSubmit = async (data: CreateProjectSchema) => {
    setLoading(true);
    try {
      const response = await fetch('/projects/api/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.log(errorData);
        throw errorData;
      }
      await response.json();
      form.reset();
      router.refresh();
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className='p-8'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
          <FormField
            control={form.control}
            name='title'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder='Enter Name' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className={'md:max-w-min'} disabled={loading} type={'submit'}>
            {!loading ? (
              'Create Project'
            ) : (
              <>
                {'Please Wait'}
                <Loader2 className={'ml-2 animate-spin'} />
              </>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ProjectCreatePage;
