import { api } from './index'

export const customersApi = api.injectEndpoints({
    endpoints: (build) => ({
        getCustomers: build.query({
            query: (params) => ({
                url: '/get/customers',
                params
            }),
            providesTags: ["Customers"]
        }),
        getCustomersById: build.query({
            query: (id) => ({
                url: `/customer/${id}`
            }),
            invalidatesTags: ["Customers"]
        }),
        createCustomers: build.mutation({
            query: (body) => ({
                url: "/create/customer",
                method: "POST",
                body
            }),
            invalidatesTags: ["Customers"]
        }),
        updateCustomers: build.mutation({
            query: ({ id, body }) => ({
                url: `/update/customer/${id}`,
                method: "PUT",
                body
            }),
            invalidatesTags: ["Customers"]
        })
    }),
})

export const { useGetCustomersByIdQuery, useGetCustomersQuery, useCreateCustomersMutation, useUpdateCustomersMutation } = customersApi