import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const api = createApi(
    {
        reducerPath: 'api', 
        baseQuery: fetchBaseQuery({baseUrl: "https://hacker-news.firebaseio.com/v0/"}),
        endpoints: (builder) => ({
            getNewStoryIds: builder.query({
                query: () => ({
                    url: "newstories.json",
                })
            }),
            getNewStoryById: builder.query({
                query: (id) => ({
                    url: `item/${id}.json`
                })
            })
        })
    }
);

export const { useGetNewStoryIdsQuery, useGetNewStoryByIdQuery } = api