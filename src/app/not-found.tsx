import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-[400px] text-center p-6">
        <CardContent>
          <AlertCircle className="mx-auto text-red-500" size={40} />

          <h1 className="text-2xl font-bold mt-4">404 Page Not Found</h1>

          <p className="mt-4 text-sm text-gray-600">
            The page you are looking for doesn’t exist.
          </p>

          <Link
            href="/"
            className="inline-block mt-6 text-primary hover:underline"
          >
            Go back home
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
