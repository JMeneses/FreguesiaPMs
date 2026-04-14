import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
    req: NextRequest,
    props: { params: Promise<{ path: string[] }> }
) {
    const params = await props.params;
    const filename = params.path.join('/');

    const record = await prisma.fileStorage.findUnique({
        where: { filename },
        select: { data: true, contentType: true },
    });

    if (!record) {
        return new NextResponse('File not found', { status: 404 });
    }

    return new NextResponse(new Uint8Array(record.data as Buffer), {
        headers: {
            'Content-Type': record.contentType,
            'Cache-Control': 'public, max-age=31536000, immutable',
        },
    });
}
