const ADDMESSAGE = "ADDMESSAGE",
    DELETEMESSAGE = "DELETEMESSAGE",
    ADDNEWDIALOG = "ADDNEWDIALOG",
    DELETEDIALOG = "DELETEDIALOG";
let initialState = {
    dialogsData: [
        {id: 1, name : "ivan", url : "https://i.gjcdn.net/data/fireside/posts/23/163/1491663/media/5f7-raxzkzk7.jpg"},
        {id: 2, name : "stas", url : "http://metierkudos.com/wp-content/uploads/2018/10/ocs1.jpg"},
        {id: 3, name : "дюша", url : "https://pristor.ru/wp-content/uploads/2019/09/%D0%A4%D0%BE%D1%82%D0%BE-%D0%B4%D0%BB%D1%8F-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B8-%D0%B2-%D0%BE%D0%B4%D0%BD%D0%BE%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%BD%D0%B8%D0%BA%D0%B0%D1%85-%D0%B4%D0%BB%D1%8F-%D0%BC%D1%83%D0%B6%D1%87%D0%B8%D0%BD007.jpg"},
        {id: 4, name : "метёдлкин", url : "https://whatsism.com/uploads/posts/2019-04/1556173275_prikolnye_kartinki_na_zastavku_telefona_2_18034955.jpg"},
        {id: 5, name : "злодей", url : "https://p7.hiclipart.com/preview/925/547/763/sticker-whatsapp-emoticon-kik-messenger-emoji-viber.jpg"},
        {id: 6, name : "птица говорун", url : "https://скачать-ватсап-бесплатно.рус/wp-content/uploads/2018/10/avatarka-dlya-vatsap-10.jpg"},
    ],
      messagesData: [
        {id: 1, text: "привет", likescount: 47},
        {id: 2, text: "пока", likescount: 147},
        {id: 3, text: "не звони сюда больше", likescount: 470},
        {id: 4, text: "я скучаю", likescount: 7},
        {id: 5, text: "ты негодяй!", likescount: 4}
    ],
};

const messagesReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADDMESSAGE:
            return {...state,messagesData: [...state.messagesData, {id: (state.messagesData.length+1),
                    text: action.text, likescount: 0}] };
        case DELETEMESSAGE:
            return {...state,messagesData: state.messagesData.filter((item)=>item.id !== action.id)};
        case ADDNEWDIALOG:
            return {...state,dialogsData: [...state.dialogsData, {id: (state.dialogsData.length+1),
                    name: action.name, url: action.url}]};
        case DELETEDIALOG:
            return {...state,dialogsData: state.dialogsData.filter((item)=>item.id !== action.id)};
        default:
            return state;
    }
}
export const sendNewMessage = (text) => {
    return {type: ADDMESSAGE,text};
}
export const deleteMessage = (id) => {
    return {type: DELETEMESSAGE,id};
}
export const addNewDialog = (name,url) => {
    return {type: ADDNEWDIALOG,name,url};
}
export const deleteDialog = (id) => {
    return {type: DELETEDIALOG,id};
}
export default messagesReducer;