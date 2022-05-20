/** Get Fibo.
 * @param indx up to which index number the sequence has to be calculated
 * @returns calculation
 */
function getFibo(indx: string) {
  var prv=0;
  var nxt=1;
  var res=0;
  for(var i=1; i<=(parseInt(indx)); i++){
    prv= nxt;
    nxt= res;
    res= prv+nxt;
  }
  return res;
}

// Export to return
export default {
    getFibo
} as const;
