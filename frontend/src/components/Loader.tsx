// components/Loader.tsx
'use client';
import React from 'react';
import { Loader2 } from 'lucide-react';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-64">
      <Loader2 className="w-10 h-10 text-gray-500 animate-spin" />
      <span className="ml-2 text-lg text-gray-700">Loading weather...</span>
    </div>
  );
};

export default Loader;
