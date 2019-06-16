exports.handler = (event, context, callback) => {
  const body = JSON.parse(event.body).payload
  console.log(body);
  console.log(event.body.site)
  console.log(context)

  return callback(null, {
    statusCode: 200,
    body: 'Function Submitted Successfully'
   })
};
