import {atom} from 'recoil'

export const searchInputState = atom({
    key:'searchInputState',
    default:''
})

export const startDateState = atom({
    key:'startDateState',
    default: new Date()
})

export const endDateState = atom({
    key:'endDateState',
    default: new Date()
})

export const numOfGuestsState = atom({
    key:"numOfGuestsState",
    default: 1
})

export const hotelState = atom({
    key:'hotelState',
    default:null
})

export const currentPageState = atom({
    key:'currentPageState',
    default: 1
})

export const loationIdState = atom({
    key:'loationIdState',
    default:null
})

export const isLoadingState = atom({
    key:'isLoadingState',
    default:false
})