import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_dfeg_list = createAsyncThunk(
  "dfegs/api_v1_dfeg_list",
  async payload => {
    const response = await apiService.api_v1_dfeg_list(payload)
    return response.data
  }
)
export const api_v1_dfeg_create = createAsyncThunk(
  "dfegs/api_v1_dfeg_create",
  async payload => {
    const response = await apiService.api_v1_dfeg_create(payload)
    return response.data
  }
)
export const api_v1_dfeg_retrieve = createAsyncThunk(
  "dfegs/api_v1_dfeg_retrieve",
  async payload => {
    const response = await apiService.api_v1_dfeg_retrieve(payload)
    return response.data
  }
)
export const api_v1_dfeg_update = createAsyncThunk(
  "dfegs/api_v1_dfeg_update",
  async payload => {
    const response = await apiService.api_v1_dfeg_update(payload)
    return response.data
  }
)
export const api_v1_dfeg_partial_update = createAsyncThunk(
  "dfegs/api_v1_dfeg_partial_update",
  async payload => {
    const response = await apiService.api_v1_dfeg_partial_update(payload)
    return response.data
  }
)
export const api_v1_dfeg_destroy = createAsyncThunk(
  "dfegs/api_v1_dfeg_destroy",
  async payload => {
    const response = await apiService.api_v1_dfeg_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const dfegsSlice = createSlice({
  name: "dfegs",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_dfeg_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_dfeg_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_dfeg_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_dfeg_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_dfeg_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_dfeg_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_dfeg_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_dfeg_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_dfeg_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_dfeg_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_dfeg_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_dfeg_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_dfeg_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_dfeg_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_dfeg_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_dfeg_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_dfeg_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_dfeg_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_dfeg_list,
  api_v1_dfeg_create,
  api_v1_dfeg_retrieve,
  api_v1_dfeg_update,
  api_v1_dfeg_partial_update,
  api_v1_dfeg_destroy,
  slice: dfegsSlice
}
