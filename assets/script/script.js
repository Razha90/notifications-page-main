const { createApp, ref } = Vue;

createApp({
    setup() {
        let id = 0;
        const datas = ref([
            {
                id: id++,
                name: "Mark Weber",
                reaction: "reacted to your recent post",
                msg: "My First tournament today!",
                read: false,
                times: "1m ago",
                privateMsg:"",
                image:"./assets/images/avatar-mark-webber.webp",
                imageMsg:""
            },
            {
                id: id++,
                name: "Angela Gray",
                reaction: "followed you",
                msg: "",
                read: false,
                times: "5m ago",
                privateMsg:"",
                image:"./assets/images/avatar-angela-gray.webp",
                imageMsg:""
            },
            {
                id: id++,
                name: "Jacob Thompson",
                reaction: "has joined your group",
                msg: "Chess Club",
                read: false,
                times: "1 day ago",
                privateMsg:"",
                image:"./assets/images/avatar-jacob-thompson.webp",
                imageMsg:""
            },
            {
                id: id++,
                name: "Rizky Hasanuddin",
                reaction: "sent you a private message",
                msg: "",
                read: true,
                times: "5 days ago",
                privateMsg:"Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having alots of fun and improving my game.",
                image:"./assets/images/avatar-rizky-hasanuddin.webp",
                imageMsg:""
            },
            {
                id: id++,
                name: "Kimberly Smith",
                reaction: "commented on your picture",
                msg: "",
                read: true,
                times: "1 week ago",
                privateMsg:"",
                image:"./assets/images/avatar-kimberly-smith.webp",
                imageMsg:"/assets/images/image-chess.webp"
            },
            {
                id: id++,
                name: "Nathan Peterson",
                reaction: "reacted to your recent post",
                msg: "5 end-game strategies to increase your win rate",
                read: true,
                times: "2 week ago",
                privateMsg:"",
                image:"./assets/images/avatar-nathan-peterson.webp",
                imageMsg:""
            },
            {
                id: id++,
                name: "Anna Kim",
                reaction: "left the group",
                msg: "Chess Club",
                read: true,
                times: "2 week ago",
                privateMsg:"",
                image:"./assets/images/avatar-anna-kim.webp",
                imageMsg:""
            }
        ]);
        const notif = ref(countNotif());
        const changeNotif = (id) => {
            datas.value.map(e => {
              if (e.id == id) {
                e.read = true;
              }
            });
            notif.value = countNotif();
          };
        
          function countNotif() {
            return datas.value.filter(e => !e.read).length;
          }

          const allRead = () => {
            datas.value.map(e => {
                e.read = true;
            });
            notif.value = countNotif();
          };
        return {
            datas,
            notif,
            changeNotif,
            allRead
        }
    }
}).mount('#app')
