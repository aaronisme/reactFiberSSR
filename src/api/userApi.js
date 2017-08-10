import 'isomorphic-fetch';

export default () => fetch('http://localhost:8080/api').then(
      (response) => {
        if (response.status >= 400) {
          throw ('fetch erro')
        }

        return response.json()
      }
    )