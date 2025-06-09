import { Project } from '@/lib/model/Project';
import { createProject } from '@/lib/schema/ProjectSchema';
import { revalidatePath, revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';
import { ZodError } from 'zod';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    console.dir(body);

    const bodyWithMetadata = {
      ...body,
      createdBy: 'system',
      dateCreated: new Date(),
      timestamp: new Date(),
      isActive: true,
    };

    const validateSku = createProject.parse(bodyWithMetadata);
    console.log('validateSku', validateSku);

    if (!validateSku) {
      return NextResponse.json({ error: 'Invalid Project' }, { status: 400 });
    }
    const result = await Project.create(validateSku);

    // Force revalidation of all project-related paths
    revalidatePath('/projects', 'layout');
    revalidatePath('/projects', 'page');
    revalidatePath('/projects/create', 'page');
    revalidateTag('projects');

    // Add cache-control headers to prevent caching
    const response = NextResponse.json(result, { status: 201 });
    response.headers.set(
      'Cache-Control',
      'no-cache, no-store, must-revalidate'
    );
    response.headers.set('Pragma', 'no-cache');
    response.headers.set('Expires', '0');

    return response;
  } catch (error) {
    console.log(error);

    // Handle Zod validation errors
    if (error instanceof ZodError) {
      return NextResponse.json(
        { error: error.errors.map((err) => err.message).join(', ') },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Something went wrong...' },
      { status: 500 }
    );
  }
};

export { POST };
