export let API_URL = 'http://192.168.18.34:3000';
export let SECRET_TOKEN = '';

export let PRODUCT = {
   "_id":{
      "$oid":"630f748fe644c342050f59d4"
   },
   "product_key":"WALLET_INSURANCE",
   "url":"http://192.168.18.34:8080/home",
   "price": 100,
   "product_name":"Seguro carteira",
   "position":{
      "$numberInt":"2"
   },
   "cashback_price": 5000.0,
   "product_description":"Conheça o Seguro Carteira Digital PicPay, um jeito simples de você proteger sua grana e seu PicPay Card.",
   "header":{
      "title":"Mais tranquilidade para você em qualquer lugar",
      "background_image":"",
      "image":"https://5ce0-2804-5f0c-11ef-800-fdb8-2330-f412-e49e.ngrok.io/assets/img/headerbg.PNG"
   },
   "protections":[
      {
         "image":"../../assets/img/picpay1.PNG",
         "title":"Fizeram compras no seu PicPay Card após roubarem ou você perder seu cartão."
      },
      {
         "image":"../../assets/img/picpay2.PNG",
         "title":"Alguém te obrigar a fazer Pix, recarga ou outras transações."
      },
      {
         "image":"../../assets/img/picpay3.PNG",
         "title":"Fizerem transações na sua conta PicPay após roubarem seu celular."
      },
      /*{
         "image":"https://8362-2804-5f0c-11ef-800-7087-4acb-6b71-3040.ngrok.io/assets/img/picpay4.PNG",
         "title":"Roubarem seu dinheiro logo após você fazer um saque."
      }*/
   ]
};

export let PAYLOAD = {
   "generic": {
     "additional_data": {
       "quote_token": "es7m1oh9wpd5lftb2jx6",
       "quote_code": "80553590"
     },
     "coverage_code": 1,
     "covered_items": {
       "account_id": true,
       "assistance": false,
       "other_cards_ids": []
     },
     "quotation_id": "80553590",
     "amount": 4.9,
   }
 };

