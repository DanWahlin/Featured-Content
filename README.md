# Featured Content App

The `Featured-Content` repo provides a framework that can be used to feature and filter curated content. Visit <a href="https://danwahlin.github.io/Featured-Content/" target="_blank" rel="noopener noreferrer">https://danwahlin.github.io/Featured-Content</a> to see an example of it in action.

## Using the Featured Content Functionality in Your Own Site

1. Clone this repo:

    ```
    git clone https://github.com/DanWahlin/Featured-Content.git
    ```

1. Create a new folder for your project (outside of the `Featured-Content` cloned repo from the previous step).

1. Create a folder named `public` in your project.

1. Create an `index.html` file in the `public` folder.

1. Add the following content into `index.html`:

    ```
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8" />
        <link rel="icon" href="./favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer="defer" src="https://cdn.jsdelivr.net/gh/danwahlin/Featured-Content@gh-pages/dist/main-0.6.min.js"></script>
        <link href="https://cdn.jsdelivr.net/gh/danwahlin/Featured-Content@gh-pages/dist/main-0.6.min.css" rel="stylesheet">
        <title>Featured Content</title>
    </head>

    <body>
        <div id="root" data-feed-url="./data/siteContent.json"></div>
    </body>

    </html>
    ```

1. Copy the `public/data` folder from the `Featured-Content` repo to your `public` folder.

1. Copy the `public/images` folder from the `Featured-Content` repo folder to your `public` folder.

1. Run `index.html` using a web server to try it out locally. If you're working with VS Code you can use the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension to do it. After installing it, right-click on `index.html` and select `Open with Live Server`.

1. Modify the `public/data/siteContent.json` file in your project so that your custom curated content shows instead of the included sample data.

1. Publish your content (see below).

## Deployment to GitHub Pages

1. Create a repo for your project in [GitHub](https://docs.github.com/en/get-started/importing-your-projects-to-github/importing-source-code-to-github/adding-locally-hosted-code-to-github).

1. Run `npm install gh-pages` in the root of your project.

1. Add the following script into `package.json`:

    ```
    "scripts": {
        "deploy": "gh-pages -d public"
    }
    ```

1. Run `npm run deploy` to deploy your code to the `gh-pages` branch in your repository.

1. Visit your GitHub Pages site at https://[your-username].github.io/[your-repo-name].
