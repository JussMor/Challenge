# **CHALLENGE**  😊
## HOSTED  

<p >The final result of this project was hosted in firebase. Click in link to see the final result.</p>


Link: [Coffie Marker Website]( https://elit-a1a7a.web.app/ ) 👈🏃‍♂️ Run to see it.

## SETUP

Requirements:
- Node: >=16.13.1
- npm: 8.3.1
- git

First clone this repo on local 
```
git clone https://github.com/JussMor/Challenge.git
```

Now inside of the directory where you downloaded the repo run this command to install all the dependencies:
```
npm install 
```
Now run the next command  to initialized the local server:

```
npm run start
```
Cool, now the project is running. Happy Coding 👨
## BUILD

Ready to production?
```
npm run build
```
 Note: I created this project with created-react-app and I don't understand why when I try to generate the production build the console gives me a error:

 If you have this error: 
 ```
 TypeError: MiniCssExtractPlugin is not a constructor
 ```
To resolve this error => Go to the following path
```
node_modules/react-scripts/config/webpack.config.js
```
and search for the following line. It should be the line 19 and both should be  equals
```
const MiniCssExtractPlugin = require('mini-css-extract-plugin').default;
```
## TEST 
Tests are an important part  in software development, I writed 4 test cases in the following components:
- Hero.test.js
- Programs.test.js

To execute the test run the following command:
```
npm run test
```
## LIGHTHOUSE

I used lighthouse in devtools to generate a report about, performance, accesibility, SEO, best practices and this  was my result. I used Edge Chrome  in a private window to get this result:

### Desktop

<img align="center" src="https://github.com/JussMor/Challenge/blob/master/photos/destokp-test.png" alt="Desktop"  />

### Mobile

<img align="center" src="https://github.com/JussMor/Challenge/blob/master/photos/mobile-test.png" alt="Mobile"  />

## ACKNOWLEDGMENTS

Thank You to [JOBSITY](https://www.jobsity.com/). 





