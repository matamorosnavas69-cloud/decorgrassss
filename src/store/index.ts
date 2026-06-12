import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    // Simple store without API slice since we're using WhatsApp only
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
