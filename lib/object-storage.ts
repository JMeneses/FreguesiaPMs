import { prisma } from '@/lib/prisma';

export const objectStorage = {
    async uploadFile(file: File, filename: string): Promise<string> {
        const arrayBuffer = await file.arrayBuffer();
        const data = Buffer.from(arrayBuffer);
        const contentType = file.type || 'application/octet-stream';

        await prisma.fileStorage.upsert({
            where: { filename },
            update: { data, contentType },
            create: { filename, data, contentType },
        });

        return filename;
    },

    async getFile(filename: string): Promise<Buffer | null> {
        const record = await prisma.fileStorage.findUnique({
            where: { filename },
            select: { data: true },
        });
        if (!record) return null;
        return record.data as Buffer;
    },

    async deleteFile(filename: string): Promise<boolean> {
        try {
            await prisma.fileStorage.delete({ where: { filename } });
            return true;
        } catch {
            return false;
        }
    },

    async exists(filename: string): Promise<boolean> {
        const count = await prisma.fileStorage.count({ where: { filename } });
        return count > 0;
    }
};
