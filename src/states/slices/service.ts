import { PayloadAction, createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit";
import { ServiceDataType, getDetailService, getListServices } from "api/service";
import { PageType, PaginationType } from "contains/type";
import { RootState } from "states";

export type Filter = Pick<
    ServiceDataType,
    "id" | "name" | "categories" | "price" | "duration" | "saleOff" | "is_online"
> & {
    page?: PageType;
}

interface ServiceState {
    status: "loading" | "success" | "error" | "idle";
    filter: Filter;
    pagination: PaginationType;
    results: ServiceDataType[],
    service?: ServiceDataType;
}

const initialState: ServiceState = {
    status: "idle",
    filter: {
        id: "",
        name: "",
        categories: [],
        price: 0,
        duration: 0,
        saleOff: "",
        is_online: false,
        page: {
            page: 0,
            take: 8,
            sort: "asc",
            sort_by: "id",
        },
    },
    pagination: {
        itemCount: 0,
        pageCount: 0,
        hasPreviousPage: false,
        hasNextPage: false,
    },
    results: [],
    service: undefined,
}
export const fetchService = createAsyncThunk("service/fetchService",
    async (
        _: void,
        thunkApi,
    ) => {
        const state = thunkApi.getState() as RootState;
        const filter = state.service.filter;

        const response = await getListServices({ filter });
        return response;
    });
export const fetchServiceById = createAsyncThunk("service/fetchServiceById",getDetailService);
export const serviceSlice = createSlice({
    name: "service",
    initialState,
    reducers: {
        setFilter(state, action: PayloadAction<Filter>) {
            state.filter = action.payload;
        },
        clearFilter(state) {
            state.filter = initialState.filter;
        },
    },
    extraReducers: (builder) =>
        builder
            .addCase(fetchService.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchService.fulfilled, (state, action) => {
                state.status = "success";
                state.results = action.payload.data;
                state.pagination = action.payload.meta;
            })
            .addCase(fetchService.rejected, (state) => {
                state.status = "error";
            })
            .addCase(fetchServiceById.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchServiceById.fulfilled, (state, action) => {
                state.status = "success";
                state.service = action.payload.data;
            })
            .addCase(fetchServiceById.rejected, (state) => {
                state.status = "error";
            }),
});
export const selectService = (state: RootState) => state.service;
export const selectServiceResults = createSelector(
    selectService,
    (service) => service.results,
);
export const selectServiceStatus = createSelector(
    selectService,
    (service) => service.status,
);
export const selectServicePagination = createSelector(
    selectService,
    (service) => service.pagination,
);
export const selectServiceFilter = createSelector(
    selectService,
    (service) => service.filter,
);
export const selectServiceDetail = createSelector(
    selectService,
    (service) => service.service,
);
export default serviceSlice.reducer;
export const { setFilter, clearFilter } = serviceSlice.actions;