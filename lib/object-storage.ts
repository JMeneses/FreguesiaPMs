import { Client } from '@replit/object-storage';

const client = new Client();

export const objectStorage = {
    async uploadFile(file: File, filename: string): Promise<string> {
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        const result = await client.uploadFromBytes(`public/${filename}`, buffer);

        if (!result.ok) {
            throw new Error(`Failed to upload file: ${result.error.message}`);
        }

        return filename;
    },

    async getFile(filename: string): Promise<Buffer | null> {
        try {
            const result = await client.downloadAsBytes(`public/${filename}`);
            if (!result.ok) {
                return null;
            }
            return result.value[0];
        } catch {
            return null;
        }
    },

    async deleteFile(filename: string): Promise<boolean> {
        try {
            const result = await client.delete(`public/${filename}`);
            return result.ok;
        } catch {
            return false;
        }
    },

    async exists(filename: string): Promise<boolean> {
        try {
            const result = await client.exists(`public/${filename}`);
            if (!result.ok) return false;
            return result.value;
        } catch {
            return false;
        }
    }
};
