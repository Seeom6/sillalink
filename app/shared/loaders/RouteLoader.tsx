'use client';

import { useRouteLoading } from '@/app/hooks/useRouteLoading';

export const RouteLoader = () => {
  const isLoading = useRouteLoading();

  if (!isLoading) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-purple-600 animate-pulse z-50" />
  );
};
