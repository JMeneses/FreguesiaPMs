import { NextRequest, NextResponse } from 'next/server';
import { objectStorage } from '@/lib/object-storage';

export async function GET(
    req: NextRequest,
    props: { params: Promise<{ path: string[] }> }
) {
    const params = await props.params;
    const path = params.path.join('/');

    const fileBuffer = await objectStorage.getFile(path);

    if (!fileBuffer) {
        return new NextResponse('File not found', { status: 404 });
    }

    // Determine content type based on extension
    const ext = path.split('.').pop()?.toLowerCase();
    let contentType = 'application/octet-stream';
    if (ext === 'png') contentType = 'image/png';
    if (ext === 'jpg' || ext === 'jpeg') contentType = 'image/jpeg';
    if (ext === 'gif') contentType = 'image/gif';
    if (ext === 'webp') contentType = 'image/webp';
    if (ext === 'pdf') contentType = 'application/pdf';
    if (ext === 'txt') contentType = 'text/plain';

    return new NextResponse(fileBuffer as any, {
        headers: {
            'Content-Type': contentType,
            'Cache-Control': 'public, max-age=31536000, immutable',
        },
    });
}
