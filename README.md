# fake api
https://test-api-fake-dummy.herokuapp.com/faq

#Example
fetch("http://localhost:7000/apply-coupon",{method:'POST', headers: {
      'Content-Type': 'application/json'
    },body:JSON.stringify({
    coupon:"act20"
})}).then(resp=>resp.json())
