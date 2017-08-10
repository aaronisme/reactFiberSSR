export default (app, data) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>ReactSSR</title>
</head>
<body>
  <div id="root">${app}</div>
  <script>
    var _data = ${JSON.stringify(data)}
  </script>
  <script src="/public/bundle.js"></script>
</body>
</html>
`