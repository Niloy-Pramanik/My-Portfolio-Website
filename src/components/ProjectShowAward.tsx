'use client';

import { Award } from 'lucide-react';

export const ProjectShowAward = () => {
  return (
    <div className="flex items-center gap-3 p-4 bg-white dark:from-yellow-900/20 dark:to-orange-900/20 rounded-lg border border-yellow-200 dark:border-yellow-700">
      <Award className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
      <div>
        <h4 className="font-semibold text-yellow-900 dark:text-yellow-200">Award</h4>
        <p className="text-sm text-yellow-700 dark:text-yellow-300">Recognition for excellence</p>
      </div>
    </div>
  );
};
