function onMessageReceive(){
    return $.reply({
      text :  {
        body : "\n مربا بكم في مطعم المرسى  \n Welcome to Al Marsa Restaurant \nالرجاء اختيار اللغة   \nPlease select language:"
       },
       options : {
         buttons : ["Urdu","English"]
       }
    }).listen({
      text : "Urdu",
      handler : hindiHandler  
    },{
      text : "English",
      handler : englishHandler 
    },otherHandle); // If answer is none of the above, this is default handler
  }
  function hindiHandler() {
    $.reply({
      body : "Hi, I am good how are you?"
    });
  }
  function englishHandler() {
    $.reply({
      text :  {
        body : "Our Servies. \n Please Select the required service:"
       },
      options : {
         buttons : ["New Order","Edit Order", "Reservation", "Order Follow Up", "Our Location", "Working Hours", "Help"]
       }
      
    }).listen({
      text : "New Order",
      handler : neworderhandler  //If answer is "Good"
    },
    {
      text : "Edit Order",
      handler : connecttoagenthandler //If answer is "Bad"
    },
    {
      text : "Reservation",
      handler: reservationhandler
    },
    {
      text : "Order Follow Up",
      handler : connecttoagenthandler
    },
    {
      text : "Our Location",
      handler : ourlocationhandler
    },{
      text : "Working Hours",
      handler : workinghourshandler
    },{
      text : "Help",
      handler : connecttoagenthandler
    });
  }
  function otherHandle(){
    return $.reply({
      text :  {
        body : ` ${inbound.getText()} is a invalid input.`  // Read Customer input
       }
    });
  }
  
  
  function reservationhandler(){
  
    return $.reply({
      text :  {
        body : "Reservaion \n\nYou can honor us by making a personal reservation \nTo return the main menu,  please send * \nTo speak with a customer service representative, please send # \n \nClick on below URL \nhttps://www.arabirestaurant.com"// Read Customer input
       }
       
    }).listen({
      text : "*",
      handler : englishHandler //If answer is "Good"
    },
    {
      text : "#",
      handler : connecttoagenthandler
    },otherHandle);
  }
  
  function neworderhandler(){
    return $.reply({
      text :  {
        body : "New order \n \nTo return the main menu,  please send * \nTo speak with a customer service representative, please send # \n \nClick on below URL \nhttps://www.arabirestaurant.com"// Read Customer input
       }
       
    }).listen({
      text : "*",
      handler : englishHandler //If answer is "Good"
    },
    {
      text : "#",
      handler : connecttoagenthandler
    },otherHandle);
  }
  
  function connecttoagenthandler(){
    $.reply({
      text :  {
        body : "Thank you, Customer service will contact you as soon as possible."// Read Customer input
       }
       
    });
    $.route.to.team("intern");
    
  }
  
  function ourlocationhandler()
  {
    return $.reply({
      text :  {
        body : "Our Location \n \nTo return the main menu,  please send * \nTo speak with a customer service representative, please send # \n \nBneid Al-Gar \nhttps://goo.gl/maps/ZRfY8EsdbvZ4Yv957 \n \nSalmiya \nhttps://goo.gl/maps/V9FoP9fKqh7KP5Xm9 \n \nSabah Al-Salem \nhttps://goo.gl/maps/Hb1TRh8cyzXz1PYz7 \n \nMahboula \nhttps://goo.gl/maps/z2GTAKQQpYZF4CCdA \n \nShamiya \nhttps://goo.gl/maps/nUK2Q1JQRb4ChmFq9 \n \nJahra-Sulaiyel Mall \nhttps://goo.gl/maps/6ReSvUUDaeYSfdnT8"  // Read Customer input
       }
    }).listen({
      text : "*",
      handler : englishHandler //If answer is "Good"
    },
    {
      text : "#",
      handler : connecttoagenthandler
    },otherHandle);
  }
  
  
  function workinghourshandler()
  {
    $.reply({
    template: {
      code: "aamal_workinghours",
      lang: "en_US"
    }
    }).listen({
      text : "*",
      handler : englishHandler //If answer is "Good"
    },
    {
      text : "#",
      handler : connecttoagenthandler
    },otherHandle);
  }
  
  // function workinghourshandler()
  // {
  //   return $.reply(
  //     {
  //       "channelId": "aamal_ourlocation",
     
  //   "type": "template",
  //   "template": {
  //     "data": {
  //       "amount": 10,
  //       "currency": "INR"
  //     },
  //     "id": "60d236c6142e53561cb7716c"
  //   }
  
        
        
  //     // template :  {
  //     // code : "aamal_workinghours", // code of the template is mentioned where we can call the global variable value
  //     // data: {
  //     //   deliverytemp : delivery
  //     // }
  //     // }
  //   }).listen({
  //     text : "*",
  //     handler : englishHandler 
  //   },
  //   {
  //     text : "#",
  //     handler : connecttoagenthandler
  //   },otherHandle);
  // }
    
    // return $.reply({
    //   text :  {
    //     body : "Working Hours \n8 AM - 12:00 AM \n \nTo return the main menu,  please send * \nTo speak with a customer service representative, please send #"  // Read Customer input
    //   }
    // }).listen({
    //   text : "*",
    //   handler : englishHandler //If answer is "Good"
    // },
    // {
    //   text : "#",
    //   handler : connecttoagenthandler
    // },otherHandle);
  