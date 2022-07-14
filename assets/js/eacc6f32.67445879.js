"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1963],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>d,MDXProvider:()=>c,mdx:()=>g,useMDXComponents:()=>m,withMDXComponents:()=>p});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},o.apply(this,arguments)}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=i.createContext({}),p=function(e){return function(t){var n=m(t.components);return i.createElement(e,o({},t,{components:n}))}},m=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=m(e.components);return i.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=m(n),c=a,h=p["".concat(r,".").concat(c)]||p[c]||u[c]||o;return n?i.createElement(h,l(l({ref:t},d),{},{components:n})):i.createElement(h,l({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var d=2;d<o;d++)r[d]=n[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},11725:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>x,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var i=n(83117),a=n(80102),o=(n(67294),n(3905)),r=n(44996),l=["components"],s={id:"react-native",title:"Troubleshooting React Native Issues",sidebar_label:"React Native Issues",custom_edit_url:"https://www.internalfb.com/intern/diffusion/FBS/browsefile/master/xplat/sonar/docs/react-native.mdx"},d=void 0,p={unversionedId:"getting-started/troubleshooting/react-native",id:"getting-started/troubleshooting/react-native",title:"Troubleshooting React Native Issues",description:"Flipper is a work in progress and issues may occur. This page contains known issues associated with React Native and provides steps you can take to try to resolve them.",source:"@site/../docs/getting-started/troubleshooting/react-native.mdx",sourceDirName:"getting-started/troubleshooting",slug:"/getting-started/troubleshooting/react-native",permalink:"/docs/getting-started/troubleshooting/react-native",draft:!1,editUrl:"https://www.internalfb.com/intern/diffusion/FBS/browsefile/master/xplat/sonar/docs/react-native.mdx",tags:[],version:"current",frontMatter:{id:"react-native",title:"Troubleshooting React Native Issues",sidebar_label:"React Native Issues",custom_edit_url:"https://www.internalfb.com/intern/diffusion/FBS/browsefile/master/xplat/sonar/docs/react-native.mdx"},sidebar:"main",previous:{title:"iOS Issues",permalink:"/docs/getting-started/troubleshooting/ios"},next:{title:"Implementing a Flipper Client",permalink:"/docs/extending/new-clients"}},m={},c=[{value:"I don&#39;t see the &#39;React Native&#39; device",id:"i-dont-see-the-react-native-device",level:3},{value:"I see my device / emulator, but I can&#39;t see the app",id:"i-see-my-device--emulator-but-i-cant-see-the-app",level:3},{value:"I&#39;m seeing &quot;certificate verify failed, type = SSL error&quot; in the logs",id:"im-seeing-certificate-verify-failed-type--ssl-error-in-the-logs",level:3},{value:"I see my app, but I don&#39;t see the external plugins I&#39;ve installed",id:"i-see-my-app-but-i-dont-see-the-external-plugins-ive-installed",level:3},{value:"On iOS it seems that the Flipper dependencies are compiled when making a release build",id:"on-ios-it-seems-that-the-flipper-dependencies-are-compiled-when-making-a-release-build",level:3},{value:"The React DevTools don&#39;t seem to connect",id:"the-react-devtools-dont-seem-to-connect",level:3},{value:"Cannot inspect an element in the React DevTools: &quot;Could not inspect element with id ...&quot;",id:"cannot-inspect-an-element-in-the-react-devtools-could-not-inspect-element-with-id-",level:3},{value:"How to select a specific element in the React DevTools?",id:"how-to-select-a-specific-element-in-the-react-devtools",level:3},{value:"The Hermes Debugger does not connect",id:"the-hermes-debugger-does-not-connect",level:3},{value:"iOS Build errors in React Native",id:"ios-build-errors-in-react-native",level:3},{value:"<code>YogaKit.modulemap</code> not found",id:"yogakitmodulemap-not-found",level:3},{value:"Swift errors",id:"swift-errors",level:3},{value:"Opting out from Flipper (iOS)",id:"opting-out-from-flipper-ios",level:2},{value:"Disable Flipper on CI builds (iOS)",id:"disable-flipper-on-ci-builds-ios",level:2}],u=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",t)}},h=u("InternalReactNative"),g=u("OssOnly"),v={toc:c};function x(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.mdx)("wrapper",(0,i.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"Flipper is a work in progress and issues may occur. This page contains known issues associated with React Native and provides steps you can take to try to resolve them."),(0,o.mdx)("p",null,"Make sure the project is using the ",(0,o.mdx)("a",{parentName:"p",href:"/docs/getting-started/react-native#using-the-latest-flipper-sdk"},"latest Flipper SDK"),"."),(0,o.mdx)("p",null,"When using Flipper with React Native, two devices should show up:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("strong",{parentName:"li"},"The 'React Native' device"),' - this is the "device" that talks to the Metro server and shows plugins that connect to or through Metro, such as the React DevTools, the Hermes Debugger and Metro logs.'),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("strong",{parentName:"li"},"The device on which your app is running")," - This is the device that Flipper connects to ADB / IDB. Flipper primarily support emulators and USB connected devices (examples: ",(0,o.mdx)("inlineCode",{parentName:"li"},"SM760FS"),", ",(0,o.mdx)("inlineCode",{parentName:"li"},"Pixel 3"),", ",(0,o.mdx)("inlineCode",{parentName:"li"},"android_emulator"),", and ",(0,o.mdx)("inlineCode",{parentName:"li"},"iPhone 11"),").")),(0,o.mdx)(h,{mdxType:"InternalReactNative"}),(0,o.mdx)(g,{mdxType:"OssOnly"},(0,o.mdx)("h3",{id:"i-dont-see-the-react-native-device"},"I don't see the 'React Native' device"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Make sure that the Metro server is running."),(0,o.mdx)("li",{parentName:"ol"},"Make sure you are on React Native 0.62 or higher."),(0,o.mdx)("li",{parentName:"ol"},"Verify that the ",(0,o.mdx)("inlineCode",{parentName:"li"},"@react-native-community/cli")," version is ",(0,o.mdx)("inlineCode",{parentName:"li"},"0.47.0")," or higher (using ",(0,o.mdx)("inlineCode",{parentName:"li"},"yarn why @react-native-community/cli"),").")),(0,o.mdx)("h3",{id:"i-see-my-device--emulator-but-i-cant-see-the-app"},"I see my device / emulator, but I can't see the app"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Make sure you are running a debug build. Flipper ",(0,o.mdx)("em",{parentName:"li"},"only")," supports debug builds."),(0,o.mdx)("li",{parentName:"ol"},"If you are upgraded from RN < 0.62.2, make sure you've updated all the dependencies and build related files according to the upgrade helper. For example: ",(0,o.mdx)("a",{parentName:"li",href:"https://react-native-community.github.io/upgrade-helper/?from=0.61.4&to=0.62.2"},"https://react-native-community.github.io/upgrade-helper/?from=0.61.4&to=0.62.2")),(0,o.mdx)("li",{parentName:"ol"},"If you upgraded, make sure you made a clean build: ",(0,o.mdx)("inlineCode",{parentName:"li"},"cd android && ./gradlew clean"),", ",(0,o.mdx)("inlineCode",{parentName:"li"},"cd iOS && pod install --repo-update"),"."),(0,o.mdx)("li",{parentName:"ol"},"For iOS, make sure it works on a simulator first."),(0,o.mdx)("li",{parentName:"ol"},"(Unconfirmed) check the deployment info target in the XCode project settings. Target should be ",(0,o.mdx)("inlineCode",{parentName:"li"},"iOS 9.0"),".")),(0,o.mdx)("h3",{id:"im-seeing-certificate-verify-failed-type--ssl-error-in-the-logs"},'I\'m seeing "certificate verify failed, type = SSL error" in the logs'),(0,o.mdx)("p",null,"Ensure that your device is set to the correct time and time zone for TLS verification to work."),(0,o.mdx)("h3",{id:"i-see-my-app-but-i-dont-see-the-external-plugins-ive-installed"},"I see my app, but I don't see the external plugins I've installed"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Make sure you've installed the desktop part of the plugin (usually through 'Manage plugins' in Flipper). If no plugins show up under 'Manage plugins' > 'Status' make sure you've selected your running device in the Flipper toolbar (and ",(0,o.mdx)("em",{parentName:"li"},"not")," 'React Native')."),(0,o.mdx)("li",{parentName:"ol"},"Make sure you've installed the app part of the plugin. Typically, the installation instructions of the plugin itself need to be followed here."),(0,o.mdx)("li",{parentName:"ol"},"Make sure you've installed the latest version of ",(0,o.mdx)("inlineCode",{parentName:"li"},"react-native-flipper")," in your app, and run ",(0,o.mdx)("inlineCode",{parentName:"li"},"pod install")," in the ",(0,o.mdx)("inlineCode",{parentName:"li"},"iOS")," dir afterwards."),(0,o.mdx)("li",{parentName:"ol"},"Make sure you've restarted both Flipper and your app.")),(0,o.mdx)("h3",{id:"on-ios-it-seems-that-the-flipper-dependencies-are-compiled-when-making-a-release-build"},"On iOS it seems that the Flipper dependencies are compiled when making a release build"),(0,o.mdx)("p",null,"That is correct. The dependencies won't be included in the release (when using ",(0,o.mdx)("inlineCode",{parentName:"p"},"react-native-flipper")," > 0.45) and can't be excluded from the build process."),(0,o.mdx)("h3",{id:"the-react-devtools-dont-seem-to-connect"},"The React DevTools don't seem to connect"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Make sure there are no other instances of the React DevTools are running (such as a stand-alone version). Restart Flipper if needed after closing other tools."),(0,o.mdx)("li",{parentName:"ol"},"Make sure you have only one device running to connect to. If there are multiple devices, close them and try again (restart Flipper if needed)."),(0,o.mdx)("li",{parentName:"ol"},"Make sure there is only one RN app running on the device.")),(0,o.mdx)("h3",{id:"cannot-inspect-an-element-in-the-react-devtools-could-not-inspect-element-with-id-"},'Cannot inspect an element in the React DevTools: "Could not inspect element with id ..."'),(0,o.mdx)("p",null,'On selecting a specific element in the React DevTools, the "Could not inspect element with id XXX" appears when the version of the DevTools shipped in Flipper is incompatible with the ',(0,o.mdx)("inlineCode",{parentName:"p"},"react-devtools-core")," package used by the React Native application."),(0,o.mdx)("p",null,"Flipper supports using a globally installed ",(0,o.mdx)("inlineCode",{parentName:"p"},"react-devtools")," (after using ",(0,o.mdx)("inlineCode",{parentName:"p"},"npm install -g react-devtools@x.x.x"),") instead of the embedded one. This should help with any compatibility issues."),(0,o.mdx)("p",null,"Another way to fix this is to set the ",(0,o.mdx)("inlineCode",{parentName:"p"},"resolutions")," field in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"package.json")," of the app to force a specific version and then run ",(0,o.mdx)("inlineCode",{parentName:"p"},"yarn install"),", for example:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'"resolutions": {\n  "react-devtools-core": "4.13.2"\n}\n')),(0,o.mdx)("h3",{id:"how-to-select-a-specific-element-in-the-react-devtools"},"How to select a specific element in the React DevTools?"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Trigger the debug menu on your RN app (you can use the button in the Flipper toolbar)."),(0,o.mdx)("li",{parentName:"ol"},"Use ",(0,o.mdx)("inlineCode",{parentName:"li"},"Show Inspector"),". Flipper now follows the selection on your device.")),(0,o.mdx)("h3",{id:"the-hermes-debugger-does-not-connect"},"The Hermes Debugger does not connect"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Make sure the Hermes engine is ",(0,o.mdx)("a",{parentName:"li",href:"https://reactnative.dev/docs/hermes"},"enabled"),"."),(0,o.mdx)("li",{parentName:"ol"},"Make sure only one device with React Native is running."),(0,o.mdx)("li",{parentName:"ol"},"Make sure there is only one RN app running on the device."),(0,o.mdx)("li",{parentName:"ol"},"Make sure the React Native app is ",(0,o.mdx)("em",{parentName:"li"},"not")," in debug mode already (trigger dev menu, and make sure that ",(0,o.mdx)("inlineCode",{parentName:"li"},"Remote JS Debugging")," is ",(0,o.mdx)("em",{parentName:"li"},"not")," enabled).")),(0,o.mdx)("h3",{id:"ios-build-errors-in-react-native"},"iOS Build errors in React Native"),(0,o.mdx)("p",null,"First, make sure your cocoapods is up to date (",(0,o.mdx)("inlineCode",{parentName:"p"},"sudo gem install cocoapods"),"), and that you are using the ",(0,o.mdx)("a",{parentName:"p",href:"/docs/getting-started/react-native#using-the-latest-flipper-sdk"},"latest FlipperKit"),"."),(0,o.mdx)("p",null,"For inexplainable build errors, clone and verify if our ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/facebook/flipper/tree/main/react-native/ReactNativeFlipperExample"},"reference project")," builds and runs locally. If it does, it's recommended to compare the ",(0,o.mdx)("inlineCode",{parentName:"p"},"package.json")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"ios/Podfile")," files with yours. If that doesn't yield anything, compare the ",(0,o.mdx)("inlineCode",{parentName:"p"},"ios/Podfile.lock")," as well to verify any transitive pod dependencies need updating."),(0,o.mdx)("h3",{id:"yogakitmodulemap-not-found"},(0,o.mdx)("inlineCode",{parentName:"h3"},"YogaKit.modulemap")," not found"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Make sure you are opening the ",(0,o.mdx)("inlineCode",{parentName:"li"},".xcodeworkspace")," dir when building from XCode, ",(0,o.mdx)("em",{parentName:"li"},"not")," the project file. Pods based projects should always be opened this way."),(0,o.mdx)("li",{parentName:"ol"},"Make sure you've run ",(0,o.mdx)("inlineCode",{parentName:"li"},"cd ios && pod install"),"."),(0,o.mdx)("li",{parentName:"ol"},"Restarting your machine seems to magically fix the issue for quite some people. This might especially be needed after doing an XCode upgrade."),(0,o.mdx)("li",{parentName:"ol"},"Make sure that the simulators are spawned by your current Xcode version. Force quite all simulators, run ",(0,o.mdx)("inlineCode",{parentName:"li"},"sudo xcode-select --switch /Applications/Xcode.app")," (update path were necessary) and start simulators & Flipper again."),(0,o.mdx)("li",{parentName:"ol"},"Make sure the iOS build target version aligns with the podfile and target iOS 11 (see the following ",(0,o.mdx)("a",{parentName:"li",href:"https://github.com/facebook/react-native/issues/28503#issuecomment-696026013"},"Example"),")."),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("a",{parentName:"li",href:"https://github.com/facebook/react-native/issues/28503#issuecomment-621662670"},"Verify")," XCode has enough permissions."),(0,o.mdx)("li",{parentName:"ol"},"More solutions might be found in this ",(0,o.mdx)("a",{parentName:"li",href:"https://github.com/facebook/react-native/issues/28503"},"thread"),".")),(0,o.mdx)("h3",{id:"swift-errors"},"Swift errors"),(0,o.mdx)("p",null,"If you experience errors such as ",(0,o.mdx)("inlineCode",{parentName:"p"},"Undefined symbol: associated type descriptor for FloatLiteralType")," or ",(0,o.mdx)("inlineCode",{parentName:"p"},"Undefined symbol: __swift_FORCE_LOAD_$_swiftCompatibility50")," after going through the ",(0,o.mdx)("a",{parentName:"p",href:"/docs/getting-started/"},"Getting Started")," page, do the following:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Open your project in Xcode.")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Click in your project's name on the left side.")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Make sure that you choose your project under ",(0,o.mdx)("inlineCode",{parentName:"p"},"PROJECT")," on the screen that has been opened.")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Go to the tab ",(0,o.mdx)("inlineCode",{parentName:"p"},"Build Settings"),".")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Search for ",(0,o.mdx)("inlineCode",{parentName:"p"},"LD_RUNPATH_SEARCH_PATHS")," (make sure that ",(0,o.mdx)("inlineCode",{parentName:"p"},"All")," is selected).")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Double-click ",(0,o.mdx)("inlineCode",{parentName:"p"},"Runpath Search Paths")," and, in the dialog that opens, click on the plus button at the bottom-left corner and paste ",(0,o.mdx)("inlineCode",{parentName:"p"},"/usr/lib/swift $(inherited)")," there."),(0,o.mdx)("img",{alt:"Screenshot showing the places mentioned in the first steps",src:(0,r.default)("img/troubleshooting-react-native-ios-swift.png")})),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Now search for ",(0,o.mdx)("inlineCode",{parentName:"p"},"LIBRARY_SEARCH_PATHS"),".")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Double-click ",(0,o.mdx)("inlineCode",{parentName:"p"},"Library Search Paths")," and, in the dialog that opens, add the following items."),(0,o.mdx)("pre",{parentName:"li"},(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},'"$(TOOLCHAIN_DIR)/usr/lib/swift/$(PLATFORM_NAME)"\n"$(TOOLCHAIN_DIR)/usr/lib/swift-5.0/$(PLATFORM_NAME)"\n"$(inherited)"\n')),(0,o.mdx)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,o.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,o.mdx)("h5",{parentName:"div"},(0,o.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,o.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.mdx)("div",{parentName:"div",className:"admonition-content"},(0,o.mdx)("p",{parentName:"div"},"All of them should be added as ",(0,o.mdx)("inlineCode",{parentName:"p"},"non-recursive")," (the default)."))),(0,o.mdx)("p",{parentName:"li"},"In the end it should look as follows:"),(0,o.mdx)("img",{alt:"Screenshot showing the places mentioned in the last steps",src:(0,r.default)("img/troubleshooting-react-native-ios-swift-2.png")}))),(0,o.mdx)("p",null,"Now you can run your build normally."),(0,o.mdx)("h2",{id:"opting-out-from-flipper-ios"},"Opting out from Flipper (iOS)"),(0,o.mdx)("p",null,"Comment out the relevant lines in ",(0,o.mdx)("inlineCode",{parentName:"p"},"ios/Podfile")," and run ",(0,o.mdx)("inlineCode",{parentName:"p"},"cd ios && pod install")," again:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-ruby"},"  # use_flipper!\n  # post_install do |installer|\n  #  flipper_post_install(installer)\n  # end\n")),(0,o.mdx)("h2",{id:"disable-flipper-on-ci-builds-ios"},"Disable Flipper on CI builds (iOS)"),(0,o.mdx)("p",null,"To speed up CI builds, Flipper can be disabled on CI environments by making the Flipper SDK inclusion conditional (this works on most CI providers, feel free to customize the environment variable):"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-ruby"},"  if !ENV['CI']\n    use_flipper!\n    post_install do |installer|\n      flipper_post_install(installer)\n    end\n  end\n"))))}x.isMDXComponent=!0}}]);