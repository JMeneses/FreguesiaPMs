import { Storage } from '@google-cloud/storage';

const REPLIT_SIDECAR_ENDPOINT = "http://127.0.0.1:1106";

const storage = new Storage({
    credentials: {
        audience: "replit",
        subject_token_type: "access_token",
        token_url: `${REPLIT_SIDECAR_ENDPOINT}/token`,
        type: "external_account",
        credential_source: {
            url: `${REPLIT_SIDECAR_ENDPOINT}/credential`,
            format: {
                type: "json",
                subject_token_field_name: "access_token",
            },
        },
        universe_domain: "googleapis.com",
    },
    projectId: "",
});

function getBucketName(): string {
    const bucketId = process.env.DEFAULT_OBJECT_STORAGE_BUCKET_ID;
    if (!bucketId) {
        throw new Error('DEFAULT_OBJECT_STORAGE_BUCKET_ID environment variable is not set');
    }
    return bucketId;
}

export const objectStorage = {
    async uploadFile(file: File, filename: string): Promise<string> {
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        const bucket = storage.bucket(getBucketName());
        const blob = bucket.file(`public/${filename}`);

        await blob.save(buffer, {
            contentType: file.type || 'application/octet-stream',
        });

        return filename;
    },

    async getFile(filename: string): Promise<Buffer | null> {
        try {
            const bucket = storage.bucket(getBucketName());
            const blob = bucket.file(`public/${filename}`);

            const [exists] = await blob.exists();
            if (!exists) {
                return null;
            }

            const [contents] = await blob.download();
            return contents;
        } catch {
            return null;
        }
    },

    async deleteFile(filename: string): Promise<boolean> {
        try {
            const bucket = storage.bucket(getBucketName());
            const blob = bucket.file(`public/${filename}`);
            await blob.delete();
            return true;
        } catch {
            return false;
        }
    },

    async exists(filename: string): Promise<boolean> {
        try {
            const bucket = storage.bucket(getBucketName());
            const blob = bucket.file(`public/${filename}`);
            const [exists] = await blob.exists();
            return exists;
        } catch {
            return false;
        }
    }
};
