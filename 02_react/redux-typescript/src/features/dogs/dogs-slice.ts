import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const DOG_API_KEY = '5dd2a436-1325-45c3-9a6c-a30726233e77'


interface Breed {
    id: string,
    name: string
    image: {
        url: string
    }
}


// fetchBaseQuery: A wrapper in RTK (similar to Axios and Fetch Wrapper)
export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.thedogapi.com/v1',
        prepareHeaders(headers) {
            headers.set('x-api-key', DOG_API_KEY)
            return headers
        }
    }),
    endpoints(builder) {
        return {
            fetchBreeds: builder.query<Breed, number | void>({
                query(limit = 10) {
                    return `/breeds?limit=${limit}`
                }
            })
        }
    }
})

// Automagical hook `useFetchBreedQuery`!
export const { useFetchBreedsQuery } = apiSlice