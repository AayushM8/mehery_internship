function onMessageReceive(){
    return $.reply({
      text :  {
        body : " Welcome to Dr. Batra Labs \n    \n "
       },
       options : {
         buttons : ["Book Appointment", "Contact Us" , "Treatments"]
       }
    }).listen({
      text : "Book Appointment",
      handler : gendershandler 
    },{
      text: "Contact Us",
      handler: contactushandler
    }
    ,{
      text :"Treatments",
      handler : treatmenthandler
    }
    // ,{
    //   text : "Cancel Appointment",
    //   handler : cancelappointmenthandler
    // }
    ,otherHandle);
  }
  
  function treatmenthandler(){
    return $.reply({
      text :  {
        body : "Can you please tell us your health concern?"// Read Customer input
       },
       options:{
         buttons :["Hair Loss","Hair Thinning" , "Hair patches loss", "Severe Dandruff", "Acne" , "Eczema", "Thryoid", "PCOS","Psoriasos", "Vitiligo","Low imunity", "Other"]
       }
       
    }).listen({
        text: "Other",
        handler: gendershandler
        
      },genderhandler);
  }
  
  function gendershandler(){
    return $.reply({
      text :  {
        body : `Please enter your gender and you can book appointment with our specialized doctors and consult with them`
       }
       ,
       options:{
         buttons:["Male", "Female", "Other"]
       }
    }).listen({
      text:"hi",
      handler: bookappointmenthandler
    },agehandler);
  
  }
  
  function genderhandler(){
     return $.reply({
      text :  {
        body : `We have excellent specialized doctors and guaranteed treatement for ${inbound.getText()}. \n \nPlease enter your gender and you can book appointment with our specialized doctors and consult with them`
       }
       ,
       options:{
         buttons:["Male", "Female", "Other"]
       }
    }).listen({
      text:"hi",
      handler: bookappointmenthandler
    },agehandler);
  }
  
  function agehandler(){
    return $.reply({
      text :  {
        body : `How old are you?`
       }
       ,
       options:{
         buttons:["Below 18", "18 - 25", "25 - 40", "40 - 60", "60 +"]
       }
    }).listen({
      text:"hi",
      handler: bookappointmenthandler
    },bookappointmenthandler);
  }
  
  function contactushandler(){
    $.reply({
      text :  {
        body : "Thank you, Customer service will contact you as soon as possible. \n \n Our contact details are \n +917045777400 \n https://www.drbatras.com/ "// Read Customer input
       }
       
    });
    $.route.to.team("intern");
  }
  
  function bookappointmenthandler(){
  
    return $.reply({
      text :  {
        body : "Book Appointment \n\n Please enter the date you wish to enter in the format of dd-mm-yyyy  \n \nClick on below URL to visit out website \nhttps://www.drbatras.com/"// Read Customer input
       }
       
    }).listen({
        text: "Book Appointment",
        handler: bookappointmenthandler
        
      },timeslothandler);
  }
  
  function timeslothandler(){
    return $.reply({
      text : {
        body : "Choose from the timings below for your given date"
      },
      options : {
        buttons : ["11 AM - 12 PM" ,"3 PM - 4 PM", "6 PM - 7 PM"]
      }
    }).listen({
      text: "book",
      handler : bookappointmenthandler
    }
      
      ,thankhandler);
  }
  
  function thankhandler(){
    return $.reply({
      text: {
        body: "Thank you for joining us. Your Appointment has been booked. \n \n You can book another appointment if you wish to "
        
      },
      options : {
        buttons: ["Book Appointment" , "Close the Session" , "Contact Us"]
      }
    }).listen({
      text: "Book Appointment",
      handler: gendershandler
    },{
      text : "Close the Session",
      handler : closesessionhandler
    },{
      text : "Contact Us",
      handler: contactushandler
      },otherHandle);
  }
  
  function closesessionhandler(){
    return $.reply({
    text : {
      body: "Your session will be closed soon"
    }
    
    });
  }
  
  function otherHandle(){
    return $.reply({
      text :  {
        body : ` ${inbound.getText()} is a invalid input.`
       }
       
    });
    
  }
  
  
  