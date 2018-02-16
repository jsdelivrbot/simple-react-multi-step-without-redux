export default function(state= [
                                {key:"",index:0},
                                {key:"",index:1},
                                {key:"",index:2}
                               ],
                        action) {
    if(action.type == 'STEPA_ACTION') {
        console.log(action)
      return action.payload;
    
    }
    else
      {
              return state;
      }

    //   switch(action.type)
    //   {
    //       case 'STEPA_ACTION':
    //             return action.payload;
    //             break;
    //       case 'STEPB_ACTION':
    //             return action.payload;
    //             break;
    //       case 'STEPC_ACTION':
    //             return action.payload;
    //             break;
    //       default:
    //             return [
    //                 {key:"",index:0},
    //                 {key:"",index:1},
    //                 {key:"",index:2}
    //             ]

    //   }
        
}
