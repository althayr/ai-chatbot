import { S3Client } from '@aws-sdk/client-s3';

export const minioClient = new S3Client({
  region: 'us-east-1', // This doesn't matter for MinIO but is required
  endpoint: 'http://localhost:9000',
  forcePathStyle: true, // Required for MinIO
  credentials: {
    accessKeyId: 'minio',
    secretAccessKey: 'minio123',
  },
});

export const MINIO_BUCKET_NAME = 'uploads';
