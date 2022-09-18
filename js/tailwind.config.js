tailwind.config = {
    theme: {
      extend: {
        colors: {
          clifford: '#da373d',
          'red': '#F40404',
          'ash':'#6C6C6C',
          blacklight:'rgb(0, 0, 0,.6)',
          lightwhite:'rgb(255, 255, 255,.5)',
          
        },
        maxWidth: {
          container:'1140px',

        },
        fontFamily: {
          'pop':'Poppins', 
      },
        backgroundImage:{
          banner:"url('images/banner.webp')",
          about:"url('images/about.webp')",
          'serviceimgone':"url('images/serviceimg-one.png')",
          'serviceimgtwo':"url('images/serviceimg-two.png')",
          'serviceimgthree':"url('images/serviceimg-three.png')",
        }
      }
    }
  }