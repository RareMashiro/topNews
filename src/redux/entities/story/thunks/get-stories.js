import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectStoryIds } from "..";

export const getStories = createAsyncThunk(
    "story/getStories",
    async () => {
        const response = await fetch('https://hacker-news.firebaseio.com/v0/newstories.json');
        return await response.json();
    },
    { condition: (_, {getState}) => !selectStoryIds(getState())?.length }
)