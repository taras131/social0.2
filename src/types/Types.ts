export type PostDataType = {
    id: number
    text: string
    likescount: number
}
export type PhotosType = {
    small: string | null
    large: string | null
}
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string
    contacts: {
        github: string | null
        vk: string | null
        facebook: string | null
        instagram: string | null
        twitter: string | null
        website: string | null
        youtube: string | null
        mainLink: string | null
    },
    photos: PhotosType
}

export type PersonsType = {
    name: string
    id: number
    photos: PhotosType
    status: string | null
    followed: boolean
    uniqueUrlName: null
}

export type DialogsType = {
    id: number
    name: string
    url: string
}
export type MessagesType ={
    id: number
    text: string
}