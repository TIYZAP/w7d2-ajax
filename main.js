$.getJSON('https://immense-harbor-69502.herokuapp.com/api/shouts/')
.then(function(r){
  r.shouts.forEach(function(shout){
      shout.user.avatar = "<img src='https://robohash.org/" + shout.user.name + "'/>"
  console.log(shout)
  $('#shouts_list').append('<tr>'+'<td>'+shout.user.avatar+'</td>'+'<td>'+shout.user.name+'</td>'+'<td>'+shout.body+'</td>'+'<td>'+shout.user.created_at+'</tr>'+'</td>')
  })
})
// The following line would have worked but the front end kids got rid of the uploaded images...
// shout.user.avatar = "<img src='https://immense-harbor-69502.herokuapp.com" + shout.user.avatar + "'/>"
