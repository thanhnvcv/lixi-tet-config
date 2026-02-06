<script>
/* ===== SYSTEM CONFIG (FIX CỨNG) ===== */
const SYSTEM_CONFIG = {
  name: "Hệ thống mặc định",
  amounts: {
    kid: ["20,000 VNĐ", "50,000 VNĐ"],
    youth: ["50,000 VNĐ", "100,000 VNĐ"],
    adult: ["100,000 VNĐ", "200,000 VNĐ"]
  },
  messages: {
    kid: [
      "Chúc {name} hay ăn chóng lớn 🎈",
      "Chúc {name} luôn vui vẻ 🧸"
    ],
    youth: [
      "Tiền vô như nước 💰",
      "Năm mới bùng nổ năng lượng 🔥"
    ],
    adult: [
      "An khang thịnh vượng 🧧",
      "Gia đình bình an 🍀"
    ]
  }
};

/* ===== INIT STORAGE ===== */
function initConfigStore(){
  if(!localStorage.getItem("lixi_configs")){
    localStorage.setItem("lixi_configs", JSON.stringify({
      active: "system",
      list: { system: SYSTEM_CONFIG }
    }));
  }
}

/* ===== GET ACTIVE CONFIG ===== */
function getActiveConfig(){
  try{
    const store = JSON.parse(localStorage.getItem("lixi_configs"));
    if(store?.list?.[store.active]) return store.list[store.active];
  }catch{}
  return SYSTEM_CONFIG;
}

/* ===== SAVE NEW CONFIG ===== */
function saveConfig(id, config){
  const store = JSON.parse(localStorage.getItem("lixi_configs"));
  store.list[id] = config;
  store.active = id;
  localStorage.setItem("lixi_configs", JSON.stringify(store));
}

/* ===== SWITCH CONFIG ===== */
function setActiveConfig(id){
  const store = JSON.parse(localStorage.getItem("lixi_configs"));
  if(store.list[id]){
    store.active = id;
    localStorage.setItem("lixi_configs", JSON.stringify(store));
  }
}

/* ===== RESET USER (RELOAD / BACK SAFE) ===== */
function resetUser(){
  localStorage.removeItem("lixi_user");
}
</script>
