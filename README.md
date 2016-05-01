# Todo App

## Stack:

- Meteor 1.3.X
- Mantra
- React
- Aphrodite
- Redux
- FlowRouter SSR
- Apollo

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

  Check out `imports` folder to see the tiny differences. Every `imports ... from ...` in the `imports` folder should be relative imports. Just in case, MDG decides to make lazy evaluation default and remove the usage of `imports` folder. Since this Todo is mainly SSR, methods are defined in the `/app` directory to achieve latency compensation. For sensitive server codes, I define it in the `/commands` folder. Then import the commands in the `/app` directory.

6. **Put CSS (configurations) files in `/client`**

  Handling stylesheets is one of the tough parts while doing SSR. Through trials and errors, I found out that putting stylesheets in the client folder is the best way so far.

  Here's what I tested so far:
  - Put CSS files in the `/public` folder then reference it in the `head`. Downside of this approach is that there will be glitches on subsequent page load. I'm guessing it's because all client-side code are sent to the client on the first page load. On subsequent load, CSS files are not referenced while server is rendering the page but client-code is still on the client.
  - Import CSS files in JS files. Same as issue as above.

7. **Aphrodite vs JSS**

   Differences:
   - Aphrodite combines all styles under one style tag. Aphrodite also removes unused styles. On the other hand, JSS encourages one style tag per component. If you have more than 31 components, you will hit the IE9 31 style tags limit. Used or unused styles will still be rendered.
   - Aphrodite's nested structure is similar to SCSS. While JSS's nested structure is similar to normal CSS. For example:
   ```
   // Aphrodite
   const styles = {
     test: {
       backgroundColor: 'red',
       '@media (min-width: 400px)': {
         backgroundColor: 'blue',
       }
     }
   }

   // JSS
   const styles = {
     test; {
       backgroundColor: 'red',
     }
     '@media (min-width: 400px)': {
       test: {
         backgroundColor: 'blue',
       }
     }
   }
   ```

8. **SSR & Aphrodite**

   SSR with Aphrodite is relatively easy. I modified `react-mounter` to accommodate Aphrodite. See `/imports/app/libs/mounter/server.js`. Then in the `routes.js` file, rehydration is needed. See `imports/app/modules/core/routes.js` L13.

9. **Apollo GraphQL**

   Got the basic setup done. Need some work on SSR initial data.

## Right click -> view page source -> tadaa!

Only stuffs that I care about SEO are rendered server-side.
