export default async function handler(req, res) {
  const { code } = req.query;

  if (!code) {
    res.status(400).send('Missing code parameter');
    return;
  }

  const clientId = process.env.OAUTH_GITHUB_CLIENT_ID;
  const clientSecret = process.env.OAUTH_GITHUB_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    res.status(500).send('OAuth environment variables not configured');
    return;
  }

  try {
    const response = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code,
      }),
    });

    const data = await response.json();

    if (data.error) {
      res.status(401).send(`
        <html><body>
          <p>Error: ${data.error_description || data.error}</p>
          <p><a href="javascript:window.close()">Cerrar ventana</a></p>
        </body></html>
      `);
      return;
    }

    const token = data.access_token;

    res.setHeader('Content-Type', 'text/html');
    res.send(`<!doctype html><html><body><script>
      (function() {
        var token = ${JSON.stringify(token)};
        var provider = "github";
        function receiveMessage(e) {
          window.opener.postMessage(
            "authorization:" + provider + ":success:" + JSON.stringify({token: token, provider: provider}),
            e.origin
          );
          window.removeEventListener("message", receiveMessage, false);
          window.close();
        }
        window.addEventListener("message", receiveMessage, false);
        window.opener.postMessage("authorizing:" + provider, "*");
      })();
    </script></body></html>`);
  } catch (error) {
    res.status(500).send(`Server error: ${error.message}`);
  }
}
