# Todo App

## Stack:

- Meteor 1.3
- Mantra
- React
- JSS
- Radium
- Redux
- FlowRouter SSR

## Some other goodies:

- Babel Plugins
- React Hot Reload

*These are enabled by using gadicc:ecmascript-hot*

## Sample

![gif](./.gifs/todo-demo.gif)

## Some explanations / gotchas

1. **Fully render an app on server side is expensive**

  Therefore, some parts of the app are rendered on the server and some are rendered on the client. `react-no-ssr` is extensively used in this app to reduce server load(?). The page will be rendered first and then client-side components will be rendered next. As a result, I create server-side rendered placeholders for client-side rendered components. PostCSS and CSS Modules gave me serious headache when dealing with SSR. So I decided to use Radium for server-side rendered components. For client-side rendered components, I use JSS.

2. **No need to use `react-redux`**

  I'm not using `react-redux` binding since Mantra has a pretty neat way to deal with how we bind data and state to components.

3. **Latency Compensation**

  Two things are needed: a method and a method call. See `imports/app/modules/core/methods/todos` to checkout how I write my latency compensated methods. See `imports/app/modules/core/action/todos` to checkout how call my latency compensated methods.

4. **Import server-side code into client or shared folder**

  Since I'm using FlowRouter SSR, a shared folder is needed to make SSR work. With that being said, I need to write my Meteor methods in shared folder now. What if I have business logic that I don't want to expose to client? Checkout `imports/app/modules/core/methods/todos` lines 1-6 and lines 30-37.

5. **Folder structure is slightly different than Mantra's**

  Check out `imports` folder to see the tiny differences. Everything `imports ... from ...` in the `imports` folder should be relative imports. Just in case, MDG decides to make lazy-loading default and remove the usage of `imports` folder.

## Right click -> view page source -> tadaa!

Only stuffs that I care about SEO are rendered server-side.
