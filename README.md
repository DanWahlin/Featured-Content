# Featured Content App

The `Featured-Content` repo provides a framework that can be used to feature and filter curated content. Visit https://danwahlin.github.io/Featured-Content/ to see an example of it in action.

## Deployment to GitHub Pages

Enable GitHub Pages to use the `gh-pages` branch by going to `https://github.com/[org_name]/[repo_name]/settings/pages`

Publish:

1. `npm install`
1. `npm run deploy`

## Using the "Feature Content" Functionality

1. Create the following `index.html` file:

    ```
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8" />
        <link rel="icon" href="./favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer="defer" src="https://cdn.jsdelivr.net/gh/danwahlin/Featured-Content@gh-pages/dist/main-0.5.7.min.js"></script>
        <link href="https://cdn.jsdelivr.net/gh/danwahlin/Featured-Content@gh-pages/dist/main-0.5.7.min.css" rel="stylesheet">
        <title>Featured Content</title>
    </head>

    <body>
        <div id="root" data-feed-url="./data/siteContent.json"></div>
    </body>

    </html>
    ```

1. Copy the `public/data` folder to where your `index.html` file lives (you only want the `data` folder, not `public/data`).

1. Copy the `public/images` folder to where your `index.html` file lives (you only want the `images` folder, not `public/data`).

1. Run `index.html` using a web server. If you're working with VS Code you can use the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension.

1. Modify the `data/siteContent.json` file so that your content shows.

1. Publish your content!
