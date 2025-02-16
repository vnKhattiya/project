const Products = [
  {
    Name: "Lays",
    Price: 32,
    Description:
      "Lays STAX เลย์ สแตคส์ Mid Canister ขนมมันฝรั่งอบกรอบที่มาพร้อมกับความกรุบกรอบและรสชาติที่เข้มข้น เหมาะสำหรับทุกช่วงเวลาของการพักผ่อนและการแบ่งปันกับเพื่อนๆ",
    image:
      "https://media.allonline.7eleven.co.th/pdmain/669960-01-allonline-sm.jpg",
  },
  {
    Name: "Wink White Fiber Jelly",
    Price: 20,
    Description:
      "เจลลี่ไฟเบอร์ 4 สูตร ช่วยขับถ่าย ลดอาการท้องผูก พร้อมส่วนผสมจากธรรมชาติที่ช่วยในการย่อยอาหาร เหมาะสำหรับคนที่ใส่ใจสุขภาพในทุกมื้ออาหาร",
    image:
      "https://image.makewebcdn.com/makeweb/m_1920x0/tRb5oCGT0/DefaultData/COVER_JA.png",
  },
  {
    Name: "Oishi Green Tea",
    Price: 45,
    Description:
      "โออิชิ กรีนที ชาข้าวญี่ปุ่น ขนาด 500 มล. ที่ให้รสชาติชาหอมกรุ่นและกลิ่นข้าวญี่ปุ่นสดใหม่ เติมความสดชื่นและช่วยให้รู้สึกผ่อนคลายตลอดวัน",
    image:
      "https://3auntiesthaimarket.com/cdn/shop/products/ScreenShot2022-02-28at16.32.10_530x@2x.png?v=1646084127",
  },
  {
    Name: "Milo UHT",
    Price: 25,
    Description:
      "ไมโล ยูเอชที รสช็อกโกแลต 180 มล. เครื่องดื่มช็อกโกแลตที่ให้พลังงานสูง อุดมไปด้วยวิตามินและแร่ธาตุ เหมาะสำหรับเติมพลังในทุกช่วงของวัน",
    image:
      "https://image.makewebcdn.com/makeweb/m_1920x0/ABTbZXpZi/DefaultData/%E0%B9%84%E0%B8%A1%E0%B9%82%E0%B8%A5.jpg",
  },
  {
    Name: "Nestle Pure Life",
    Price: 18,
    Description:
      "น้ำดื่มเนสท์เล่ เพียวไลฟ์ 600 มล. น้ำดื่มบริสุทธิ์ที่ผ่านการกรองอย่างพิถีพิถัน เหมาะสำหรับการดื่มในทุกโอกาส เพื่อเติมความสดชื่นให้ร่างกายตลอดทั้งวัน",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL1tgmEYpHTAfI3sOTdedytLVoFEITgPH-GQ&s",
  },
  {
    Name: "Mama Instant Noodles",
    Price: 12,
    Description:
      "มาม่า บะหมี่กึ่งสำเร็จรูปรสต้มยำกุ้ง 55 กรัม ที่มาพร้อมรสชาติอันจัดจ้านและเครื่องปรุงที่เข้มข้น เหมาะสำหรับมื้อเร่งด่วนที่อร่อยและง่ายดาย",
    image:
      "https://i.ebayimg.com/images/g/Q~AAAOSwaQhkrVxW/s-l1200.jpg",
  },
  {
    Name: "Pepsi",
    Price: 40,
    Description:
      "เป๊ปซี่ น้ำอัดลมรสโคล่า ขนาด 1.5 ลิตร ให้ความซ่าสดชื่นแบบคลาสสิก เติมพลังและเพิ่มความสนุกในทุกมื้ออาหาร",
    image:
      "https://st.bigc-cs.com/cdn-cgi/image/format=webp,quality=85/public/media/catalog/product/77/88/8858998571277/8858998571277_1-20240927093814-.jpg",
  },
  {
    Name: "Dutch Mill Yogurt",
    Price: 35,
    Description:
      "โยเกิร์ตพร้อมดื่มดัชมิลล์ 400 มล. รสชาติหวานอมเปรี้ยว อุดมด้วยจุลินทรีย์ที่ดีต่อระบบทางเดินอาหาร ให้คุณสุขภาพดีทุกวัน",
    image:
      "https://aeoncambodia.sgp1.digitaloceanspaces.com/image/catalog/product/8851717020087-b.jpg",
  },
  {
    Name: "Wall's Magnum Almond",
    Price: 50,
    Description:
      "ไอศกรีมวอลล์ แม็กนั่ม อัลมอนด์ ไอศกรีมพรีเมียมเคลือบช็อกโกแลตหนาและโรยอัลมอนด์ชิ้นโต เหมาะสำหรับการเติมเต็มความสุขในวันพักผ่อน",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqk80jHp6vIki-JrbcvlmHhJg3bN80LvEGtQ&s",
  },
  {
    Name: "Meiji Fresh Milk",
    Price: 85,
    Description:
      "นมสดเมจิ รสจืด 2 ลิตร นมสดคุณภาพสูงจากฟาร์มโคนมที่ได้มาตรฐาน เหมาะสำหรับการดื่มตรงหรือใช้เป็นส่วนผสมในเมนูโปรดของคุณ",
    image:
      "https://st.bigc-cs.com/cdn-cgi/image/format=webp,quality=90/public/media/catalog/product/12/88/8850329102112/8850329102112_1.jpg",
  },
  {
    Name: "Ovaltine",
    Price: 75,
    Description:
      "โอวัลติน 3 in 1 ซองพร้อมชง 600 กรัม เครื่องดื่มช็อกโกแลตมอลต์ที่มอบพลังงานเต็มที่ อุดมไปด้วยวิตามินและแร่ธาตุที่ช่วยเพิ่มพลังงานให้ร่างกาย",
    image:
      "https://down-th.img.susercontent.com/file/th-11134207-7r98w-lurjj43jv32t0a",
  },
  {
    Name: "KitKat Chocolate",
    Price: 120,
    Description:
      "คิทแคท ช็อกโกแลตบาร์ 12 ชิ้น ขนมช็อกโกแลตที่มาพร้อมกับเวเฟอร์กรอบในทุกคำ เหมาะสำหรับการพักผ่อนและเติมพลังระหว่างวัน",
    image:
      "https://cdn8.devgodigit.net/wp-content/uploads/2021/09/30184746/011933224_P.jpg",
  },
  {
    Name: "Pringles Original",
    Price: 60,
    Description:
      "พริงเกิลส์ มันฝรั่งทอดกรอบ รสดั้งเดิม 107 กรัม ขนมขบเคี้ยวที่ให้รสชาติกรอบอร่อยและหอมมันในทุกคำ เหมาะสำหรับการแบ่งปันกับเพื่อนๆ",
    image:
      "https://sc04.alicdn.com/kf/U0a4b07b0f87e490e942e8ac10bd4c4bfL.jpg",
  },
  {
    Name: "Betagen Drink",
    Price: 99,
    Description:
      "เบต้ากลิน นมเปรี้ยว 2 ลิตร เครื่องดื่มที่อุดมด้วยจุลินทรีย์แลคโตบาซิลลัส ช่วยเสริมสร้างสุขภาพทางเดินอาหารและเพิ่มความสดชื่น",
    image:
      "https://www.shopping-d.com/cdn/shop/products/BetagenDrinkingYogurtAssortedFlavoured85ml_Packof6Bottle_18000.png?v=1636951595",
  },
  {
    Name: "Cocacola",
    Price: 45,
    Description:
      "โค้ก น้ำอัดลมรสโคล่า ขนาด 1.5 ลิตร น้ำอัดลมที่ครองใจคนทั่วโลกมานาน เหมาะสำหรับการเติมความสดชื่นในทุกโอกาส",
    image:
      "https://m.media-amazon.com/images/I/51v8nyxSOYL._SL1500_.jpg",
  },
  {
    Name: "Hershey's Chocolate Syrup",
    Price: 150,
    Description:
      "เฮอร์ชีส์ ช็อกโกแลตไซรัป 680 กรัม เหมาะสำหรับการเพิ่มรสชาติให้กับเครื่องดื่ม ไอศกรีม หรือขนมหวานที่คุณชื่นชอบ",
    image:
      "https://www.instacart.com/assets/domains/product-image/file/large_68c12bc8-9847-47df-8792-9555e81b83e4.jpg",
  },
  {
    Name: "Cremo Sandwich Biscuits",
    Price: 25,
    Description:
      "ครีโม่ แซนด์วิชบิสกิต รสช็อกโกแลต 144 กรัม ขนมบิสกิตเคลือบครีมที่ให้ความหวานมัน เหมาะสำหรับการพักผ่อนหรือพกพาในทุกโอกาส",
    image:
      "https://pictures.grocerapps.com/original/grocerapp-cremo-24-ticky-piece-5fc09bcb736de.jpeg",
  },
  {
    Name: "Lactasoy",
    Price: 30,
    Description:
      "แลคตาซอย นมถั่วเหลืองรสจืด ขนาด 300 มล. อุดมด้วยโปรตีนและสารอาหารที่เหมาะกับคนรักสุขภาพ",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8l0hacBBIvYlB4N3czp38zo0iMSFLxykVbw&s",
  },
  {
    Name: "Cheez-It Crackers",
    Price: 110,
    Description:
      "ชีสอิท แครกเกอร์อบกรอบ รสเชดดาร์ชีส 200 กรัม ขนมที่ให้รสชีสเต็มคำ เหมาะสำหรับทุกช่วงเวลาของวัน",
    image:
      "https://kellogg-h.assetsadobe.com/is/image/content/dam/kelloggs/kna/us/digital-shelf/cheez-it/00024100789436_C1L1.jpg",
  },
  {
    Name: "Lipton Ice Tea",
    Price: 140,
    Description:
      "ลิปตัน ไอซ์ที รสมะนาว ขนาด 1.25 ลิตร ชารสชาติกลมกล่อมและสดชื่น เติมพลังงานให้วันของคุณ",
    image:
      "https://assets.tops.co.th/LIPTON-LiptonIceTeaLemon245mlPack6-8858998575015-1",
  },
];

  
export default Products;