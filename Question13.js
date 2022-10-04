//13. Rewrite using async/await
//remember to first install fetch by using 'npm install node-fetch'
import fetch from 'node-fetch'

async function loadJson(url) { // (1)
    let response = await fetch(url); // (2)

    if (response.status == 200) {
      let json = await response.json(); // (3)
      return json;
    }

    throw new Error(response.status);
  }

  console.log('\nQuestion 13:\n-----------')

  loadJson('https://url-doesnt-exist.com/no-such-user.json')
    .catch(console.log); // Error: 404 (4)

  let posts = await loadJson('https://jsonplaceholder.typicode.com/posts/1')
  console.log(posts)
