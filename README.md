***Important note***:

This assignment is meant to be completed within **a maximum of 2 hours**.

Just attempt this assignment, and submit your code before **2 hours** is up, regardless of whether it is fully completed.

You may provide **additional documentation** on how you would continue with this assignment if you were given more time.

# Overview

You are required to build a simple fullstack web application that displays a list of movies and movie details.

Within this Glitch project is an existing application boilerplate (React + Node), but you are free to modify it as you want to.

Feel free to also download the project and work on it in localhost if you prefer to.

# Steps

1. Within Glitch, click on `Remix to Edit` to start own forked version of the code
2. Start editing code within Glitch to complete this assignment

# Details

* The backend server should load data from the movies data file found in `server/movies_metadata.json`.
* The backend server should expose APIs to the frontend to achieve the following:
  * List movies
  * Get single movie by ID
* The frontend web application should display 2 different screens:
  * List movies page (shown initially)
    * Display the following fields (`title`, `tagline` and `vote_average` [calculated out of 10]) with **responsive web design** (e.g. show 4 columns on a desktop but show only 1 column on a mobile device)
  * Display single movie page upon clicking movie in list page
    * Display every field (`release_date` should be localized based on browser settings. `runtime` is calculated in minutes)
    * Display a button/link to return to list movies page

**Additional**

* Any criteria not stated above may not result in bonus points
* **Responsive web design** is explained here: [https://www.w3schools.com/html/html_responsive.asp](https://www.w3schools.com/html/html_responsive.asp)

# Code Submission

1. Within Glitch, go to `Tools` > `Import and Export` > `Download Project`
2. Upload to a public Github repository or a cloud drive (e.g. Google Drive, OneDrive) your code, and email the shared link

*Don't bother trying to email the code directly, because the email attachment will be blocked.*

# Further Project Details (Optional)

## Starter Project - create-react-app and Express

This starter project runs both a webpack development server for front-end work and a back-end server in the same project, at the same time. This is a common scenario when you're building your front end with [create-react-app], and your back end with [Express].

This starter app will get you on your way with this scenario!

## Forwarding requests via a proxy

In **package.json**...

1. if you set your `start` script to `"npm run production"`, it will build the React app and Express will serve the static bundle over port 3000.

2. if you set your `start` script to `"npm run development"`, it will concurrently start the webpack dev server/watcher and the Express server. The latter will be listening on port 3001, but you don't need to change anything in your code because: proxies!

As it stands, the server listens for requests to `/api`; to get this working in `development` mode, we're using [`http-proxy-middleware`] in **src/setupProxy.js** to forward any incoming request to `/api/whatever/endpoint/you/have` over to the `target`, i.e., the Express server.

## Live-reloading and watch.json

There's a **watch.json** file that specifies a couple of conditions to keep Webpack and Glitch from interfering with each others' file watchers:

1. We only want to run `install` scripts when changes are made to the **package.json** and **.env** files. Installation can take a while, so we don't want to trigger it with any other changes.
2. We only want to `restart` the project when changes are made in the **/server** folder, or to the **watch.json** file. We're including **watch.json** in case we need to kick off a restart — a change to the `throttle` value will trigger this. We're also explicitly ignoring any files in the **/public** and **/src** directories from kicking off a restart — we only want the Webpack watcher to handle these files.
3. We're setting a `throttle` of 100, which means that the Glitch watcher will wait 100 milliseconds before restarting anything. If that seems too quick, you can increase it.

## Made with Glitch

Glitch is a collaborative programming environment that lives in your browser and deploys code as you type.

Use Glitch to build anything from a good ol’ static webpage to full-stack Node apps.


[create-react-app]: https://create-react-app.dev
[Express]: https://expressjs.com/
[`http-proxy-middleware`]: https://github.com/chimurai/http-proxy-middleware
