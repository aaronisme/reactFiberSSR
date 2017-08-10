const renderTime = [];

export default (req, res) => {
  renderTime.push(res.locals.time)
  console.log('rendering Time Mean:', renderTime.reduce((a, b)=> a+b, 0) / renderTime.length)
  return res.status(200).send(res.locals.appString)
}