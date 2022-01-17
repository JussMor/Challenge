# **CHALLENGE**  😊
## HOSTED  

<p >The final result of this project was hosted in firebase. Click in link to see the final result.</p>


Link: [Coffie Marker Website]( https://elit-a1a7a.web.app/ ) 👈🏃‍♂️ Run to see it.

## SETUP

Requirements:
- Node: 16.13.1
- npm: 8.3.1
- git

First clone this repo in local 
```
git clone https://github.com/JussMor/Challenge.git
```

Now inside of the directory where you download the repo run this command to install all the dependencies:
```
npm install 
```
Now run the next command  to initialized the local server:

```
npm run start
```
Cool now the project is running. Happy Coding 👨
## BUILD

Ready to production?
```
npm run build
```
 Note: I created this project with created-react-app and I don't understand why when I try to generate the production build the console give me a error:

 If you have this error 
 ```
 TypeError: MiniCssExtractPlugin is not a constructor
 ```
To resolve this error => Go to the following path
```
node_modules/react-scripts/config/webpack.config.js
```
and search for the following line. it should be the line 19 and both should be  equals
```
const MiniCssExtractPlugin = require('mini-css-extract-plugin').default;
```

## LIGHTHOUSE

I use lighthouse in devtools to generate a report about, performance, accesibility, SEO, Best Practices and this is was my result. I use Edge Chrome  in a private window to get this result:

### Desktop

<img align="center" src="https://github.com/JussMor/Challenge/blob/master/photos/destokp-test.png" alt="Desktop"  />

### Mobile

<img align="center" src="https://github.com/JussMor/Challenge/blob/master/photos/mobile-test.png" alt="Mobile"  />

## acknowledgments

Thank you to JOBSITY. 





