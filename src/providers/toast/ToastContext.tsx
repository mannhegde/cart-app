import React, { createContext, useCallback, useContext, useState } from 'react';
import Toast from '@/providers/toast/Toast';

type ToastData = {
  message: string;
  duration?: number;
  marginBottom?: number;
};

type ToastContextType = {
  showToast: (data: ToastData) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within ToastProvider');
  return ctx;
};

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [toast, setToast] = useState<Pick<
    ToastData,
    'message' | 'marginBottom'
  > | null>(null);

  const showToast = useCallback(
    ({ message, marginBottom, duration = 3000 }: ToastData) => {
      setToast({ message, marginBottom });
      setTimeout(() => setToast(null), duration);
    },
    [],
  );

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast && (
        <Toast
          message={toast.message}
          variant={"dark"}
          marginBottom={toast.marginBottom}
        />
      )}
    </ToastContext.Provider>
  );
};
