export function setAppLevelStateForA(data)
{
    console.log("a is here");
  return(
  {

    type:'STEPA_ACTION',
    payload:data
  });
}

export function setAppLevelStateForB(data)
{
    console.log("b is here");
  return(
  {

    type:'STEPB_ACTION',
    payload:data
  });
}

export function setAppLevelStateForC(data)
{
    console.log("c is here");
  return(
  {

    type:'STEPC_ACTION',
    payload:data
  });
}
