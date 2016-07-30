# README 

## Set Up 

### Prerequsities: 

(the [React Native](https://facebook.github.io/react-native/docs/getting-started.html) docs do a good job outlining this as well)

#### Xcode 

Get from the [Mac App Store](https://itunes.apple.com/us/app/xcode/id497799835?mt=12).

#### Node 

Use the [Homebrew](http://brew.sh/) package manager to install node.

`brew install node`

#### Watchman 

Install watchman 

`brew install watchman`

This lets you not have to reload the app manually to reflect changes.  

#### React Native CLI Tools 

Useful for working with React Native apps but not necessary 

`npm install -g react-native-cli`

### Running the App 

You can now clone the repository:

`git clone git@github.com:abargmann/BigBucks.git`

And initiliaze the app from outside the project directory:

`react-native init BigBucks`

And then run it in the iOS simulator.  This will do a few things: open xcode, open another terminal window, open the simulator. From the project directory:
`react-native run-ios`   

### Handy tips

In the simulator, hit `Command+D` and enable live reload.  In addition, open debugger tools - this will give you a browser window with a debug console.  Handy for working with react native.  

## BigBucks 

This project is a prototype.  There are a few reasons I, @abargmann, pursued it: 

1.  React Native seemed like a useful tool to learn for fast and flexible mobile prototyping.  
2.  We tend to believe that JavaScript will be the dominant programming language in the coming years.  This was an exercise in using some of the newer JavaScript tools in order to think about this change in programming styles.  
3.  We have been thinking about how the Internet makes things more "snackable."  Some examples include: news, music, messaging, and so on.  This was an exercise in thinking about snackable products and things that hadn't truly been condensed into snackable bits yet.  In this case, financial indices and investing.  We have tools that let us buy single stocks via mobile phones, but we haven't yet condensed the essence of a 401k or long term buy and hold strategy into a snackable experience. This by no means solves that but the idea was to find a fun enough "game" approach to this snacking that could justify investment in actually building a snackable financial product. 




