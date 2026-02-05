import { Client } from '@replit/object-storage';

const client = new Client();

export const objectStorage = {
    async uploadFile(file: File, filename: string): Promise<string> {
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        const result = await client.uploadFromBytes(filename, buffer);

        if (!result.ok) {
            throw new Error(`Failed to upload file: ${JSON.stringify(result.error)}`);
        }

        return filename;
    },

    async getFile(filename: string): Promise<Buffer | null> {
        const result = await client.downloadAsBytes(filename);

        if (!result.ok) {
            return null;
        }

        return result.value[0];
    },

    async deleteFile(filename: string) {
        const result = await client.delete(filename);
        return result.ok;
    },

    async exists(filename: string): Promise<boolean> {
        const result = await client.exists(filename);
        return result.ok && result.value;
    }
};
