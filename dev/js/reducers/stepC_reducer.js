export default function(state= [
    {key:"",index:0},
    {key:"",index:1},
    {key:"",index:2}
   ],
action){

console.log("executin C reducer")
console.log(state)
if(action.type == 'STEPC_ACTION') {
console.log(action)
return action.payload;

}
else
{
   return state;
}
}
