import { createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit";
import { ServiceScheduleDataType, getScheduleService } from "api/service";
import { RootState } from "states";


interface ScheduleState {
    status: "loading" | "success" | "error" | "idle";
    results: ServiceScheduleDataType[];
}

const initialState: ScheduleState = {
    status: "idle",
    results: [],
}

export const fetchServiceSchedule = createAsyncThunk("service/fetchServiceSchedule",
    async (payload: { id: string | number; date: string }) => {
        const { id, date } = payload;
        const response = await getScheduleService(id, { date });
        return response;
    }
);

export const scheduleSlice = createSlice({
    name: "schedule",
    initialState,
    reducers: {},
    extraReducers: (builder) =>
        builder
            .addCase(fetchServiceSchedule.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchServiceSchedule.fulfilled, (state, action) => {
                state.status = "success";
                state.results = action.payload.data;
            })
            .addCase(fetchServiceSchedule.rejected, (state) => {
                state.status = "error";
            }),
});
export const selectSchedule = (state: RootState) => state.schedule;
export const selectScheduleResults = createSelector(
    selectSchedule,
    (schedule) => schedule.results,
);
export default scheduleSlice.reducer;
