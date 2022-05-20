/*
 * Initialization
 */
const btn_calc = document.getElementById('btn_calc');
btn_calc.addEventListener('click', function(evt){
  var indx_input = document.getElementById('indx_input');
  var data = {
    indx: indx_input.value
  }
  fetch(`/api/fibonacci/${indx_input.value}`,
    {
      dataType: 'json',
      method: 'GET',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
    })
  .then(response => response.json())
  .then((response) => {
    document.getElementById('fibo_rsp').innerHTML = response['fibo'];
  })
})

// no text please, digits only
const indx_input = document.getElementById('indx_input');
indx_input.addEventListener('keyup', function(evt){
  indx_input.value=indx_input.value.replace(/[^\d]/g,'');
})
