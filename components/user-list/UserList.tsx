'use client';

import { Users, ChevronRight, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useSceneStore } from '@/lib/store/scene-store';

export function UserList() {
  const { users, showUserList, toggleUserList } = useSceneStore();

  // Simply show all users from the store
  const activeUsers = users;

  return (
    <>
      {/* Toggle Button */}
      <div className="absolute top-20 right-4 z-10">
        <Button
          variant="outline"
          size="icon"
          onClick={toggleUserList}
          className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all"
        >
          {showUserList ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
        </Button>
      </div>

      {/* User List Panel */}
      {showUserList && (
        <div className="absolute top-32 right-4 z-10 w-64">
          <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl p-4">
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                <h3 className="font-semibold text-gray-900 dark:text-white">Active Users</h3>
              </div>
              <Badge variant="secondary" className="text-xs">
                {activeUsers.length}
              </Badge>
            </div>

            {/* User List */}
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {activeUsers.length === 0 ? (
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center py-4">
                  No other users online
                </p>
              ) : (
                activeUsers.map((user) => (
                  <div
                    key={user.userId}
                    className="flex items-center gap-3 p-2 rounded-lg bg-gray-50 dark:bg-gray-800/50"
                  >
                    {/* User Avatar */}
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-semibold"
                      style={{ backgroundColor: user.color }}
                    >
                      {user.name.charAt(0).toUpperCase()}
                    </div>

                    {/* User Info */}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                        {user.name}
                      </p>
                      {user.selectedObjectId && (
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Editing object
                        </p>
                      )}
                    </div>

                    {/* Status Indicator */}
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                  </div>
                ))
              )}
            </div>

            {/* Footer Info */}
            <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Share the room URL to invite others
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
