import React from "react";

let store = {
	_state: {
		profileInformation:{
			postData: [
				{id: 1, name:"Taras", text: "Это мой первый пост", likescount: 200 },
				{id: 2, name:"Taras", text: "Это мой второй пост", likescount: 700 },
				{id: 3, name:"Taras", text: "это я запостил из индекс js, прокинув пропс через Route!!! ", likescount: 500 }
			],
			inputValue : ``
		},
	
		messagesInformation: {
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
			inputValue : ``			
		},
	
		sitebarInformation: {
			colleagueData: [
				{id: 1, name : "ivan", url : "https://i.gjcdn.net/data/fireside/posts/23/163/1491663/media/5f7-raxzkzk7.jpg"},
				{id: 2, name : "stas", url : "http://metierkudos.com/wp-content/uploads/2018/10/ocs1.jpg"},
				{id: 3, name : "дюша", url : "https://pristor.ru/wp-content/uploads/2019/09/%D0%A4%D0%BE%D1%82%D0%BE-%D0%B4%D0%BB%D1%8F-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B8-%D0%B2-%D0%BE%D0%B4%D0%BD%D0%BE%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%BD%D0%B8%D0%BA%D0%B0%D1%85-%D0%B4%D0%BB%D1%8F-%D0%BC%D1%83%D0%B6%D1%87%D0%B8%D0%BD007.jpg"},
				{id: 4, name : "метёдлкин", url : "https://whatsism.com/uploads/posts/2019-04/1556173275_prikolnye_kartinki_na_zastavku_telefona_2_18034955.jpg"},
				{id: 5, name : "злодей", url : "https://p7.hiclipart.com/preview/925/547/763/sticker-whatsapp-emoticon-kik-messenger-emoji-viber.jpg"},
				{id: 6, name : "птица говорун", url : "https://скачать-ватсап-бесплатно.рус/wp-content/uploads/2018/10/avatarka-dlya-vatsap-10.jpg"},
			]
		}
	},

	_reRenderDOM () {
		console.log(`1`);
	},

	dispatch(action) {
		if (action.type === "ADDPOST"){
			let newPost = {
				id:11,
				text: this._state.profileInformation.inputValue,
				likescount: 0
			}
			this._state.profileInformation.postData.push(newPost);
			this._state.profileInformation.inputValue = ``;			
			this._reRenderDOM(store._state);
		} else if (action.type === "INPUTPOST") {
					this._state.profileInformation.inputValue = action.postimput;
					this._reRenderDOM(store._state);	
				} else if(action.type === "ADDMESSAGE"){
							let newMessage = {
								id:5,
								text: this._state.messagesInformation.inputValue,
								likescount: 0
							}
							this._state.messagesInformation.messagesData.push(newMessage);
							this._state.messagesInformation.inputValue = ``;
							this._reRenderDOM(store._state);
							} else if(action.type === "MESSAGEINPUT") {
										this._state.messagesInformation.inputValue = action.messageimput;
										this._reRenderDOM(store._state);	
							        }
	},

	getState() {
		return this._state;
	},

	suscribe(observer) {
		store._reRenderDOM = observer;
	},

}




export default store;