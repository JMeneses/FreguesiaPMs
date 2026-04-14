import fs from 'fs/promises';
import path from 'path';

const UPLOADS_DIR = path.join(process.cwd(), 'public', 'uploads');

async function ensureDir() {
    await fs.mkdir(UPLOADS_DIR, { recursive: true });
}

export const objectStorage = {
    async uploadFile(file: File, filename: string): Promise<string> {
        await ensureDir();
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        await fs.writeFile(path.join(UPLOADS_DIR, filename), buffer);
        return filename;
    },

    async getFile(filename: string): Promise<Buffer | null> {
        try {
            return await fs.readFile(path.join(UPLOADS_DIR, filename));
        } catch {
            return null;
        }
    },

    async deleteFile(filename: string): Promise<boolean> {
        try {
            await fs.unlink(path.join(UPLOADS_DIR, filename));
            return true;
        } catch {
            return false;
        }
    },

    async exists(filename: string): Promise<boolean> {
        try {
            await fs.access(path.join(UPLOADS_DIR, filename));
            return true;
        } catch {
            return false;
        }
    }
};
