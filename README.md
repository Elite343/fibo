<div id="top"></div>


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">fibo? Fibonacci!</h3>

  <p align="center">
    An interesting assignment that calculates the Fibonacci value-in-sequence of a given number.
    <br />
    <a href="https://github.com/Elite343/fibo"><strong>Explore the docs »</strong></a>
    <br />
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<!--[![Product Name Screen Shot][product-screenshot]](https://example.com)-->

Hi! if you're reading this let me thank you first of all and beforehand for the time you'll invest in reviewing this assignment, It was quite fun and challenging to achieve, something I've not experienced in any previous interviews.

That being said let's get it up and running shall we?
<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

Every recipe requires ingredients of course, our main (and only) today will be Node.js

* [Node.js](https://nodejs.org/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This installation will be mostrly done on the terminal, we will be using windows for now.
To get a local copy up and running follow these simple steps, you can of course skip the ones you've already installed.

### Prerequisites

* Nodejs  ::  
First things first, we will need Node.js to make the magic happen, luckily it can be installed quite simply with their own installer. LTS version is ok and no particular configuration is required during installation.
Once the installation is complete let's validate it, please open a PowerShell terminal with admin rights and type this command:
  ```sh
  node -v
  ```

  if the response is something like v16.15.0 all is a-ok

* npm  ::  
  Just for good measure let's keep this updated with this command, we never know.
  ```sh
  npm install npm@latest -g
  ```

### Installation

With the background all set let's clone fibo using the wonders of git, please traverse to the folder where the project shall be installed and...

* Clone the repo
   ```sh
   git clone https://github.com/Elite343/fibo.git
   ```

  By now you might have the entire repo on a subfolder called fibo! easy peasy.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Now for the fun part, to unveil the mysteries of the Fibonacci sequence, we need to start up the server, to do so please traverse to the fibo folder that we just created and run the following command:
   ```sh
   npm run start:dev
   ```
Seeing green text saying "Express server started on port: 3000"? awesome! all is fine, all is good


Now please open a browser and go to:
   ```sh
   http://localhost:3000/
   ```

Ready? set, Go!, just type a number, pres Go! and trough the wonders of computation (explained further in the document) we will know that's the corresponding "fibo" number in sequence!

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Yair Rodriguez - [@linkedin](https://www.linkedin.com/in/yairrodriguez/) - elite_343@hotmail.com

Project Link: [https://github.com/Elite343/fibo](https://github.com/Elite343/fibo.git)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Now, to explain the workflow. the Express server was mainly created using the npm package:
* [express-generator-typescript](https://www.npmjs.com/package/express-generator-typescript)

About the process it goes like this:
  * The file /views/index.html creates the main UI.
  * As the user types on the input its content gets revised and sanitized of anything that's not a digit.
  * Upon clicking the Go! button a fetch request is created parsing the input value towards the API using GET.
  * Then /routes/api.ts comes to point the request correctly to /routes/fibo-router.ts.
  * At /routes/fibo-router.ts the input value is isolated as "indx" and parsed to router.get to eventually end up in /services/fibo-service.ts/getFibo().
  * Once inside /services/services/fibo-service.ts the corresponding Fibonacci calculation takes place and is returned.
  * The response triggers the end of the await at /routes/fibo-router.ts transforming it into a json along with a 200 response code.
  * Now the response is back at /public/scripts/index.js where it's decoded and shown at the result div.

And... that's it :)

I sincerely hope this guide was as good to read as it was to write, and you had no complications installing/revieweing the preoject; thank you for your time and I hope we'll work together soon!.
Have a wonderful Life!
  
<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[product-screenshot]: images/screenshot.png
