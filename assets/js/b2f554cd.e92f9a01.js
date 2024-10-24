"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1477],{30010:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/2024/10/24/changes-to-oss-flipper","metadata":{"permalink":"/blog/2024/10/24/changes-to-oss-flipper","source":"@site/blog/2024-10-24-changes-to-oss-flipper.md","title":"Changes to Flipper\'s Open Source Repository","description":"Flipper has been an integral part of the mobile development process at Meta for years. We\'ve been proud to share our internal tool with the open source community, and it has been amazing to see how it has grown and evolved over time.","date":"2024-10-24T00:00:00.000Z","formattedDate":"October 24, 2024","tags":[{"label":"flipper","permalink":"/blog/tags/flipper"},{"label":"oss","permalink":"/blog/tags/oss"},{"label":"github","permalink":"/blog/tags/github"}],"readingTime":1.47,"hasTruncateMarker":false,"authors":[{"name":"Anton Kastritskiy","title":"Software Engineer","url":"https://github.com/antonk52","imageURL":"https://github.com/antonk52.png"}],"frontMatter":{"title":"Changes to Flipper\'s Open Source Repository","author":"Anton Kastritskiy","author_title":"Software Engineer","author_url":"https://github.com/antonk52","author_image_url":"https://github.com/antonk52.png","tags":["flipper","oss","github"],"hide_table_of_contents":false},"nextItem":{"title":"Headless Flipper - what it means for plugin developers","permalink":"/blog/2022/05/20/preparing-for-headless-flipper"}},"content":"Flipper has been an integral part of the mobile development process at Meta for years. We\'ve been proud to share our internal tool with the open source community, and it has been amazing to see how it has grown and evolved over time.\\nHowever, we have some important changes to announce regarding Flipper\'s open source repository.\\n\\n## Archiving the Repository\\n\\nThe Flipper repository is going to stop receiving updates and bug fixes. Later this year, we plan to archive the repository. This means that the repository will remain available in an archived state, but it will no longer be possible to create new issues, pull requests, or make changes to the code. You will still be able to clone or fork the repository and build Flipper from source code.\\n\\nWhile Flipper\'s repository will be archived. The source code will remain available to view or to fork.\\n\\n## Why?\\n\\nWhen Flipper was initially created, it was intended to fill a gap in native developer tooling. It was first open sourced in 2018, over 7 years ago. The native tooling capabilities have improved since then, and more people have stopped reaching for Flipper when doing native development. React Native removed Flipper from its default boilerplate in [v0.74](https://reactnative.dev/blog/2024/04/22/release-0.74#removal-of-flipper-react-native-plugin) and recently announced React Native DevTools. Nowadays, you can use alternative tools to reproduce Flipper\'s capabilities. We recommend checking out this [blog post](https://shift.infinite.red/why-you-dont-need-flipper-in-your-react-native-app-and-how-to-get-by-without-it-3af461955109).\\n\\n\\nAs a result, support for Flipper has been deprioritized, and Flipper no longer has a dedicated team to support it. While we are sad to see this chapter come to an end, we are proud of what we have accomplished and grateful to the community for their support.\\n\\nWe want to thank everyone who has supported and contributed to Flipper over the years!\\n\\nThe Flipper team"},{"id":"/2022/05/20/preparing-for-headless-flipper","metadata":{"permalink":"/blog/2022/05/20/preparing-for-headless-flipper","source":"@site/blog/2022-05-20-preparing-for-headless-flipper.md","title":"Headless Flipper - what it means for plugin developers","description":"Flipper is moving from an Electron monolith to a headless Node.js app with a web UI. It reshapes how we think about plugins and what plugins can do. We talk about what changes and how to prepare our plugins for the migration.","date":"2022-05-20T00:00:00.000Z","formattedDate":"May 20, 2022","tags":[{"label":"flipper","permalink":"/blog/tags/flipper"},{"label":"headless","permalink":"/blog/tags/headless"},{"label":"plugins","permalink":"/blog/tags/plugins"}],"readingTime":8.15,"hasTruncateMarker":true,"authors":[{"name":"Andrey Goncharov","title":"Software Engineer","url":"https://github.com/aigoncharov","imageURL":"https://github.com/aigoncharov.png"}],"frontMatter":{"title":"Headless Flipper - what it means for plugin developers","author":"Andrey Goncharov","author_title":"Software Engineer","author_url":"https://github.com/aigoncharov","author_image_url":"https://github.com/aigoncharov.png","tags":["flipper","headless","plugins"],"description":"Flipper is moving from an Electron monolith to a headless Node.js app with a web UI. It reshapes how we think about plugins and what plugins can do. We talk about what changes and how to prepare our plugins for the migration.","image":"/img/preparing-for-headless-flipper.jpg","hide_table_of_contents":false},"prevItem":{"title":"Changes to Flipper\'s Open Source Repository","permalink":"/blog/2024/10/24/changes-to-oss-flipper"},"nextItem":{"title":"Flipper is coming to your web and Node.js apps","permalink":"/blog/2022/02/21/js-flipper-announcement"}},"content":"![Cover image](/img/preparing-for-headless-flipper.jpg)\\n\\nWe know Flipper as an Electron desktop app that serves mobile developers as\\ntheir debugging companion. Thousands of people use Flipper every day to tinker\\nwith their app and get to the bottom of tricky problems.\\n\\nAs announced in the previous\\n[roadmap post](https://fbflipper.com/blog/2021/10/14/roadmap/), we are committed\\nto amplifying how Flipper could improve the quality of our software. We want\\ntake Flipper beyond its current role as a complementary debugging tool, provide\\na powerful API, and allow using Flipper in more than just the GUI context (we\\ncall it \\"headless mode\\"). Imagine talking to your mobile device (or anything\\nelse that runs Flipper Client) from your terminal. Imagine deploying Flipper\\nremotely in the cloud and interacting with it from your laptop. Imagine using\\nyour favorite plugins for automated testing.\\n\\nIn this post we cover:\\n\\n- How Flipper changes to facilitate the headless mode\\n- How it affects plugins\\n- A migration guide\\n\\n\x3c!--truncate--\x3e\\n\\n## How Flipper changes\\n\\nLet us take a look at how it works today as an Electron app.\\n\\n![Flipper Electron architecture](/img/flipper-arch-electron.jpg)\\n\\nHere is what happens:\\n\\n1. Flipper starts as an Electron application.\\n   1. WebSocket server starts.\\n   2. Device discovery starts via adb/idb/metro.\\n   3. Electron shows a web view with Flipper UI (React).\\n   4. Flipper UI queries the device discovery service for a list of devices.\\n2. At this point, Flipper can already run\\n   [\\"device\\" plugins](https://fbflipper.com/docs/extending/desktop-plugin-structure/#creating-a-device-plugin).\\n   These plugins do not receive a connection to a running app. They talk to the\\n   device via adb/idb/metro.\\n3. An app starts on the device.\\n4. Flipper Client embedded in the app connects to the WebSocket server.\\n5. Flipper updates the list of known clients and reflects it in the UI.\\n6. Now Flipper can run\\n   [\\"client\\" plugins](https://fbflipper.com/docs/extending/desktop-plugin-structure/#creating-a-client-plugin).\\n7. Client plugins talk to the device application over the WebSocket connection.\\n\\n> You can start Flipper Electron with `yarn start` from the `/desktop` folder.\\n\\nHere is how Flipper Headless works.\\n\\n![Flipper Headless architecture](/img/flipper-arch-headless.jpg)\\n\\n1. Flipper starts as a Node.js application.\\n   1. WebSocket server starts.\\n   2. Device discovery starts via adb/idb/metro.\\n   3. Web server starts.\\n   4. It serves Flipper UI to a browser.\\n   5. Flipper UI connects to the WebSocket server.\\n   6. Flipper UI sends a message over the WebSocket connection to query the\\n      device discovery service for a list of devices.\\n2. At this point, Flipper can already run\\n   [\\"device\\" plugins](https://fbflipper.com/docs/extending/desktop-plugin-structure/#creating-a-device-plugin).\\n   These plugins do not receive a connection to a running app. They talk to the\\n   device via adb/idb/metro.\\n3. An app starts on the device.\\n4. Flipper Client embedded in the app connects to the WebSocket server.\\n5. Flipper updates the list of known clients. It sends a message over the\\n   WebSocket connection to Flipper UI with the information about the new device.\\n6. Now Flipper can run\\n   [\\"client\\" plugins](https://fbflipper.com/docs/extending/desktop-plugin-structure/#creating-a-client-plugin).\\n7. Client plugins talk to the device application over the WebSocket bridge - the\\n   connection from Flipper UI to Flipper WebSocket server piped to the\\n   connection from the device application to the Flipper WebSocket server.\\n\\n> You can start Flipper Electron with `yarn flipper-server` from the `/desktop`\\n> folder.\\n\\n## How it affects plugins\\n\\nPlugins are hosted by Flipper UI. When it was a part of the Electron app, there\\nwas no problem. Plugins could access any Node.js APIs thanks to Electron magic.\\nThere were no constraints on what plugins could do. After making Flipper UI a\\nproper web app running in a browser, we limited what plugins can do. They no\\nlonger can access the network stack or the file system because there are no\\ncorresponding browser APIs. Yet, we want to keep Flipper flexible and provide as\\nmuch freedom to plugin developers as possible. Moreover, we could not leave the\\nexisting plugins without a clear migration path.\\n\\n![Flipper remote Node.js API](/img/flipper-node-apis.jpg)\\n\\nSince we already have a WebSocket connection between Flipper UI and Flipper\\nServer, we can model almost any request-response and even stream-based Node.js\\nAPIs over it. So far, we exposed a curated subset of them:\\n\\n- child_process\\n  - exec\\n- fs (and [fs-extra](https://www.npmjs.com/package/fs-extra))\\n  - constants\\n  - access\\n  - pathExists\\n  - unlink\\n  - mkdir\\n  - rm\\n  - copyFile\\n  - stat\\n  - readlink\\n  - readFile\\n  - writeFile\\n\\nWe also provided a way to\\n[download a file](https://github.com/facebook/flipper/blob/0f038218f893d86e91714cd91eed8e37d756386c/desktop/flipper-plugin/src/plugin/FlipperLib.tsx#L83)\\nor send requests to the\\n[internal infrastructure](https://github.com/facebook/flipper/blob/0f038218f893d86e91714cd91eed8e37d756386c/desktop/flipper-plugin/src/plugin/FlipperLib.tsx#L186).\\n\\n> Please, find the complete list of available APIs on\\n> [GitHub](https://github.com/facebook/flipper/blob/0f038218f893d86e91714cd91eed8e37d756386c/desktop/flipper-plugin/src/plugin/FlipperLib.tsx#L95).\\n> [Here are Node.js API abstractions](https://github.com/facebook/flipper/blob/0f038218f893d86e91714cd91eed8e37d756386c/desktop/flipper-plugin/src/plugin/FlipperLib.tsx#L47)\\n> specifically.\\n\\nAs you might have noticed, all exposed APIs are of the request-response nature.\\nThey assume a short finite controlled lifespan. Yet, some plugins start\\nadditional web servers or spawn long-living child processes. To control their\\nlifetime we need to track them on Flipper Server side and stop them whenever\\nFlipper UI disconnects. Say hello to a new experimental feature - Flipper Server\\nAdd-ons!\\n\\n![Flipper Server Add-on](/img/flipper-add-on.jpg)\\n\\nNow, every flipper plugin could have \\"server add-on\\" meta-information. Whenever\\na Flipper plugin that has a corresponding Server Add-on starts, it sends a\\ncommand to Flipper Server to start its Server Add-on counterpart. Flipper plugin\\nthat lives in a browser inside of Flipper UI talks to its server add-on over the\\nWebSocket connection. Whenever a user disables a plugin, Flipper sends a command\\nto Flipper Server to stop the add-on. At the same time, if Flipper UI crashes or\\nthe user just closes the tab, Flipper Server can kill the server add-on on its\\nown.\\n\\nFlipper plugin can talk to its server add-on companion (see\\n`onServerAddOnMessage`, `onServerAddOnUnhandledMessage`, `sendToServerAddOn` in\\n[the docs](https://fbflipper.com/docs/extending/flipper-plugin/#pluginclient))\\nand act whenever it starts or stops (see `onServerAddOnStart`,\\n`onServerAddOnStop` in\\n[the docs](https://fbflipper.com/docs/extending/flipper-plugin/#pluginclient)).\\n\\nSay, you wrote an ultimate library to find primes. You were cautious of the\\nresource consumption, so you did it in Rust. You created a CLI interface for\\nyour new shiny library. Now, you want your Flipper plugin to use it. It takes a\\nlong time to find a prime and you want to keep track of the progress. You could\\nuse `getFlipperLib().remoteServerContext.childProcess.exec`, but it is not\\nflexible enough to monitor progress updates that your CLI sends to stdout. Here\\nis how you could approach it:\\n\\n```tsx\\n// contract.tsx\\nexport interface ServerAddOnEvents {\\n  // Server add-on sends \\"progress\\" events with the progress updates\\n  progress: number;\\n}\\nexport interface ServerAddOnMethods {\\n  // Client plugin send \\"findPrime\\" messages to the server add-on to start finding primes\\n  findPrime: () => Promise<number>;\\n}\\n\\n// index.tsx (your plugin)\\nimport {usePlugin, useValue, createState, PluginClient} from \'flipper-plugin\';\\nimport {ServerAddOnEvents, ServerAddOnMethods} from \'./contract\';\\n\\nexport const plugin = (\\n  client: PluginClient<{}, {}, ServerAddOnEvents, ServerAddOnMethods>,\\n) => {\\n  const prime = createState<number | null>(null);\\n  const progress = createState<number>(0);\\n\\n  client.onServerAddOnStart(async () => {\\n    const newPrime = await client.sendToServerAddOn(\'findPrime\');\\n    prime.set(newPrime);\\n  });\\n\\n  client.onServerAddOnStart(() => {\\n    client.onServerAddOnMessage(\'progress\', progressUpdate => {\\n      progress.set(progressUpdate);\\n    });\\n  });\\n\\n  return {\\n    prime,\\n    progress,\\n  };\\n};\\n\\nexport const Component = () => {\\n  const pluginInstance = usePlugin(plugin);\\n  const prime = useValue(pluginInstance.prime);\\n  const progress = useValue(pluginInstance.progress);\\n\\n  return <div>{prime ?? `Calculating (${progress}%) done...`}</div>;\\n};\\n\\n// serverAddOn.tsx\\nimport {ServerAddOn} from \'flipper-plugin\';\\nimport {exec, ChildProcess} from \'child_process\';\\nimport {ServerAddOnEvents, ServerAddOnMethods} from \'./contract\';\\n\\nconst serverAddOn: ServerAddOn<ServerAddOnEvents, ServerAddOnMethods> =\\n  async connection => {\\n    let findPrimeChildProcess: ChildProcess | undefined;\\n\\n    connection.receive(\'findPrime\', () => {\\n      if (findPrimeChildProcess) {\\n        // Allow only one findPrime request at a time. Finding primes is expensive!\\n        throw new Error(\'Too many requests!\');\\n      }\\n\\n      // Start our awesome Rust lib\\n      findPrimeChildProcess = exec(\'/find-prime-cli\', {shell: true});\\n\\n      // Return a Promise that resolves when a prime is found.\\n      // Flipper will serialize the value the promise is resolved with and send it oer the wire.\\n      return new Promise(resolve => {\\n        // Listen to stdout of the lib for the progress updates and, eventually, the prime\\n        findPrimeChildProcess.stdout.on(\'data\', data => {\\n          // Say, data is a stringified JSON\\n          const parsed = JSON.parse(data);\\n\\n          if (parsed.type === \'progress\') {\\n            connection.send(\'progress\', parsed.value);\\n            return;\\n          }\\n\\n          // Allow new requests to find new primes\\n          findPrimeChildProcess = undefined;\\n          // If it is not a progress update, then a prime is found.\\n          resolve(parsed.value);\\n        });\\n      });\\n    });\\n  };\\n\\nexport default serverAddOn;\\n```\\n\\n## Migration guide\\n\\n1. Examine your plugins for Node.js APIs. Replace them with\\n   `getFlipperLib().remoteServerContext.*` calls.\\n\\n   ```tsx\\n   // before\\n   import {mkdir} from \'fs/promises\';\\n\\n   export const plugin = () => {\\n     const myAwesomeFn = async () => {\\n       await mkdir(\'/universe/dagobah\');\\n     };\\n\\n     return {\\n       myAwesomeFn,\\n     };\\n   };\\n\\n   // after\\n   import {getFlipperLib} from \'flipper-plugin\';\\n\\n   export const plugin = () => {\\n     const myAwesomeFn = async () => {\\n       await getFlipperLib().remoteServerContext.mkdir(\'/universe/dagobah\');\\n     };\\n\\n     return {\\n       myAwesomeFn,\\n     };\\n   };\\n   ```\\n\\n2. If your plugin uses network stack of spawns a subprocess, consider creating a\\n   Server Add-on.\\n\\n   1. In your plugin\'s folder create a new file - `serverAddOn.tsx`\\n   2. In your plugin\'s package.json add fields `serverAddOn` and\\n      `flipperBundlerEntryServerAddOn`\\n\\n      ```js\\n      {\\n         // ...\\n         \\"serverAddOn\\": \\"dist/serverAddOn.js\\",\\n         \\"flipperBundlerEntryServerAddOn\\": \\"serverAddOn.tsx\\",\\n         // ...\\n      }\\n      ```\\n\\n   3. Move your Node.js API calls to `serverAddOn.tsx`\\n\\n3. Verify your plugin works in a browser environment.\\n   1. Clone [Flipper repo](https://github.com/facebook/flipper).\\n   2. Navigate to the `desktop` folder.\\n   3. In your terminal run `yarn`.\\n   4. Run `yarn flipper-server`.\\n   5. Load your plugin and make sure it works.\\n\\n## P.S. Flipper needs you!\\n\\nFlipper is maintained by a small team at Meta, yet is serving over a hundred\\nplugins and dozens of different targets. Our team\'s goal is to support Flipper\\nas a plugin-based platform for which we maintain the infrastructure. We don\'t\\ntypically invest in individual plugins, but we do love plugin improvements.\\n\\nFor that reason, we\'ve marked many requests in the issue tracker as\\n[PR Welcome](https://github.com/facebook/flipper/issues?q=is%3Aissue+is%3Aopen+label%3A%22PR+welcome%22).\\nContributing changes should be as simple as cloning the\\n[repository](https://github.com/facebook/flipper) and running\\n`yarn && yarn start` in the `desktop/` folder.\\n\\nInvesting in debugging tools, both generic ones or just for specific apps, will\\nbenefit iteration speed. And we hope Flipper will make it as hassle free as\\npossible to create your debugging tools. For an overview of Flipper for React\\nNative, and why and how to build your own plugins, we recommend checking out the\\n[Flipper: The Extensible DevTool Platform for React Native](https://youtu.be/WltZTn3ODW4)\\ntalk.\\n\\nHappy debugging!"},{"id":"/2022/02/21/js-flipper-announcement","metadata":{"permalink":"/blog/2022/02/21/js-flipper-announcement","source":"@site/blog/2022-02-21-js-flipper-announcement.md","title":"Flipper is coming to your web and Node.js apps","description":"Flipper now provides an official JavaScript client. We will see what `js-flipper` is, go over Flipper communication protocol, talk about what it takes to build a new Flipper client.","date":"2022-02-21T00:00:00.000Z","formattedDate":"February 21, 2022","tags":[{"label":"flipper","permalink":"/blog/tags/flipper"},{"label":"web","permalink":"/blog/tags/web"},{"label":"react","permalink":"/blog/tags/react"},{"label":"node.js","permalink":"/blog/tags/node-js"}],"readingTime":8.74,"hasTruncateMarker":true,"authors":[{"name":"Andrey Goncharov","title":"Software Engineer","url":"https://github.com/aigoncharov","imageURL":"https://avatars.githubusercontent.com/u/12794628?v=4"}],"frontMatter":{"title":"Flipper is coming to your web and Node.js apps","author":"Andrey Goncharov","author_title":"Software Engineer","author_url":"https://github.com/aigoncharov","author_image_url":"https://avatars.githubusercontent.com/u/12794628?v=4","tags":["flipper","web","react","node.js"],"description":"Flipper now provides an official JavaScript client. We will see what `js-flipper` is, go over Flipper communication protocol, talk about what it takes to build a new Flipper client.","image":"/img/js-flipper.jpg","hide_table_of_contents":false},"prevItem":{"title":"Headless Flipper - what it means for plugin developers","permalink":"/blog/2022/05/20/preparing-for-headless-flipper"},"nextItem":{"title":"Flipper 2021 Roadmap Update","permalink":"/blog/2021/10/14/roadmap"}},"content":"![Cover image](/img/js-flipper.jpg)\\n\\nFor quite some time already, Flipper has secretly provided an experimental\\nJavaScript SDK to support connections from browsers and Node.js under the name\\nof `flipper-js-client-sdk`. With the ongoing migration of all our clients to\\nWebSockets, we have committed to providing an official documented SDK for\\nJavaScript clients. Without further ado, welcome\\n[js-flipper](https://www.npmjs.com/package/js-flipper)!\\n\\nIn this post we will:\\n\\n- See what `js-flipper` is\\n- Get acquainted with how to build a Flipper plugin for a React app\\n- Learn how Flipper talks to a mobile device\\n- Dive deeper into the message structure\\n- Glance at what it takes to support a new platform\\n\\n\x3c!--truncate--\x3e\\n\\n## What `js-flipper` is and why it matters\\n\\nFlipper supports native iOS, native Android apps and React Native apps out of\\nthe box. Now with `js-flipper`, Flipper also supports JavaScript apps. Any\\nJavaScript app, whether they run in your browser or on your Node.js server, can\\nnow connect to Flipper for a debugging session.\\n\\n`js-flipper` is a new NPM package that exposes a Flipper client to your\\nJavaScript apps. Any Flipper client, in its turn, is a set of abstractions that\\nlet your device connect and talk to Flipper. Long story short, `js-flipper`\\nallows you to easily write Flipper plugins for your web and Node.js apps.\\n\\n> [Here](https://fbflipper.com/docs/tutorial/javascript/) is how you can write\\n> your first simple plugin.\\n\\nWhy does it matter?\\n\\nIt\'s a huge deal for two reasons:\\n\\n1. Flipper at its core is just a device discovery service with a message bus.\\n   Its power comes from the plugins and the ecosystem.\\n2. It brings us one step closer to our goal of running Flipper everywhere. Bring\\n   Flipper to your microwave! On a serious note, more platforms -> bigger\\n   community -> more developers -> more plugins -> better Flipper for everyone.\\n\\nLet\'s take a quick look at the principal architecture of Flipper:\\n\\n![Flipper architecture](/img/flipper-arch.svg)\\n\\nHere is what happens there:\\n\\n1. Flipper constantly polls\\n   [ADB](https://developer.android.com/studio/command-line/adb) for available\\n   Android devices and [IDB](https://fbidb.io/) for available iOS devices.\\n2. If the device is running an app with an enabled Flipper client, the client\\n   tries to connect to Flipper on your laptop. It lets Flipper know that there\\n   is an app that it can talk to. Flipper and app chit-chat a bit negotiating\\n   the security and the list of supported plugins.\\n3. The developer picks one of the connected apps / devices. Say, it\'s the app.\\n4. The developer clicks one of the available plugins.\\n5. The plugin starts talking to the app on the device via the message bus\\n   exposed by Flipper. The plugin asks for necessary data from the app and shows\\n   it in a pretty UI.\\n\\nAt Meta, we have many active plugins, across a wide variety of devices, not just\\nphones, but also Quests, desktop applications, etc. At its core, Flipper is\\ndata-agnostic and connect data flows to plugin displays. All Flipper core (we\\ncall it Flipper Server) knows is what devices and Flipper-enabled apps are out\\nthere. I hope it gets us on the same page regarding why plugins (and plugin\\ndevelopers!) are crucial for Flipper.\\n\\nAnother important conclusion you could draw from the diagram is that the state\\nof Flipper plugins is ephemeral and lives in the UI.\\n\\n## How Flipper talks to a mobile device\\n\\nLet\'s dive a bit deeper into how exactly the device and Flipper talk. Flipper\\npulls device logs from ADB/IDB. For everything else, Flipper expects the app\\n(Flipper client inside of the app) to open a WebSocket connection to Flipper.\\n\\nThe algorithm looks like this:\\n\\n1. The app opens a WebSocket connection to Flipper.\\n2. They exchange certificates. Flipper connects to the app using ADB/IDB and\\n   writes a certificate to the app storage.\\n3. The app opens a secure WebSocket connection to Flipper using the certificate.\\n\\nWhy do we even bother with the certificate exchange process? One of the\\npotential attack vectors is that a developer could install a malicious app on\\nthe testing device. That app could spin up a WebSocket server and mask itself as\\nFlipper. However, unlike Flipper, the malicious app can\'t access the file\\nstorage of another app. As a result, it can\'t complete the certificate exchange\\nprocess.\\n\\nOn mobile devices certificate exchange is important, so that other apps on the\\nphone can\'t impersonate Flipper. For browser apps this isn\'t an issue as the\\nbrowser already makes sure a malicious page cannot act as Flipper server. For\\nplatforms like this, we use a simplified connection algorithm:\\n\\n1. The app opens a WebSocket connection to Flipper.\\n2. Bingo!\\n\\n`js-flipper` implements the second algorithm, without the certificate exchange.\\n\\n## Message protocol and structure\\n\\nOnce the final WebSocket connection is established, Flipper starts talking to\\nthe app:\\n\\n1. It sends `getPlugins` and `getBackgroundPlugins` messages to get a list of\\n   plugins supported by the app.\\n2. Flipper displays the available plugins to the developer.\\n3. Developer clicks on one of the plugins (enables a plugin).\\n4. Flipper loads the UI for the plugin. Let\'s settle on calling the part of the\\n   plugin \\"desktop plugin\\" and the device part of the plugin \\"client plugin\\".\\n5. Flipper sends `init` message to the app.\\n6. Client plugin `onConnect` code is executed. Read more about Client Plugin API\\n   [here](https://fbflipper.com/docs/extending/create-plugin/).\\n7. Whenever a \\"desktop plugin\\" needs some data from the device it sends an\\n   `execute` message to the \\"client plugin\\" on the device.\\n8. \\"Client plugin\\" replies with the data.\\n9. \\"Client plugin\\" might force the \\"desktop plugin\\" to do something as well by\\n   sending an `execute` message as well. However, it is rare. In the current\\n   implementation, the \\"client plugin\\" can never expect a reply back from the\\n   \\"desktop plugin\\". In other words, consider it as an event sink, not as a way\\n   to extract some data from the \\"desktop plugin\\".\\n10. When the plugin is deactivated a `deinit` message is sent to the \\"client\\n    plugin\\".\\n11. Client plugin `onDisconnect` code is executed.\\n\\n> The process above is for the insecure WebSocket connections we currently use\\n> in `js-flipper`. It is more complicated for secure WebSocket connections that\\n> require certificate exchange.\\n\\nFlipper expects each message to have the following structure:\\n\\n```ts\\nexport interface FlipperRequest {\\n  method: string; // \'getPlugins\' | \'getBackgroundPlugins\' | \'init\' | \'deinit\' | \'execute\' | \'isMethodSupported\'\\n  params?: {\\n    api: string; // Plugin ID (name)\\n    // These nested `method` and `params` could be anything.\\n    // You set them yourself as you see fit to support the data exchange between the \\"desktop plugin\\" and the \\"client plugin\\".\\n    // For example, for \'ReactNativeTicTacToe\' we support 2 methods: \'SetState\' and \'GetState\'.\\n    // We pass a game state with a \'SetState\' message. See https://fbflipper.com/docs/tutorial/javascript/#step-3-call-addplugin-to-add-your-plugin\\n    method: string;\\n    params?: unknown;\\n  };\\n}\\n```\\n\\nThe only exception is the response message the \\"client plugin\\" sends back when\\nthe data is requested.\\n\\n```ts\\nexport type FlipperResponse = {\\n  id: number;\\n  success?: object | string | number | boolean | null;\\n  error?: {\\n    message: string;\\n    stacktrace?: string;\\n    name?: string;\\n  };\\n};\\n```\\n\\n## Building a new client\\n\\nAt this point, you know what messages your client needs to support in a Flipper\\nclient:\\n\\n- `getPlugins`\\n- `getBackgroundPlugins`\\n- `init`\\n- `deinit`\\n- `execute`\\n\\nOne other message we did not mention before is `isMethodSupported`. Its job is\\nto reply back to a \\"desktop plugin\\" whether a \\"client plugin\\" supports one of\\nplugin messages (that nested `method` field). It\'s useful when you have a single\\n\\"desktop plugin\\" implementation, but different \\"client plugin\\" implementations.\\nFor example, some operations might not be supported on iOS, but are supported on\\nAndroid. Alternatively, it can address version differences between the plugin\\ninstalled on the device and the one loaded into Flipper.\\n\\nIf you want to build a proper Flipper client, you also need to provide an\\nabstraction for plugin developers. Consider matching\\n[what we have for existing clients](https://fbflipper.com/docs/extending/create-plugin/#flipperplugin).\\n\\nMost of the groundwork for handling connections and doing certificate exchange\\nis already done in our\\n[C++ engine](https://github.com/facebook/flipper/tree/main/xplat). Our iOS,\\nAndroid, React Native clients use it under the hood. `js-flipper` implements\\neverything from scratch using native browser APIs (for Node.js apps we\\n[require developers to provide a WebSocket implementation](https://github.com/facebook/flipper/tree/main/js/js-flipper#nodejs)).\\n\\nHere is a detailed document on how to\\n[implement a client](https://fbflipper.com/docs/extending/new-clients/). You\\nmight also want to check the source code of our existing clients:\\n\\n- [iOS](https://github.com/facebook/flipper/tree/main/iOS/FlipperKit)\\n- [Android](https://github.com/facebook/flipper/tree/main/android/src/main)\\n- [React Native](https://github.com/facebook/flipper/tree/main/react-native/react-native-flipper)\\n- [JavaScript](https://github.com/facebook/flipper/tree/main/js/js-flipper)\\n\\n## What\'s next?\\n\\nAs of now, we do not provide any default plugins you might be used to for\\n`js-flipper` (Layout, Logs, Navigation, Crash Reporter, and others). We hope\\nthis will change in the future with the help of ur beloved open-source\\ncommunity!\\n\\n_Call to action!_\\n\\nWe would like to encourage you to play with `js-flipper`. See how it fits your\\nuse-case and get back back to us with your feedback on\\n[GitHub](https://github.com/facebook/flipper/issues). If you find yourself\\nimplementing one of your favorite Flipper plugins for `js-flipper`, do not\\nhesitate and raise a PR!\\n\\nPlugins can be either generic or very application specific. Plugins can interact\\nwith Redux or MobX stores, read performance data or console logs from the\\nbrowser. At Meta, we also see a lot of plugins that are very application\\nspecific. For example, plugins that allow logging in as specific test users with\\na single click, reading the internal state of NewsFeed and interacting with it,\\nsimulating photos captured by a smartphone, etc. A Flipper plugin can be any\\nform of UI that is useful to speed up debugging and tasks on things you work on\\nfrequently!\\n\\n## P.S. Flipper needs you!\\n\\nFlipper is maintained by a small team at Meta, yet is serving over a hundred\\nplugins and dozens of different targets. Our team\'s goal is to support Flipper\\nas a plugin-based platform for which we maintain the infrastructure. We don\'t\\ntypically invest in individual plugins, but we do love plugin improvements. For\\nexample, the support for mocking network requests (on Android) was entirely\\ncontributed by the community (thanks\\n[James Harmon](https://github.com/bizzguy)!). As was Protobuf support (thanks\\n[Harold Martin](https://github.com/hbmartin)!).\\n\\nFor that reason, we\'ve marked many requests in the issue tracker as\\n[PR Welcome](https://github.com/facebook/flipper/issues?q=is%3Aissue+is%3Aopen+label%3A%22PR+welcome%22).\\nContributing changes should be as simple as cloning the\\n[repository](https://github.com/facebook/flipper) and running\\n`yarn && yarn start` in the `desktop/` folder.\\n\\nInvesting in debugging tools, both generic ones or just for specific apps, will\\nbenefit iteration speed. And we hope Flipper will make it as hassle free as\\npossible to create your debugging tools. For an overview of Flipper for React\\nNative, and why and how to build your own plugins, we recommend checking out the\\n[Flipper: The Extensible DevTool Platform for React Native](https://youtu.be/WltZTn3ODW4)\\ntalk.\\n\\nHappy debugging!"},{"id":"/2021/10/14/roadmap","metadata":{"permalink":"/blog/2021/10/14/roadmap","source":"@site/blog/2021-10-14-roadmap.md","title":"Flipper 2021 Roadmap Update","description":"What is next for Flipper?","date":"2021-10-14T00:00:00.000Z","formattedDate":"October 14, 2021","tags":[{"label":"flipper","permalink":"/blog/tags/flipper"},{"label":"react-native","permalink":"/blog/tags/react-native"}],"readingTime":3.425,"hasTruncateMarker":true,"authors":[{"name":"Michel Weststrate","title":"Facebook Engineer, working on Flipper","url":"https://github.com/mweststrate","imageURL":"https://avatars.githubusercontent.com/u/1820292?s=400&u=dd67df7c370110b3d4b5a22247cc08f73389bcaf&v=4"}],"frontMatter":{"title":"Flipper 2021 Roadmap Update","author":"Michel Weststrate","author_title":"Facebook Engineer, working on Flipper","author_url":"https://github.com/mweststrate","author_image_url":"https://avatars.githubusercontent.com/u/1820292?s=400&u=dd67df7c370110b3d4b5a22247cc08f73389bcaf&v=4","tags":["flipper","react-native"],"description":"What is next for Flipper?","hide_table_of_contents":false},"prevItem":{"title":"Flipper is coming to your web and Node.js apps","permalink":"/blog/2022/02/21/js-flipper-announcement"}},"content":"Over the last year, the Flipper adoption in the open source community has doubled, and for many React Native developers Flipper has become the default debugging tool.\\nAs the community continues to grow, we believe it\u2019s important to share updates about our plans. \\n\\n\x3c!--truncate--\x3e\\n\\n## A short look back\\n\\nDuring the first half of 2021, we have introduced support for connecting to physical iOS devices by leveraging [idb](https://fbidb.io/).\\nWe have also introduced the [Sandy plugin architecture](https://fbflipper.com/docs/extending/sandy-migration), which simplifies the creation of plugins and provides a richer set of UI components by adopting [Ant Design](https://ant.design/components/overview/).\\nThe new architecture is strongly typed, easily unit testable and allows us to [process and render data much faster](https://youtu.be/WCs09c1B1Lk), which has (at Facebook at least) significantly increased the up-time of Flipper.\\nThe underlying mechanism has been open sourced as the [`flipper-data-source`](https://www.npmjs.com/package/flipper-data-source) package.\\nAnd last but not least, we introduced dark mode support.\\n\\n## What is ahead?\\n\\nOur focus for Flipper for Q4 2021 is to remove friction and make it easier to onboard new targets. \\nThis is because, in many instances, Flipper isn\'t used just to debug mobile apps, but also to debug many of our other products, such as native and Electron-based desktop applications, and devices like Oculus, Portal or feature phones.\\n\\nLooking ahead, we plan to:\\n\\n* **Move away from RSocket**. RSocket is a protocol that served us well for encrypted communication between Flipper and clients. However, especially in the React Native world, the dependencies it brings has been a continuous source of build issues with any new iOS update. We are now testing internally a version of Flipper that uses secured WebSocket connections instead. The resulting simplified dependency chain should prevent a lot of current and future build issues.\\n* **Introduce a headless Flipper version**. The Flipper team is currently investing in decoupling all network, OS and device interaction logic from the Flipper front end. This will make it possible to run Flipper as a headless service, and embed the UI in any web-based stack. By default Flipper will remain an Electron app, but this change introduces a lot of new possibilities: It will be possible to run Flipper headless on CI systems to collect data during test runs. It will be possible to embed the Flipper UI inside IDEs to reduce context switching. To achieve this, the Flipper code base will be split into many smaller packages.\\n* **Improve the Flipper marketplace**. We are working on an improved Flipper plugin marketplace, to help promote plugins, and create a better understanding of what plugins do, and how they are supported.\\n* **Create a reference WebSocket implementation**. For Native mobile apps and React Native, there are standard packages to register plugins and connect to the Flipper desktop application. Although several WebSocket implementations exist to do the same for web apps, we don\'t have a standardized SDK and example project for integrating web applications with Flipper. By changing this we\'ll hope to make it easy for front-end engineers to leverage Flipper.\\n* **Add support for React Native Windows**. \'nough said.\\n\\n## Flipper needs you!\\n\\nFlipper is maintained by a small team at Facebook, yet serving over a hundred plugins and dozens of different targets. Our team\'s goal is to support Flipper as a plugin-based platform for which we maintain the infrastructure.\\nWe don\'t typically invest in individual plugins, but we do love plugin improvements. For example, the support for mocking network requests (on Android) was entirely contributed by the community (thanks [James Harmon](https://github.com/bizzguy)!). As was Protobuf support (thanks [Harold Martin](https://github.com/hbmartin)!).\\n\\nFor that reason, we\'ve marked many requests in the issue tracker as [PR Welcome](https://github.com/facebook/flipper/issues?q=is%3Aissue+is%3Aopen+label%3A%22PR+welcome%22).\\nContributing changes should be as simple as cloning the [repository](https://github.com/facebook/flipper) and running `yarn && yarn start` in the `desktop/` folder.\\n\\nInvesting in debugging tools, both generic ones or just for specific apps, will benefit iteration speed.\\nAnd we hope Flipper will make it as hassle free as possible to create your debugging tools.\\nFor an overview of Flipper for React Native, and why and how to build your own plugins, we recommend checking out the [Flipper: The Extensible DevTool Platform for React Native](https://youtu.be/WltZTn3ODW4) talk.\\n\\nHappy debugging!"}]}')}}]);