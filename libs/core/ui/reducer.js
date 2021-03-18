/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit'

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    filterIsOpen: false,
    menuIsOpen: false,
  },
  reducers: {
    openFilter: (state) => {
      state.filterIsOpen = true
    },
    closeFilter: (state) => {
      state.filterIsOpen = false
    },
    toggleFilter: (state) => {
      state.filterIsOpen = !state.filterIsOpen
    },
    openMenu: (state) => {
      state.menuIsOpen = true
    },
    closeMenu: (state) => {
      state.menuIsOpen = false
    },
    toggleMenu: (state) => {
      state.menuIsOpen = !state.menuIsOpen
    },
  },
})

export const selectFilterIsOpen = (state) => state.ui.filterIsOpen
export const selectMenuIsOpen = (state) => state.ui.menuIsOpen

export const {
  openFilter,
  closeFilter,
  toggleFilter,
  openMenu,
  closeMenu,
  toggleMenu,
} = uiSlice.actions

export default uiSlice.reducer
