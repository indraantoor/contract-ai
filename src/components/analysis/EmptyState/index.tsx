import { useState } from 'react';

import { UploadModal } from '@/components/modals/UploadModal';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';

interface IEmptyStateProps {
  title: string;
  description: string;
}

export default function EmptyState({ title, description }: IEmptyStateProps) {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  return (
    <>
      <div className="mt-10 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              {title}
            </CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p>To recieive your analysis, you need to upload an PDF.</p>
              <div className="border-l-4 border-blue-500 bg-blue-50 p-4">
                <div className="flex items-center">
                  <p className="text-left text-sm text-blue-700">
                    <strong>Note:</strong>
                    <br />
                    You can upload your contract in PDF or DXS format.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex w-full flex-col space-y-2">
              <Button
                onClick={() => setIsUploadModalOpen(true)}
                className="w-full"
              >
                Upload for Full Analysis
              </Button>
              <Button className="w-full" asChild variant="outline">
                <Link href="/dashboard">Go to Dashboard</Link>
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
      <UploadModal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
        onUploadComplete={() => setIsUploadModalOpen(true)}
      />
    </>
  );
}
