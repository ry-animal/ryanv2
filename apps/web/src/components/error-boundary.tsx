"use client";

import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";
import { type ErrorInfo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, RefreshCw } from "lucide-react";

interface ErrorFallbackProps {
    error: Error;
    resetErrorBoundary: () => void;
}

function ErrorFallback({ error, resetErrorBoundary }: ErrorFallbackProps) {
    return (
        <div className="min-h-[400px] flex items-center justify-center p-4">
            <Card className="w-full max-w-md">
                <CardHeader className="text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10">
                        <AlertTriangle className="h-6 w-6 text-destructive" />
                    </div>
                    <CardTitle>Something went wrong</CardTitle>
                    <CardDescription>
                        We're sorry for the inconvenience. Please try refreshing the page.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {process.env.NODE_ENV === "development" && (
                        <details className="rounded border p-2 text-sm">
                            <summary className="cursor-pointer font-medium">
                                Error Details (Development)
                            </summary>
                            <pre className="mt-2 whitespace-pre-wrap text-xs">
                                {error.message}
                            </pre>
                        </details>
                    )}
                    <Button
                        onClick={resetErrorBoundary}
                        className="w-full"
                        variant="outline"
                    >
                        <RefreshCw className="mr-2 h-4 w-4" />
                        Try Again
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}

interface ErrorBoundaryProps {
    children: React.ReactNode;
    fallback?: React.ComponentType<ErrorFallbackProps>;
    onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

export function ErrorBoundary({
    children,
    fallback: Fallback = ErrorFallback,
    onError,
}: ErrorBoundaryProps) {
    return (
        <ReactErrorBoundary
            FallbackComponent={Fallback}
            onError={onError}
            onReset={() => window.location.reload()}
        >
            {children}
        </ReactErrorBoundary>
    );
} 