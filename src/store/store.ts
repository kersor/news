import { configureStore } from "@reduxjs/toolkit";
import { postNews } from "./api/post.api";

export const store = configureStore({
    reducer: {
        [postNews.reducerPath]: postNews.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(postNews.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch