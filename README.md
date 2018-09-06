<h1>What's Going On</h1>

<h3>Project description (work in progress):</h3>
<p><small>Definitely check out the <a href="https://facebook.github.io/react-native/docs/getting-started.html">React Native Docs</a> for more detailed instructions, and documentation.</small></p>
<br/>
<p>What's Going On is an app that allows a user to sign up for a basic account, or an event manager to sign up for a business account. Basic users are able to open the app, and see an interactive map with events(Concerts, parties, meetups, conferences, etc.) close to them. They are able to select a a verified event, and purchase tickets (if applicable) from the app right then.</p>
<br/>
<p>Business users, or Event Managers are able to post events to the app; as well as, use the apps ticketing system for basic users to recieve their tickets with QR codes for Event Manager verification. (COMPLEX: Will come later)</p>
<br/>
<h3>How to build, and run the project.</h3>
<br/>
<p>First you will want to install Xcode <a href="https://itunes.apple.com/us/app/xcode/id497799835?mt=12">here</a>.</p>
<br/>
<p>Once Xcode is installed you will want <a href="https://nodejs.org/en/">Node</a> on your system. <em>If you have Node installed already make sure to read the note.</em> <br/><strong>NOTE: React Native recommeds Node 8.3, or newer. You can use <code>node -v</code> to see what version of Node you have. They also recommend installing these next two packages through Brew.</strong></p>
<br/>
<p>You can install Homebrew <a href="https://brew.sh/">here</a>. Just copy, and paste the command they give you into your command prompt.</p>
<br/>
<p>Once Homebrew is installed on your sytem you will want to run these commands to install Node, and a package called Watchman.</p>
<br/>
<code>
brew install node // NOT needed if you have Node 8.3, or newer already.

brew install watchman
</code>
<br/>
<h4>What's Watchman?</h4>
<br/>
<p><a href="https://facebook.github.io/watchman/">Watchman</a> is a tool by Facebook for watching changes in the filesystem. It is highly recommended you install it for better performance.</p>
<br/>
<p>Node comes with <a href="https://www.npmjs.com/">NPM</a> which will allow us to install the React Native CLI (Command Line Interface). Just type in the following code to install it.</p>
<br/>
<code>npm install -g react-native-cli</code><br/>
<p><small><code>-g</code> is short for Global. We're installing it on our system globally rather than locally to just the project.</small></p>
<br/>
<p>Okay now you should be all set up to clone the repository, and run the project locally! Put it into any file you'd like!</p>
<br/>
<code>git clone git@github.com:franky212/native-whats-going-on.git</code>
<br/>
<p>Go into the root directory of the project, and run this command.</p>
<br/>
<code>react-native run-ios</code>

