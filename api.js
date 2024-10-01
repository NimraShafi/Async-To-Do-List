function apifatch() {
return fetch('https://dummyjson.com/todos')
.then(res =>{
   if (!res.ok){
      throw new Error('Network response was not ok')
   }
   return res.json()
})
.catch(error =>{
   console.error('There was a problem with the fetch operation:', error);
   return null;
});
}
export default apifatch;