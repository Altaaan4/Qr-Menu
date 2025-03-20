const fetchMenu= async () => {
    //Api'a istek at
  const res = await fetch('../db.json');
  
  const data = await res.json();
  return data.menu;
};
export default fetchMenu;